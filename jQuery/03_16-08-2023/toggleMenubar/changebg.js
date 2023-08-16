// target header 
// perform window

$(document).ready(function () {
    $(window).scroll(function () {
        // scrollTop() = jquery function
        $current = $(this).scrollTop();
        if ($current > 0) {
            $(".TopHeader").addClass("headerFixed")
        } else {
            $(".TopHeader").removeClass("headerFixed")
        }
    })
})