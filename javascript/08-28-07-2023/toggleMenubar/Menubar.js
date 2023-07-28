// target is a nav class 
// click on togglebtn class
// close btn = closebtn

let btn = document.querySelector(".togglebtn")
let nav = document.querySelector(".Menubar")
let closebtn = document.querySelector(".closebtn")
btn.addEventListener("click", function () {
    nav.classList.add("navToggle")
})
closebtn.addEventListener("click", function () {
    nav.classList.remove("navToggle")
})