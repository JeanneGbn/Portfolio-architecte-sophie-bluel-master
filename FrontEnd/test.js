//  const f = await fetch('http://localhost:5678/api/works')

// Fonction lien json

async function getProjects() {
    const url = './test.json';

    return fetch(url)
        .then(response => {
            if(response.ok) {
                return response.json()
            }
        })
        .then(response => {
            return response
        })
        .catch(err => console.log("une erreur s'est produite", err));
}
async function getFilters() {
    const url = './filtres.json';

    return fetch(url)
        .then(response => {
            if(response.ok) {
                return response.json()
            }
        })
        .then(response => {
            return response
        })
        .catch(err => console.log("une erreur s'est produite", err));
}

// Boucle buttons + eventListener sur filtres

async function init() {
    const projects = await getProjects();

  /*for (let i = 0; i < projects.length; i++) {

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
        
    */
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
    switch(event.target.getAttribute("data-filterId")){
    case "1":
        for (let i = 0; i < projects.length; i++) 
        if(projects[i].category.id === 1)
        projectsFiltersArray.push(projects[i])

        for (let a = 0; a < projectsFiltersArray.length; a++) {
       

            const sectionGallery = document.querySelector(".gallery")
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
       

            const sectionGallery = document.querySelector(".gallery")
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
       

            const sectionGallery = document.querySelector(".gallery")
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

}

   

    console.log(projectsFiltersArray)
}




/*

imageElement.src = projects[i].imageUrl

*/

