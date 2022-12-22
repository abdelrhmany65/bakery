let Navbar = document.querySelector('.navbar');
let Fabars = document.querySelector('.fa-bars');


Fabars.onclick = () =>{
    Navbar.classList.toggle("active")
};


var swiper = new Swiper(".home-slid", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
});


var swiper = new Swiper(".review-min", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    "0":{
      slidesPerView :1,
      autoPlay:{
        delay: 700,
        disableONInteraction: false,
      },

    },
    "768":{
      slidesPerView :2,
    },

    "1020":{
      slidesPerView :3,
    },
  },
});