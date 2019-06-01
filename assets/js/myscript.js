// MENU

  // RESPONSIVE MENU SLIDE


    var menuShow = $('.menu__responsive').children(".menu__responsive--hidden").hasClass('show');

    function desplazar (){
      $('.menu__responsive--hidden').toggleClass('show');
      $('#hamburger').toggleClass('hamburguer-slide');
      $('.hamburger__section-icon').toggleClass('hamburger__section-icon-black');
    }

    $('#hamburger').on('click', function(e){
      desplazar();
      e.stopPropagation();
      menuShow = $('.menu__responsive').children(".menu__responsive--hidden").hasClass('show');
      console.log(menuShow);
    })

    window.addEventListener('click', function(e){
      // var menuHide = $('.menu-hide');
      if (menuShow === true && e.target != '.menu__responsive--hidden show') {
        desplazar();
        // $('.menu__responsive--hidden').removeClass('show');
        // $('#hamburger').removeClass('hamburguer-slide');
      }
      // console.log(e.target)
    })


    // MENU COLOR CHANGE

    mainMenuWhite = $('.main_menu-white');
    mainMenuLinkWhite = $('.main_menu-link-white');
    mainMenuLogo = $('#corner_logo-white');
    secondSection = $('#contentDos').offset();
    const $window = $(window);
    var windowHeight = $( window ).height();

    $window.scroll(function () {
      if ($window.scrollTop() >= secondSection.top ) {
        mainMenuWhite.css('background-color' , 'rgba(255,255,255,0.9)');
        mainMenuLinkWhite.css('color' , '#6D6E71');
        mainMenuLogo.attr('src', 'assets/images/skinlux-logo-grey.png')
      } else {
        mainMenuWhite.css('background-color' , 'transparent');
        mainMenuLinkWhite.css('color' , '#fff');
        mainMenuLogo.attr('src', 'assets/images/skinlux-logo-white.png')
      }
    })


// CONTACTO

  var contact = $('#contactSection');
  var contactLink = $('.contact_link');
  var contactIg = $('.contact_ig_logo');

  $window.scroll(function() {
    if ($window.scrollTop() >= secondSection.top - ( windowHeight * 9 / 10 ) ) {
      contactLink.addClass('contact_link_black');
      contactIg.attr('src', 'assets/images/ig-icon-black.png');
      console.log('hola');
    } else {
      contactLink.removeClass('contact_link_black');
      contactIg.attr('src', 'assets/images/ig-icon.png');
    }
  })
