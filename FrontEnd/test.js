//  const f = await fetch('http://localhost:5678/api/works')
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
async function init() {
    const projects = await getProjects();
    const filters = await getFilters();

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

init();





/*
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

*/
  