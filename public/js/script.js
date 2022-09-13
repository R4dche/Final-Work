let myTitleSwiper = new Swiper('.title-swiper',{
    slidesPerView: 1,
    // spaceBetween: 30,
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true
    },
    mousewheel: {
        sensitivity: 1,
        // eventsTarget: ".slide-title"
    },
    
});
let myTextSwiper = new Swiper('.text-swiper',{
    slidesPerView: 1,
    mousewheel: {
        sensitivity: 1,
        // eventsTarget: ".slide-title"
    },
});
myTitleSwiper.controller.control = myTextSwiper;
myTextSwiper.controller.control = myTitleSwiper;