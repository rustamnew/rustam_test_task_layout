console.log('test log');





const swiperHero = new Swiper('.hero-swiper', {
    centeredSlides: true,
    loop: true,
    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

});

const swiperRecommended = new Swiper('.recommended-swiper', {
    spaceBetween: 30,
    loop: true,
    slidesPerView: 4,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },



});