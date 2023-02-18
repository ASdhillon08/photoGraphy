// Navigation moves when scrolling the page down 

window.onscroll = function() {
    scrollFunction();
}

function scrollFunction() {
    // target variables
    let navigation = document.querySelector(".nav_menu"),
     navi_list = document.querySelector(".nav_menu li"),
     navi_list_a = document.querySelector(".nav_menu li a")

    if(document.body.scrollTop > 280 ||document.documentElement.scrollTop > 280) {
        // Move with scroll bar when scrolled
        navigation.style.position = "fixed"; 
        navigation.style.background = "white";
    } else {
        // stay to initial position when not scrolled
        navigation.style.position = "static" 
        navigation.style.background = "linear-gradient(to right, rgba(26, 23, 26, 0), rgb(46, 44, 44))";

    }
}