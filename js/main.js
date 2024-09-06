const responsive = {
    0 : {
        items : 1
    },
    320 : {
        items : 1
    },
    568 : {
        items : 2
    },
    968 : {
        items : 3
    }
}
$(document).ready(function(){
    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');
    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse');
    })

    // owl carousell fore blog
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        dots: false,
        nav: true,
        responsive: responsive
        // navText: [$('.owl-navigation .owl-nav-prev),$(.owl-navigation .owl-nav-next')]
    });
    // click to scroll up
    $('.move-up span').click(function(){
        $('html,body').animate({
            scrollTop: 0
        }, 1000);
    })
    // AOS instance
    AOS.init();
});
console.log("Aslm alkm mr bab");
console.log("Aslm alkm mr man of the year");
function changeBg(){
var scrollValue = window.scrollY;
console.log(scrollValue);
if(scrollValue < 10){
    console.log('i don turn better person');
} else if(scrollValue <= 200){
    console.log('i am the worst')
}
}
window.addEventListener('scroll', changeBg);