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

navbar = $('#navbar');
section = $('#hola').offset();
sticky = navbar.offset();
var $indow = $(window);


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

$(window).scroll(function() {
    if (section.top >= 100) {
        //custom code
        navbar.addClass('sticky');
    }
});


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
