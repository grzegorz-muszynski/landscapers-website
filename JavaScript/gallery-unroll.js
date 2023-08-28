let additionalImages = document.querySelectorAll(".item-another");
let unrollButton = document.getElementById("btn-unroll");
let shadow = document.querySelector(".gallery__masonry__shadow");

unrollButton.onclick = function () {
    additionalImages.forEach((img) => {
        img.style.display = "block";
    });
    shadow.style.display = "none";

    masonry.recalculate();
}