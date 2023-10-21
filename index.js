
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination

    effect: 'cube',
    grabCursor: 'true',
    cubeEffect: {
        Shadow: 'true',
        slideShadow: 'false',
        ShadowOffset: '20',
        ShadowScale: 0.98,
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});             
