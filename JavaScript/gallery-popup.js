let imagesAll = document.querySelectorAll(".grid-item > img");
let slider = document.querySelector(".gallery__slider");
let closingBtn = document.querySelector(".gallery__slider__closing");
let arrowLeft = document.querySelector(".gallery__slider__arrow-left");
let arrowRight = document.querySelector(".gallery__slider__arrow-right");
let currentlyDisplayed; // Tracks currently displayed image

const closeSlider = () => {
    slider.style.display = "none";
} 

// Switches photo in the gallery with an arrow
const moveLeft = () => {
    currentlyDisplayed = document.getElementById("gallery__slider__image-current");
    let fullImgUrl = currentlyDisplayed.getAttribute("src");

    // Extracting number from URL
    let photoNum = fullImgUrl.split("photo")[1].split(".png")[0];

    if (photoNum !== "1") {
        photoNum--; // Substractin automatically converts string into a number
    } else {
        photoNum = 15;
    }

    currentlyDisplayed.setAttribute("src", "./assets/gallery/photo" + photoNum + ".png");
}

// Switches photo in the gallery with an arrow
const moveRight = () => {
    currentlyDisplayed = document.getElementById("gallery__slider__image-current");
    let fullImgUrl = currentlyDisplayed.getAttribute("src");
    
    // Extracting number from URL
    let photoNum = fullImgUrl.split("photo")[1].split(".png")[0];
    
    if (photoNum !== "15") {
        photoNum++; // Substractin automatically converts string into a number
    } else {
        photoNum = 1;
    }
    
    currentlyDisplayed.setAttribute("src", "./assets/gallery/photo" + photoNum + ".png");
}

// Running popup gallery after clicking
imagesAll.forEach((image, index) => {
    image.onclick = () => {
        currentlyDisplayed = document.getElementById("gallery__slider__image-current");
        
        let fullImgUrl = image.getAttribute("src");

        // Extracting number from URL and mounting new source attribute
        let photoNum = fullImgUrl.split("photo")[1].split(".png")[0];
        currentlyDisplayed.setAttribute("src", "./assets/gallery/photo" + photoNum + ".png");

        // Displays popup slider
        slider.style.display = "flex";
    }
})

closingBtn.setAttribute("onclick", "closeSlider()")
arrowLeft.setAttribute("onclick", "moveLeft()")
arrowRight.setAttribute("onclick", "moveRight()")