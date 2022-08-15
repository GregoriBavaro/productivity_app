// Swiper

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    grabCursor: false,
    centeredSlides: true,
    slidesPerView: 'auto',
    initialSlide: 2,
    allowTouchMove: false,
    keyboardControl: true,
        speed: 600,
       

});

// Nested Swiper

const galleryTop = new Swiper('.gallery-top' , { 
   direction: 'horizontal',
   loop:  true,
   loopedSlides: 3,
   nested: true,
   grabCursor: false,
   centeredSlides: true,
   slidesPerView: 'auto',
   initialSlide: 0,
   allowTouchMove: true,
   keyboardControl: true,
   speed: 600,
});

// Navigation of Nested Swiper

const galleryThumbs = new Swiper('.gallery-thumbs', {
  loop: true,
  nested: true,
  loopedSlides: 3,
  centeredSlides: true,
  spaceBetween: 0,
  slideToClickedSlide: false,
  slidesPerView: 3,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  allowTouchMove: false,
  speed: 600,
  initialSlide: 0,

});

// Popular articles swiper

const galleryArticles = new Swiper('.gallery-articles' , { 
  direction: 'horizontal',
  loop:  true,
  loopedSlides: 3,
  grabCursor: false,
  centeredSlides: true,
  slidesPerView: 'auto',
  initialSlide: 3,
  allowTouchMove: true,
  keyboardControl: true,
  speed: 600,
  spaceBetween: 13,
});

//Search menu swiper

const gallerySearch = new Swiper('.swiper-search-menu' , { 
  direction: 'horizontal',
  loop:  false,
  loopedSlides: 6,
  grabCursor: false,
  centeredSlides: true,
  slidesPerView: 'auto',
  initialSlide: 3,
  allowTouchMove: true,
  keyboardControl: true,
  speed: 600,
  spaceBetween: 13,
});


// Scroll page on refresh

window.onbeforeunload = () => {  
  window.scrollTo(0, 0);  
};

// Controls for nested swiper

galleryTop.controller.control = galleryThumbs;
galleryThumbs.controller.control = galleryTop;

// Other HTML elements 

const sun = document.querySelector(".morning");
const sunAfternoon = document.querySelector(".afternoon")
const moon = document.querySelector(".moon");
const bats = document.querySelector(".bats");
const explorer = document.querySelector(".explorer");
const explorerOnHill = document.querySelector(".explorer-on-hill");
const tent = document.querySelector(".tent");

// Birds HTML Elements

const birdOne = document.querySelector(".birdOne");
const birdTwoWingsOne = document.querySelector(".birdTwoWingsOne");
const birdTwoWingsTwo = document.querySelector(".birdTwoWingsTwo");

//Sky on background HTML Elements

const sky = document.querySelector(".wrapper");
const mainSwiperSlides1 = document.querySelector(".main-slides1");
const mainSwiperSlides2 = document.querySelector(".main-slides2");
const mainSwiperSlides3 = document.querySelector(".main-slides3");
const mainSwiperSlides4 = document.querySelector(".main-slides4");
const mainSwiperSlides5 = document.querySelector(".main-slides5");

// Color animations on Sliders and background

const skyAnimationsOnBackground = function(appearance, className) {

  if(appearance == "toggle") {
    mainSwiperSlides1.classList.toggle(className);
    mainSwiperSlides2.classList.toggle(className);
    mainSwiperSlides3.classList.toggle(className);
    mainSwiperSlides4.classList.toggle(className);
    mainSwiperSlides5.classList.toggle(className);
    sky.classList.toggle(className);
  } else {
    mainSwiperSlides1.classList.remove(className);
    mainSwiperSlides2.classList.remove(className);
    mainSwiperSlides3.classList.remove(className);
    mainSwiperSlides4.classList.remove(className);
    mainSwiperSlides5.classList.remove(className);
    sky.classList.remove(className);
  }
}

// Birds animation

