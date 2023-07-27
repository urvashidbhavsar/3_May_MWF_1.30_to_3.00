// target header 
// perform window

window.addEventListener("scroll",function(){
    let header = document.querySelector(".TopHeader")
    let current = window.scrollY;
    if(current > 0)
    {
        header.classList.add("headerFixed")
    }else{
        header.classList.remove("headerFixed")
    }
})