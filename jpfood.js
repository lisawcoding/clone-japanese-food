// hamburger1******************************************************************************************
var hamburger1=document.querySelector("#hamburger1");
var rightPage=document.querySelector("#right-page");
var mainPage=document.querySelector("#main-page");
var y = window.matchMedia("(max-width: 970px)");
var body=document. querySelector("body");

function showOnlyVh(){
	body.style.overflow="hidden";
}
hamburger1.addEventListener("click", function(){
	if(rightPage.style.maxWidth<="0px"){
	  rightPage.style.display="block";
		rightPage.style.maxWidth="250px";
		mainPage.style.position="absolute";
		mainPage.style.right="250px";
		body.style.overflow="hidden";//disable scroll function
	} else {
		rightPage.style.maxWidth="0px";
		mainPage.style.position="relative";
		mainPage.style.right="0px";
		body.style.overflow="scroll";
	}
})

//hamburger2*****************************************************************\
var hamburger2=document.querySelector(".hamburger2");
var menu=document.querySelector(".menu");
var menus=document.querySelectorAll(".menu li");

hamburger2.addEventListener("click", function(){
	if(menu.style.maxHeight<="10px"){
		document.querySelector(".menu").style.maxHeight="500px";
	} else {
		document.querySelector(".menu").style.maxHeight="0px";
	}
})


//mains slider***********************************************************************
    var swiper = new Swiper('#div12-right .swiper-container', {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      centeredSlides: true,
      autoplay: {
        delay: 2800,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

var slideInner=document.querySelector(".swiper-wrapper");
slideInner.addEventListener("mouseover", function(){
	swiper.autoplay.stop();
})
slideInner.addEventListener("mouseout", function(){
	swiper.autoplay.start();
})

// roller slider*********************************************************************************

var roller = new Swiper('#div3 .swiper-container', {
  slidesPerView: 4,
  spaceBetween: 2,
  loop: true,
      centeredSlides: false,
      autoplay: false,
      navigation: {
        nextEl: '.next',
        prevEl: '.previous',
      },
  breakpoints: {
    432: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    970: {
      slidesPerView: 2,
      spaceBetween: 0
    },
    1170: {
      slidesPerView: 3,
      spaceBetween: 0
    }
  }
})

// scroll to top btn****************************************************************
// When the user scrolls down 20px from the top of the document, show the button
var topBtn=document.querySelector("#topBtn");
var nav2=document.querySelector("#nav2");
window.onscroll = function() {showScrollBtn()};

function showScrollBtn() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topBtn.style.display = "block";
        nav2.style.position="fixed";
        nav2.style.top="0";
    } else{
        topBtn.style.display = "none";
        nav2.style.position="relative";
}
}

// When the user clicks on the button, scroll to the top of the document
function goToTop() {
	document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
