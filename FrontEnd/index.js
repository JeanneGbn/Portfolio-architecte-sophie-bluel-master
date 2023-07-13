const token = localStorage.getItem("token")

// Appels API 

async function getProjects() {
    return fetch("http://localhost:5678/api/works")
        .then((response) => response.json())
        .then(works => {
            let worksData = works
            return works
        })
}

async function getFilters() {
    return fetch("http://localhost:5678/api/categories")
        .then((response) => response.json())
        .then(categories => {
           let categoriesData = categories
            return categories
        })
}

async function fetchDelete(imageId) {
    const token = localStorage.getItem("token")
    try {
        const response = await fetch(`http://localhost:5678/api/works/${imageId}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        if (response.ok) {
            console.log("Projet supprimé")
            return false
        } 
    } catch (error) {
        console.log(error);
    }
}


async function postWorks(formData) {
    return fetch("http://localhost:5678/api/works", {
        method: 'POST',
        headers: {
            "Authorization": `Bearer ${token}`
        },
        body: formData,
    })
    

}



// LOGOUT


const logoutButton = document.querySelector('.logout_button')
logoutButton.addEventListener('click', logout)

function logout(){
   if(token){
          localStorage.removeItem('token')
          location.reload()
      } else{
          console.log("error")
      }
    }

  

// Affichage projets


async function initProjects() {
    const projects = await getProjects();
    

  for (let i = 0; i < projects.length; i++) {

        const sectionGallery = document.querySelector(".gallery")
        const baliseFigure = document.createElement("figure")
        const imageElement = document.createElement("img")
        imageElement.src = projects[i].imageUrl
        imageElement.setAttribute('data-id-img', projects[i].id)
        const figCaption = document.createElement("figcaption")
        figCaption.innerText = projects[i].title
        sectionGallery.appendChild(baliseFigure)
        baliseFigure.appendChild(imageElement)
        baliseFigure.appendChild(figCaption)
        }
}


// Filtres et tri des projets 

async function initFilters() {

       const filters = await getFilters()
       const sectionFilter = document.querySelector('.filters')

   for (let i = 0; i < filters.length; i++) {
         
        const filterChoice = document.createElement("button")
        filterChoice.innerText = filters[i].name
        filterChoice.setAttribute("data-filterId", filters[i].id)
        sectionFilter.appendChild(filterChoice)
        filterChoice.addEventListener('click', handleClickFilter)
        const buttonAll = document.querySelector(".all")
        buttonAll.addEventListener('click', handleClickFilter)
    }
    
    const modifier = document.querySelector('.modifier')
    const logoutButton = document.querySelector('.logout_button')
    const loginButton = document.querySelector('.login_button')
    const topHead = document.querySelector('.top_head')

    if(token){
        sectionFilter.classList.add('hidden')
        modifier.classList.remove('hidden')
        loginButton.classList.add('hidden')
        logoutButton.classList.remove('hidden')
        const blackHeadBand = document.createElement("div")
        blackHeadBand.classList.add('js_black_band')
        topHead.appendChild(blackHeadBand)
        blackHeadBand.innerHTML =
        `<p> <i class="fa-regular fa-pen-to-square"></i> Mode édition </p>
         <button> publier les changements </button> `
    } else{
        sectionFilter.classList.remove('hidden')
        modifier.classList.add('hidden')
        logoutButton.classList.add('hidden')
        loginButton.classList.remove('hidden')
    }


}

initProjects()
initFilters()

async function handleClickFilter(event){
    
   
    let projectsFiltersArray = []
    const projects = await getProjects();
    const sectionGallery = document.querySelector(".gallery")
    sectionGallery.innerHTML = ""
    switch(event.target.getAttribute("data-filterId")){
    case "1":
        for (let i = 0; i < projects.length; i++) 
        if(projects[i].category.id === 1)
        projectsFiltersArray.push(projects[i])
       
        for (let a = 0; a < projectsFiltersArray.length; a++) {
       
            const baliseFigure = document.createElement("figure")
            const imageElement = document.createElement("img")
            imageElement.src = projectsFiltersArray[a].imageUrl
            const figCaption = document.createElement("figcaption")
            figCaption.innerText = projectsFiltersArray[a].title
            sectionGallery.appendChild(baliseFigure)
            baliseFigure.appendChild(imageElement)
            baliseFigure.appendChild(figCaption)
        }
            
        break
    case "2":
        for (let i = 0; i < projects.length; i++)
        if(projects[i].category.id === 2)
        
        projectsFiltersArray.push(projects[i]) 

        for (let a = 0; a < projectsFiltersArray.length; a++) {
       
            const baliseFigure = document.createElement("figure")
            const imageElement = document.createElement("img")
            imageElement.src = projectsFiltersArray[a].imageUrl
            const figCaption = document.createElement("figcaption")
            figCaption.innerText = projectsFiltersArray[a].title
            sectionGallery.appendChild(baliseFigure)
            baliseFigure.appendChild(imageElement)
            baliseFigure.appendChild(figCaption)
        }
       
        break
    case "3":
        for (let i = 0; i < projects.length; i++)
        if(projects[i].category.id === 3)
        projectsFiltersArray.push(projects[i])

        for (let a = 0; a < projectsFiltersArray.length; a++) {
       
            const baliseFigure = document.createElement("figure")
            const imageElement = document.createElement("img")
            imageElement.src = projectsFiltersArray[a].imageUrl
            const figCaption = document.createElement("figcaption")
            figCaption.innerText = projectsFiltersArray[a].title
            sectionGallery.appendChild(baliseFigure)
            baliseFigure.appendChild(imageElement)
            baliseFigure.appendChild(figCaption)
        }
        
        break
    default: 
    for (let i = 0; i < projects.length; i++) {

        
        const baliseFigure = document.createElement("figure")
        const imageElement = document.createElement("img")
        imageElement.src = projects[i].imageUrl
        const figCaption = document.createElement("figcaption")
        figCaption.innerText = projects[i].title
        sectionGallery.appendChild(baliseFigure)
        baliseFigure.appendChild(imageElement)
        baliseFigure.appendChild(figCaption)
        }

}

}

// Céations des modals

const modal = document.querySelector("#modale1")
const buttonModifier = document.querySelector(".modifier")

buttonModifier.addEventListener('click', openModal)
function openModal(){
    modal.classList.remove('hidden')
    stepOne()
}


async function stepOne(){
    const modalWrapper = document.querySelector(".modale_wrapper")
    modalWrapper.innerHTML =
   `<button class="close"> <i class="fa-solid fa-x"></i> </button>
    <div id="modale_title"> Galerie photo </div>
    <div class="all_pictures">  </div>
    <div class="buttons">
      <button class="add_picture"> Ajouter une photo  </button>
      <button class="delete_all">  Supprimer galerie </button>
    </div>`

  const projects = await getProjects()
  const allPictures = document.querySelector(".all_pictures")

  

   for (let i = 0; i < projects.length; i++) {
       
        const modalFigure = document.createElement("figure")
        const imageElement = document.createElement("img")
        imageElement.src = projects[i].imageUrl
        imageElement.setAttribute('data-id-img', projects[i].id)
        const trashIcone = document.createElement("i")
        trashIcone.className = 'fa-regular fa-trash-can'
        const editer = document.createElement("p")
        editer.innerHTML = `éditer`
        allPictures.appendChild(modalFigure)
        modalFigure.appendChild(imageElement)
        modalFigure.appendChild(trashIcone)
        modalFigure.appendChild(editer)
     }

     
  deletePicture()

  const addPictures = document.querySelector(".add_picture")
  addPictures.addEventListener('click', stepTwo)


  const modal = document.querySelector(".modal")
  const buttonClose = document.querySelector(".close")
  buttonClose.addEventListener('click', closeModal)
  function closeModal(){
    modal.classList.add('hidden')
    }

    addEventListener('click', (e) => {
        if (e.target === modal) {
          closeModal();
        }
      })

}

// Fonction permettant la suppression des projets

function deletePicture() {
    const allPictures = document.querySelector(".all_pictures")
    allPictures.addEventListener("click", (event) => {
        if (event.target.classList.contains("fa-trash-can")) {
            const selectedPicture = event.target.parentNode.querySelector("img")
            if (selectedPicture) {
                const imageId = selectedPicture.getAttribute('data-id-img')
                console.log("Image ID:", imageId)
                fetchDelete(imageId).then(() => {
                    selectedPicture.parentNode.remove()
                    const gallery = document.querySelector('.gallery')
                    gallery.innerHTML = ""
                    initProjects()
                })
            }
        }
    })

}


async function stepTwo(){
    const modalWrapper = document.querySelector(".modale_wrapper")
    modalWrapper.innerHTML =
    `<button class="previous"> <i class="fa-solid fa-arrow-left"></i> </button>
    <button class="close"> <i class="fa-solid fa-x"></i> </button>
    <div id="modale_title"> Ajout photo </div>
    <form id="add_picture_form" enctype="multipart/form-data">
        <div class="add_picture_space">
          <div class="add_picture_box">
            <i class="fa-regular fa-image previous__icone" ></i>
            <button class="button_ajouter_photo"> Ajouter photo</button>
            <input class="ajouter_photo" type="file" accept="image/jpeg,image/png">
            <img src="#" class="preview_img">
            <p> jpg, png : 4mo max</p>
          </div>
        </div>
        <div class="title_category_inputs">
          <div class="project_title">
             <p> Titre </p>
             <input class="project_title_input" type="textfields">
          </div>
          <div class="project_category">
             <p> Catégorie </p>
             <select class="project_category_input"> </select>
          </div>
        </div>
        <div class="validation_ajout">
           <button class="validation_button" type="submit"> Valider </button>
        </div>
    </form>`

    const backStepOne = document.querySelector(".previous")
    backStepOne.addEventListener('click', stepOne)

    const categories = await getFilters()
    const categoryInput = document.querySelector('.project_category_input')
    categories.forEach(category => {
        const option = document.createElement('option')
        option.value = category.id
        option.text = category.name
        categoryInput.append(option)
    });

    const modal = document.querySelector(".modal")
    const buttonClose = document.querySelector(".close")
    buttonClose.addEventListener('click', closeModal)
    function closeModal(){
      modal.classList.add('hidden')
    }

   addEventListener('click', (e) => {
       if (e.target === modal) {
         closeModal();
       }
     })


 // Récupération des données pour formulaire envoie nouveaux projets

    const title = document.querySelector('.project_title_input')
    const picture = document.querySelector('.ajouter_photo')
    const form = document.querySelector('#add_picture_form')
    let workTitle = title.value
    let pictureLink = picture.files[0]
    let workCategory = categoryInput.value

    const img = document.querySelector('.preview_img')
    img.classList.add('hidden')
    const validationButton = document.querySelector('.validation_button')

    
    picture.addEventListener('change', (e) => {

     const [file] = picture.files
     const buttonAjouterPhoto = document.querySelector('.button_ajouter_photo')

     if (file) {
       img.classList.remove('hidden')
       img.src = URL.createObjectURL(file)
       validationButton.classList.add('green')
       buttonAjouterPhoto.classList.add('hidden')
     } 
    })



  form.addEventListener('submit', (e) => {
      
      workTitle = title.value
      pictureLink = picture.files[0]
      workCategory = categoryInput.value
      const formData = new FormData()
      formData.append('title', workTitle)
      formData.append('image', pictureLink)
      formData.append('category', Number(workCategory))

      console.log(workTitle)
      console.log(pictureLink)
      console.log(workCategory)


      postWorks(formData)
          .then((response) => {
            if(response.ok){
               return response.json()
            } else{
                alert("Erreur: le formulaire n'est pas correctement rempli")
            }
          })
          .then(valider => {
              if (valider) {
                  console.log("Projet ajouté avec succès")
                  const gallery = document.querySelector('.gallery')
                  gallery.innerHTML = ""
                  initProjects()
                  closeModal()
              } 
          }) 
    })

    
}









