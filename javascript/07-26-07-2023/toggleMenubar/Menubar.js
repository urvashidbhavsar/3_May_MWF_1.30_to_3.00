// target is a nav class 
// click on togglebtn class
// icon changes class fa-bars

let btn = document.querySelector(".togglebtn")
let nav = document.querySelector(".nav")
let icon = document.querySelector(".fa-bars")
btn.addEventListener("click",function(){
    nav.classList.toggle("navToggle")
    if(nav.classList.contains("navToggle") == true){
        icon.classList.remove("fa-bars")
        icon.classList.add("fa-close")
    }else{
         icon.classList.remove("fa-close")
        icon.classList.add("fa-bars")
    }
})