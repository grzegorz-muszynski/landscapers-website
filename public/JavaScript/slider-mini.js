let buttonLeft = document.querySelector(".intro__button-left");
let buttonRight = document.querySelector(".intro__button-right");
let currentSlide = document.querySelector(".intro__slider-mini");

const prevImg = () => {
    let fullImgUrl = currentSlide.getAttribute("src");

    // Extracting number from URL
    let photoNum = fullImgUrl.split("slide")[1].split(".jpg")[0];

    if (photoNum !== "1") {
        photoNum--; // Substracting automatically converts string into a number
    } else {
        photoNum = 4;
    }

    currentSlide.setAttribute("src", "./assets/intro/slide" + photoNum + ".jpg");
}

const nextImg = () => {
    let fullImgUrl = currentSlide.getAttribute("src");
    
    // Extracting number from URL
    let photoNum = fullImgUrl.split("slide")[1].split(".jpg")[0];
    
    if (photoNum !== "4") {
        photoNum++; // Mathematical operation automatically converts string into a number
    } else {
        photoNum = 1;
    }
    
    currentSlide.setAttribute("src", "./assets/intro/slide" + photoNum + ".jpg");
}

buttonLeft.setAttribute("onclick", "prevImg()")
buttonRight.setAttribute("onclick", "nextImg()")

// initializing auto sliding
setInterval(nextImg, 4000);