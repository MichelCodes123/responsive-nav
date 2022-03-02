// Storing necessary objects in variables
let links = document.querySelector("ul");
let burger = document.querySelector(".burger");


burger.addEventListener("click", function () {
    console.log(burger);
    links.classList.toggle("ul-hidden");
   
    console.log(links.classList);

})