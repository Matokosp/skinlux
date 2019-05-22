// MENU

	// Sticky

	window.onscroll = function() {myFunction()};

	var navbar = document.getElementById("navbar");
	var sticky = navbar.offsetTop;

	function myFunction() {
	  if (window.pageYOffset >= sticky) {
	    navbar.classList.add("sticky")
	  } else {
	    navbar.classList.remove("sticky");
	  }
	}


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
