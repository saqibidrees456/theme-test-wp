jQuery(document).ready(function ($) {
  new WOW().init();
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 0) {
      $("body").addClass("scrolled");
    } else {
      $("body").removeClass("scrolled");
    }
  });
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 5
      },
      600: {
        items: 5
      },
      1000: {
        items: 7
      }
    }
  });

var swiper = new Swiper( 'body .swiper-container.two', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    effect: 'coverflow',
    loop: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    autoplay: 2000,
    coverflow: {
      rotate: 0,
      stretch: 100,
      depth: 150,
      modifier: 1.5,
      slideShadows : false,
    }
  }); 
  Splitting();

  $('#slide-testimonal').owlCarousel({
    margin: 0,
    center: true,
    loop: true,
    nav: true,
    items:3,
    responsive: {
      0: {
       items: 1
     },
     768: {
       items: 2,
       margin: 15,
     },
     1000: {
       items: 3,
     }
   }
 });
  $('.menu-item').hover(function(){
    $(this).toggleClass('dropdown-active');
  });
  $('.navbar-toggler').click(function(event) {
    $click = $(this).attr('aria-expanded')
    if( $click == 'false' ){
      $('.hamburger').addClass('is-active');
    }else{
      $('.hamburger').removeClass('is-active');
    }
  });
  $('.menu-mobile .menu-item-has-children.menu-item>a').append('<i class="fa fa-angle-down" aria-hidden="true"></i>');
  $('.menu-mobile .menu-item-has-children.menu-item>a i').click(function (e){
    e.preventDefault();
    if(!$(this).parent().next('.sub-menu').hasClass('active')){
      $('.sub-menu.active').slideUp('slow').removeClass('active');
      $(this).parent().next('.sub-menu').addClass('active').slideDown('slow');
    }else {
      $('.sub-menu.active').slideUp('slow').removeClass('active');
    }
  });
  $('a[href="#contact-section"]').click(function() {
    var target = $(this.hash);
    if (target.length == 0) target = $('a[name="' + this.hash.substr(1) + '"]');
    if (target.length == 0) target = $('html');
    $('html, body').animate({ scrollTop: target.offset().top-75 }, 1000);
    return false;
  });
});
