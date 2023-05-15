const body = document.body
const pictures = document.querySelectorAll(".picture")
const activePicture = document.getElementsByClassName('picture-active')
const lArrow = document.getElementById('arrow-left')
const rArrow = document.getElementById('arrow-right')

let pictureIndex = 0

lArrow.addEventListener('click', () => {
    pictureIndex--

    if (pictureIndex < 0) {
        pictureIndex = pictures.length - 1
    }

    setBodyBackground()
    setActivePicture()
})

rArrow.addEventListener('click', () => {
    pictureIndex++

    if (pictureIndex > pictures.length - 1) {
        pictureIndex = 0
    }

    setBodyBackground()
    setActivePicture()
})

setBodyBackground()
setActivePicture()

function setBodyBackground() {
    body.style.backgroundImage = pictures[pictureIndex].style.backgroundImage
}

function setActivePicture() {
    activePicture[0].style.backgroundImage = pictures[pictureIndex].style.backgroundImage
}