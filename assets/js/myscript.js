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


// CONTACTO
  const $window = $(window);
  var contact = $('#contactSection');
  var secondSection = $('#contentDos').offset();
  var windowHeight = $( window ).height();
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
