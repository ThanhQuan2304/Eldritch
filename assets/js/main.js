const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById("nav-close");

if(navToggle){
    navToggle.addEventListener('click',function(){
        navMenu.style.right="0%";
    })
}
if(navClose){
    navClose.addEventListener('click',function(){
        console.log("hello")
        navMenu.style.right="-100%";
    })
}

const header = document.getElementById("header");
window.addEventListener('scroll',function(){
    if(this.window.scrollY>=50){
        header.style.backgroundColor='#252525';
        header.style.boxShadow='0 0 20px gray';
    }else{
        header.style.backgroundColor="transparent";
        header.style.boxShadow='0 0 0px #fff';
    }
})

//SLIDER HOME
var swiper = new Swiper(".homeSwiper", {
    effect: "fade",
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
      },
  });

  var characterSwiper = new Swiper(".characterSwiper", {
    slidesPerView: 1,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    breakpoints:{
        1024:{
            slidesPerView: 3,
            spaceBetween: 50,
        },
        600: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
    },
    loop:true,
    pagination: {
      el: ".swiper-pagination",
    },
  });

  //SLIDER TESTIMONIAL
var swiper = new Swiper(".testimonialSwiper", {
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });