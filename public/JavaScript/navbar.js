let button = document.getElementById("navbar__browser__img");
let input = document.querySelector(".navbar__browser__input");
let currentClasses;

let changeVisibility = (event) => {
    currentClasses = input.classList;

    if (currentClasses[1] === "hide") {
        input.classList.remove("hide");
        input.classList.add("show");
    } else if (currentClasses[1] === "show") {
        input.classList.remove("show");
        input.classList.add("hide");
    } else {
        input.classList.add("show");
    }
    
    input.focus();
}
button.setAttribute("onclick", "changeVisibility(event)");

// Hiding the search bar after clicking anywhere on the page except that search bar
document.addEventListener("click", function(event) {
    // if the input is clicked, do nothing
    // if the reading glass button is clicked, also do nothing to not to toggle twice as changeVisibility function was already invoked
    if (event.target.classList.contains("navbar__browser__input") || event.target.classList.contains("navbar__browser__img")) return;
    
    // if the input is shown - hide it
    currentClasses = input.classList;
    if (currentClasses[1] === "show") {
        input.classList.remove("show");
        input.classList.add("hide");
    } 
})