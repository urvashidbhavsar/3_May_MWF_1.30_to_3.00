// target is a nav class 
// click on togglebtn class
// icon changes class fa-bars
$(document).ready(function () {
    $icon = $(".fa-bars");
    $(".togglebtn").click(function () {
        $(".nav").toggleClass("navToggle")
        // hasClass() = check value is exist or not
        if ($(".nav").hasClass("navToggle") == true) {
            $icon.removeClass("fa-bars")
            $icon.addClass("fa-close")
        } else {
            $icon.removeClass("fa-close")
            $icon.addClass("fa-bars")
        }
    })
})