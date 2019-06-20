// Sticky
//
// window.onscroll = function() {myFunction()};
//
// var navbar = document.getElementById("navbar");
// var sticky = navbar.offsetTop;
//
// function myFunction() {
//   if (document.getElementById("contentDos").offsetTop >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }

// navbar = $('#navbar');
// section = $('#hola').offset();
// sticky = navbar.offset();
// var $indow = $(window);


// $indow.scroll(function () {
//   if ($indow.scrollTop() >= section.top ) {
//     navbar.addClass('sticky');
//   } else {
//     navbar.removeClass('sticky');
//   }
// })
//
// $indow.scroll(function () {
//   console.log('dah');
// })

// $(window).scroll(function() {
//     if (section.top >= 100) {
//         //custom code
//         navbar.addClass('sticky');
//     }
// });

var header = document.getElementById("frontHero");
var navBar = document.getElementById("navbar");
var bg = document.getElementById("bg");

var navbarHeight = navBar.offsetHeight;
var headerHeight = header.offsetHeight;

header.style.height = screen.height-navbarHeight;

function initParallax(){
	if(window.pageYOffset > headerHeight){
		navBar.style.position = "fixed";
		navBar.style.top = "0";

	}else{
		navBar.style.position = "absolute";
		navBar.style.top = "0";
	}
	bg.style.top = -(window.pageYOffset/3)+"px";
}

window.addEventListener("scroll", initParallax);


// $(window).on('scroll', function() {
//     scrollPosition = $(this).scrollTop();
//     if (scrollPosition >= 500) {
//         // If the function is only supposed to fire once
//         $(this).off('scroll');
//          navbar.addClass('sticky');
//
//         // Other function stuff here...
//     }
// });
