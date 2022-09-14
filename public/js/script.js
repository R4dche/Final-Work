let myTitleSwiper = new Swiper('.title-swiper',{
    slidesPerView: 1,
    breakpoints: {
        600:{
            slidesPerView: 2
        }
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true
    },
    mousewheel: {
        sensitivity: 1,
    },
});
let myTextSwiper = new Swiper('.text-swiper',{
    slidesPerView: 1,
    mousewheel: {
        sensitivity: 1,
    },
});
let myTeamSwiper = new Swiper ('.swiper-team',{
    slidesPerView: 1,
    mousewheel: {
        sensitivity: 1,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
})
myTitleSwiper.controller.control = myTextSwiper;
myTextSwiper.controller.control = myTitleSwiper;