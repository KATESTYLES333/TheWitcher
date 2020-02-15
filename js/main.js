let mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    loop: true,
    navigation: {
        nextEl: '.arrow',
    },
    breakpoints: {
        540: {
            slidesPerView: 2
        }
    }
});

let menuButton = document.querySelector('.menubutton');
let menu = document.querySelector('.header');
menuButton.addEventListener('click', function () {
    menuButton.classList.toggle('menubuttonActive');
    menu.classList.toggle('headerActive');
})