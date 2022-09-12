let myTitleSwiper = new Swiper('.title-swiper',{
    slidesPerView: 1,
    // spaceBetween: 30,
});
let myTextSwiper = new Swiper('.text-swiper',{
    slidesPerView: 1,
});
myTitleSwiper.controller.control = myTextSwiper;
myTextSwiper.controller.control = myTitleSwiper;