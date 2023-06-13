

// Récupération API 

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


// Boucle buttons + eventListener sur filtres

async function init() {
    const projects = await getProjects();
    

  for (let i = 0; i < projects.length; i++) {

        const sectionGallery = document.querySelector(".gallery")
        const baliseFigure = document.createElement("figure")
        const imageElement = document.createElement("img")
        imageElement.src = projects[i].imageUrl
        const figCaption = document.createElement("figcaption")
        figCaption.innerText = projects[i].title
        sectionGallery.appendChild(baliseFigure)
        baliseFigure.appendChild(imageElement)
        baliseFigure.appendChild(figCaption)
        }
        
    
     const filters = await getFilters(); 
         
     for (let i = 0; i < filters.length; i++) {
         
        const sectionFilter = document.querySelector(".filters")
        const filterChoice = document.createElement("button")
        filterChoice.innerText = filters[i].name
        filterChoice.setAttribute("data-filterId", filters[i].id)
        sectionFilter.appendChild(filterChoice)
        filterChoice.addEventListener('click', handleClickFilter)
        const buttonAll = document.querySelector(".all")
        buttonAll.addEventListener('click', handleClickFilter)
    }
    
}

init();

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

// Partie Modals

const modal = document.querySelector("#modale1")
const buttonModifier = document.querySelector(".modifier")

buttonModifier.addEventListener('click', openModal)

function openModal(){
    modal.classList.remove("hidden")
    stepOne()
}


async function stepOne(){
    const modalWrapper = document.querySelector(".modale_wrapper")
    modalWrapper.innerHTML =
   `<button class="x"> <i class="fa-solid fa-x"></i> </button>
    <div id="modale_title"> Galerie photo </div>
    <div class="all_pictures">  </div>
    <div class="buttons">
      <button class="add_picture"> Ajouter une photo  </button>
      <button class="delete_all">  Supprimer galerie </button>
    </div>`

  const projects = await getProjects()
  const allPictures = document.querySelector(".all_pictures")

   for (let i = 0; i < projects.length; i++) {

        const imageElement = document.createElement("img")
        imageElement.src = projects[i].imageUrl
        allPictures.appendChild(imageElement)
     }

  const addPictures = document.querySelector(".add_picture")
  addPictures.addEventListener('click', stepTwo)

}

function stepTwo(){
    const modalWrapper = document.querySelector(".modale_wrapper")
    modalWrapper.innerHTML =
    `<button class="x"> <i class="fa-solid fa-x"></i> </button>
    <div id="modale_title"> Ajout photo </div>
    <div class="add_picture_wrap"> 
        <div class="add_picture_space">
            <button class="ajouter_photo"> + Ajouter photo </button>
        </div>
     </div>
    <div class="input">
    <div class="project_title">
        <p> Titre </p>
        <input class="project_title_input">
    </div>
    <div class="project_category">
        <p> Catégorie </p>
        <input class="project_category_input">
    </div>
    </div>
    <div class="buttons">
      <button class="validation"> Valider </button>
    </div>`
}
   


// Supression des travaux existants 

async function deleteWorks() {
    return fetch("http://localhost:5678/api/works/")
        .then((response) => response.json())
        .then(works => {
            let worksData = works
            return works
        })
}

async function deleteWorks(imageId) {
    return fetch("http://localhost:5678/api/works/", {
        method: 'DELETE',
        headers: {
            "Content-type": "application/json"
        },
        
    })
}


