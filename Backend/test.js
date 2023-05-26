//  const f = await fetch('http://localhost:5678/api/works')


const reponse = await fetch("pieces-autos.json")
const projects = await reponse.json()




const figure = projects[0]

const imageElement = document.createElement("img")
imageElement.src = figure.imageUrl

const figCaption = document.createElement("figcaption")
figCaption.innerText = figure.title



const sectionGallery = document.querySelector(".gallery")

sectionGallery.appendChild(imageElement)
sectionGallery.appendChild(figCaption)


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
  