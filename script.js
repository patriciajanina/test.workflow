$(function() {



    var navbar = document.querySelector(".nav-wrapper");
    var sticky = navbar.offsetTop;
    var logo = document.querySelector(".logo");

    var nbSlide = $(".slides").length;
    var i = 1;

    function sliderAutoplay() {
        if (i === nbSlide + 1) {
            i = 1;
            $("#button-" + i).prop("checked", true).trigger("click");
        } else {
            $("#button-" + i).prop("checked", true).trigger("click");
        }
        i++;
        timeout = setTimeout(sliderAutoplay, 3000);
    }

    sliderAutoplay();

    window.onscroll = function () {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky")
            navbar.style.position = 'fixed'
            logo.style.opacity = '1';
        } else {
            navbar.classList.remove("sticky");
            navbar.style.position = 'absolute'
            logo.style.opacity = '0';
        }
    };


});