const birdsAnimation = function(appearance) {

  if(appearance == "toggle") {
    birdOne.classList.toggle("birdFly");
    birdTwoWingsOne.classList.toggle("birdrFly");
    birdTwoWingsTwo.classList.toggle("birdr1Fly");
  } else {
    birdOne.classList.remove("birdFly");
    birdTwoWingsOne.classList.remove("birdrFly");
    birdTwoWingsTwo.classList.remove("birdr1Fly");
  }
}

// Moon and bats animation

const moonAndBatsAnimation = function(appearance, classNameOne, classNameTwo) {
  // shootingStars.style.display = display;

  if(appearance == "toggle") {
    moon.classList.toggle(classNameOne);
    bats.classList.toggle(classNameTwo);
    } else {
    moon.classList.remove(classNameOne);
    bats.classList.remove(classNameTwo);
    }
}

const tentAnimation =function(appearance, className) {
  if(appearance == "toggle") {
    tent.classList.toggle(className);
  } else {
    tent.classList.remove(className);
  }
}

const explorerAnimation = function(appearance, className) {
  if(appearance == "toggle") {
    explorer.classList.toggle(className);
  } else {
    explorer.classList.remove(className);
  }
}

const explorerOnHillAnimation = function(appearance, className) {
  if(appearance == "toggle") {
    explorerOnHill.classList.toggle(className);
  } else {
    explorerOnHill.classList.remove(className);
  }
}

// Sun and sun afternoon animation

const sunAndSunAfternoon = function(fourOrFive, one, two, three, four, five) {

  if(fourOrFive == "five") {
    sunAfternoon.classList.remove(one);
    sunAfternoon.classList.remove(two);
    sunAfternoon.classList.remove(three);
    sun.classList.remove(four);
    sun.classList.remove(five);
  } else {
    sunAfternoon.classList.remove(one);
    sunAfternoon.classList.remove(two);
    sun.classList.remove(three);
    sun.classList.remove(four);
  }
  
}


sun.classList.toggle("sunRise");
skyAnimationsOnBackground("toggle","skySunRise");
birdsAnimation("toggle");
explorerAnimation("toggle", "explorer-active");

  

// Setting active slide by local time

  // let today = new Date()
  // let curHr = today.getHours()
  // let time = null;

  // if (curHr < 12) {
  //   time = "Morning";
  // } else if (curHr < 18) {
  //   time = "Afternoon";
  // } else {
  //   time = "Evening";
  // }
  // console.log(time);

  

  // const changeSlideBasedOnTime = function() {
  //   switch(time) {
  //     // MORNING 
  //     case "Morning":
        
  //       galleryThumbs.slideTo(0, true, true);
        
        
  //     break;
  //     // AFTERNOON 
  //     case "Afternoon":
        
  //       galleryThumbs.slideTo(1, true, true);
        
  //     break;
  //     // EVENING 
  //     case "Evening":
        
  //       galleryThumbs.slideTo(2, true, true);
  //     }
  // } 

  // changeSlideBasedOnTime();


