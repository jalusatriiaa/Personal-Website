function closeMenu(){
    document.getElementById("sidenavbar").style.height = "0%";
  }
function openMenu(){
    document.getElementById("sidenavbar").style.height = "100%";
  }

// Scrolled Animated

$(window).scroll(function(){
  let wScroll = $(this).scrollTop();

  if(wScroll > 150){
    $('.gambar img').addClass('animated fadeInLeft slow')
    $('.aboutme').addClass('animated fadeInRight slow')
  }

  if(wScroll > 500){
    $('.portofolio').addClass('animated slideInDown slow')
    $('.port1').addClass('animated slideInDown slow')
    $('.port2').addClass('animated slideInDown slow')
    $('.port3').addClass('animated slideInDown slow')
    $('.port4').addClass('animated slideInDown slow')
  }

  if(wScroll>20){

  }


});

// Sticky Navbar

let myNavigation = $('navbar');
    stickyNavbar = "sticky-navbar";
    myHeader = $('.main').height();

    $(window).scroll(function(){
      if($(this).scrollTop() > myHeader){
        myNavigation.addClass(stickyNavbar);
      }else{
        myNavigation.removeClass(stickyNavbar);
      }
    });