galleryTop.on('transitionEnd', function () {
  let activeSlide = galleryTop.realIndex +1; // Current active Index of slide
  let previousSlide = galleryTop.previousIndex -2; // Previous active Index of slide
  
  if(previousSlide == -1) {
    previousSlide = 0;
  } else if ( previousSlide == document.querySelectorAll( '.swiper-slide' ).length ) { // When swiper loops, slideChange gets fired twice and messes up animations. This prevents it from doing so.
    return;
  }
  // console.log(`ACTIVE SLIDE === ${activeSlide}`);
  // console.log(`PREVIOUS ACTIVE SLIDE === ${previousSlide}`);
    switch(true){
    
    case activeSlide == 2 && previousSlide ==1: // From morning to Afternoon 1
      // Add class

      sunAfternoon.classList.toggle("morningToAfternoon");
      skyAnimationsOnBackground("toggle", "afternoonSkyRise");
      explorerAnimation("toggle", "explorer-back");
      explorerOnHillAnimation("toggle", "explorer-on-hill-active");
      // Remove class

      skyAnimationsOnBackground("remove", "backToMorningSky");
      skyAnimationsOnBackground("remove", "skyMoonRise");
      skyAnimationsOnBackground("remove", "skyBackToAfternoon");
      skyAnimationsOnBackground("remove", "skySunRise");
      skyAnimationsOnBackground("remove", "skyBackToEveningFromMorning");
      birdsAnimation("remove");
      tentAnimation("remove", "tent-active");
      tentAnimation("remove", "tent-back");
      explorerAnimation("remove", "explorer-active");
      explorerOnHillAnimation("remove", "explorer-on-hill-back");
      moonAndBatsAnimation("remove", "moonRise", "batsRise");
      moonAndBatsAnimation("remove", "moonSet", "batsFlyAway");
      moonAndBatsAnimation("remove", "moonBackToEvening", "batsBackToEvening");
      moonAndBatsAnimation("remove", "moonBack", "batsBack");
      sunAndSunAfternoon("four", 
                         "afternoonToMorning",
                         "sunAfternoonBack",
                         "sunRise",
                         "sunRiseBack");
    break;
    case activeSlide == 1 && previousSlide == 2: // From afternoon to morning 2
      // Add class

      sunAfternoon.classList.toggle("afternoonToMorning");
      skyAnimationsOnBackground("toggle", "backToMorningSky");
      birdsAnimation("toggle");
      explorerAnimation("toggle", "explorer-active");
      explorerOnHillAnimation("toggle", "explorer-on-hill-back");
      // Remove class

      tentAnimation("remove", "tent-active");
      tentAnimation("remove", "tent-back");
      explorerAnimation("remove", "explorer-back");
      explorerOnHillAnimation("remove", "explorer-on-hill-active");
      skyAnimationsOnBackground("remove", "afternoonSkyRise");
      skyAnimationsOnBackground("remove", "skyMoonRise");
      skyAnimationsOnBackground("remove", "skyBackToAfternoon");
      skyAnimationsOnBackground("remove", "skySunRise");
      skyAnimationsOnBackground("remove", "skyBackToEveningFromMorning");
      moonAndBatsAnimation("remove", "moonRise", "batsRise");
      moonAndBatsAnimation("remove", "moonSet", "batsFlyAway");
      moonAndBatsAnimation("remove", "moonBackToEvening", "batsBackToEvening");
      moonAndBatsAnimation("remove", "moonBack", "batsBack");
      sunAndSunAfternoon("four",
                         "morningToAfternoon",
                         "sunAfternoonBack",
                         "sunRise",
                         "sunRiseBack");
    break;
    case activeSlide == 3 && previousSlide == 2: // From Afternoon to Evening 3
      // Add class
      
      sun.classList.toggle("sunAfternoonToEvening");
      skyAnimationsOnBackground("toggle", "skyMoonRise");
      moonAndBatsAnimation("toggle", "moonRise", "batsRise");
      tentAnimation("toggle", "tent-active");
      explorerOnHillAnimation("toggle", "explorer-on-hill-back");
      
      //Remove class

      skyAnimationsOnBackground("remove", "backToMorningSky");
      skyAnimationsOnBackground("remove", "afternoonSkyRise");
      skyAnimationsOnBackground("remove", "skyBackToAfternoon");
      skyAnimationsOnBackground("remove", "skySunRise");
      skyAnimationsOnBackground("remove", "skyBackToEveningFromMorning");
      birdsAnimation("remove");
      tentAnimation("remove", "tent-back");
      explorerAnimation("remove", "explorer-active");
      explorerAnimation("remove", "explorer-back");
      explorerOnHillAnimation("remove", "explorer-on-hill-active");
      moonAndBatsAnimation("remove", "moonSet", "batsFlyAway");
      moonAndBatsAnimation("remove", "moonBackToEvening", "batsBackToEvening");
      moonAndBatsAnimation("remove", "moonBack", "batsBack");
      sunAndSunAfternoon("five", 
                         "afternoonToMorning",
                         "morningToAfternoon",
                         "sunAfternoonBack",
                         "sunRise",
                         "sunRiseBack");
    break; 
    case activeSlide == 2 && previousSlide == 3: // From Evening to Afternoon 4
      //Add class 

      sunAfternoon.classList.toggle("sunAfternoonBack");
      skyAnimationsOnBackground("toggle", "skyBackToAfternoon");
      moonAndBatsAnimation("toggle", "moonBack", "batsBack");
      tentAnimation("toggle", "tent-back");
      explorerOnHillAnimation("toggle", "explorer-on-hill-active");
      
      //Remove class

      skyAnimationsOnBackground("remove", "backToMorningSky");
      skyAnimationsOnBackground("remove", "afternoonSkyRise");
      skyAnimationsOnBackground("remove", "skyMoonRise");
      skyAnimationsOnBackground("remove", "skySunRise");
      skyAnimationsOnBackground("remove", "skyBackToEveningFromMorning");
      birdsAnimation("remove");
      tentAnimation("remove", "tent-active");
      explorerAnimation("remove", "explorer-active");
      explorerAnimation("remove", "explorer-back");
      explorerOnHillAnimation("remove", "explorer-on-hill-back");
      moonAndBatsAnimation("remove",  "moonRise", "batsRise");
      moonAndBatsAnimation("remove", "moonSet", "batsFlyAway");
      moonAndBatsAnimation("remove",  "moonBackToEvening", "batsBackToEvening");
      sunAndSunAfternoon("four", 
                         "afternoonToMorning",
                         "morningToAfternoon",
                         "sunRise",
                         "sunRiseBack",
                         );

      sun.classList.remove("sunAfternoonToEvening");
  
    break; 
    case activeSlide ==1 && previousSlide ==3:  // From Evening to Morning 5
    //Add class 
   
    sun.classList.toggle("sunRise")
    skyAnimationsOnBackground("toggle", "skySunRise");
    birdsAnimation("toggle");
    moonAndBatsAnimation("toggle", "moonSet", "batsFlyAway");
    tentAnimation("toggle", "tent-back");
    explorerAnimation("toggle", "explorer-active");
    //Remove class

    tentAnimation("remove", "tent-active");
    explorerAnimation("remove", "explorer-back");
    explorerOnHillAnimation("remove", "explorer-on-hill-active");
    explorerOnHillAnimation("remove", "explorer-on-hill-back");
    skyAnimationsOnBackground("remove", "backToMorningSky");
    skyAnimationsOnBackground("remove", "afternoonSkyRise");
    skyAnimationsOnBackground("remove", "skyMoonRise");
    skyAnimationsOnBackground("remove", "skyBackToAfternoon");
    skyAnimationsOnBackground("remove", "skyBackToEveningFromMorning");
    moonAndBatsAnimation("remove", "moonRise", "batsRise");
    moonAndBatsAnimation("remove", "moonBackToEvening", "batsBackToEvening");
    moonAndBatsAnimation("remove", "moonBack", "batsBack");
    sunAndSunAfternoon("five", 
                      "sunAfternoonBack", 
                      "afternoonToMorning", 
                      "morningToAfternoon",
                      "sunRiseBack",
                      "sunAfternoonToEvening")
    break;
    case activeSlide == 3 && previousSlide == 1: // From Morning to Evening 6
    //Add class

    sun.classList.toggle("sunRiseBack");
    skyAnimationsOnBackground("toggle", "skyBackToEveningFromMorning");
    moonAndBatsAnimation("toggle", "moonBackToEvening", "batsBackToEvening");
    tentAnimation("toggle", "tent-active");
    explorerAnimation("toggle", "explorer-back");
    //Remove class

    skyAnimationsOnBackground("remove", "backToMorningSky");
    skyAnimationsOnBackground("remove", "afternoonSkyRise");
    skyAnimationsOnBackground("remove", "skyMoonRise");
    skyAnimationsOnBackground("remove", "skyBackToAfternoon");
    skyAnimationsOnBackground("remove", "skySunRise");
    birdsAnimation("remove");
    tentAnimation("remove", "tent-back");
    explorerAnimation("remove", "explorer-active");
    explorerOnHillAnimation("remove", "explorer-on-hill-active");
    explorerOnHillAnimation("remove", "explorer-on-hill-back");
    moonAndBatsAnimation("remove", "moonRise", "batsRise");
    moonAndBatsAnimation("remove", "moonBack", "batsBack");
    moonAndBatsAnimation("remove", "moonSet", "batsFlyAway");
    sunAndSunAfternoon("five",
                        "morningToAfternoon",
                        "afternoonToMorning", 
                        "sunAfternoonBack",
                        "sunAfternoonToEvening",
                        "sunRise");
                        sun.classList.remove("sunRise")
    break;
  }

});

// Check animation

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector("#completion").style.height = "0%";
  } else {
    document.querySelector("#completion").style.height = "60%";
  }
}
  
(function($) { "use strict";
// navigation
$('a[data-slide]').click(function(e) {
  e.preventDefault();
  swiper.slideTo($(this).data('slide'));
});

// Scroll bottom

$(document).ready(function(){
  $(window).scroll(function(){
      $(".icon-scroll").css("opacity", 1 - $(window).scrollTop() / $('.icon-scroll').height());
  });
});

//Scroll back to top
              
$(document).ready(function() {	
		var offset = 300;
		var duration = 400;
		jQuery(window).on('scroll', function() {
			if (jQuery(this).scrollTop() > offset) {
				jQuery('.scroll-to-top').addClass('active-arrow');
			} else {
				jQuery('.scroll-to-top').removeClass('active-arrow');
			}
		});				
		jQuery('.scroll-to-top').on('click', function(event) {
			event.preventDefault();
			jQuery('html, body').animate({scrollTop: 0}, duration);
			return false;
		})
  
  	});            
              
})(jQuery); 

// Parallax

window.addEventListener('load',function(){
  document.getElementsByTagName('header')[0].addEventListener('click',function(){
    toggle_menu();
  });
});
window.addEventListener('scroll',function(){
  header_scroll();
  parallax('banner-wrapper-fixed',5,0);
});

function header_scroll(){
  var my_header = document.getElementsByTagName('header')[0];
  var scroll_height = window.pageYOffset;
  if(scroll_height > 400){
    my_header.className = 'header header-scroll';
  }
  else {
    my_header.className = 'header';
  }
}

function parallax(elem,speed,number){
  var target = document.getElementsByClassName(elem)[number];
  var scroll_value = window.pageYOffset;
  if(scroll_value <= 700){
    // target.style.transform = 'translateY('+(-scroll_value/speed)+'px)';
  } 
  else {
    return;
  }
}

function toggle_menu(){
  var menu_bar = document.querySelector('.header ul');
  var btn = document.getElementsByClassName('toggle-btn')[0];
  //btn.innerHTML = '&times;';
  if(document.documentElement.clientWidth <= 768){
  //if(menu_bar.style.display == 'none'){
    if(menu_bar.className == 'display-none-mobile'){
      menu_bar.className = 'display-block';
      menu_bar.style.animation = 'flip 1 0.4s 0s';
      btn.innerHTML = '&times;';
      btn.style.fontSize = '40px';
      btn.style.animation = 'fade 1 0.2s 0s';
    }
    else if(menu_bar.className == 'display-block'){
     menu_bar.className = 'display-none-mobile';
      btn.innerHTML = '&#9776';
      btn.style.fontSize = '30px';
      btn.style.animation = 'top-in-basic 1 0.2s 0s';
    }
 }
}





