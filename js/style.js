$(document).ready(function() {

   /*-- NAVIGRATION --*/
   $('#nav').onePageNav({
      currentClass: 'current',
      changeHash: false,
      scrollSpeed: 750,
      scrollThreshold: 0.5,
      filter: '',
      easing: 'swing'
   });

   $("#hamburger").click(function() {
      $(this).toggleClass("active");
      $(".side-bar").toggleClass("active");
   })
   $(".nav-link").click(function(){
      $(".side-bar").removeClass("active");
      $("#hamburger").removeClass("active");
   });

   $(window).scroll(function() {
      var st = $(this).scrollTop();
      if( st > 10 ) {
         $(".navbar").css({
            background: "rgba(255, 255, 255, .9)"
         });
         $("#navigration .nav-link").css({
            color: "#000"
         });
      } else {
         $(".navbar").css({
            background: "none"
         });
         $("#navigration .nav-link").css({
            color: "#fff"
         });
      }
   });

   /*-- HOME SECTION TYPED PLUGIN --*/
   var typed3 = new Typed('.type', {
      strings: ["Mahfuzur Rahman Mridul", "Front End Web Developer"],
      typeSpeed: 30,
      backSpeed: 30,
      fadeOut: false,
      loop: true
   });

   /*-- SKILL SECTION PROGRESS BAR PLUGIN --*/
   (function($) {
       'use strict';
       $('.html').rProgressbar({
           percentage: 80,
           fillBackgroundColor: '#72b625'
       });
       $('.css').rProgressbar({
           percentage: 90,
           fillBackgroundColor: '#72b625'
       });
       $('.jquery').rProgressbar({
           percentage: 75,
           fillBackgroundColor: '#72b625'
       });
       $('.bootstrap').rProgressbar({
           percentage: 65,
           fillBackgroundColor: '#72b625'
       });
       $('.psd').rProgressbar({
           percentage: 95,
           fillBackgroundColor: '#72b625'
       });
       $('.wordpress').rProgressbar({
           percentage: 95,
           fillBackgroundColor: '#72b625'
       });
   })(jQuery);

   /*-- TESTIMONIAL SECTION CAROUSEL PLUGIN --*/
   $('#testimonialSection .owl-carousel').owlCarousel({
      loop: true,
      margin: 30,
      nav: false,
      autoplay: true,
      responsive: {
         0: {
            items:1
         },
         768: {
            items:2
         }
      }
   });

   /*-- PORTFOLIO SECTION --*/
   var mixer = mixitup('#portfolio');

   $(".selector > span").click(function() {
      $(".selector > span").removeClass("active");
      $(this).addClass("active");
   });

   $('#portfolio').magnificPopup({
      type:'image',
      delegate: ".img-box > a",
      gallery: { enabled: true }
   });

   /*-- WORK SECTION COUNTERUP PLUGIN --*/
   $(".counter").counterUp({
      delay: 10,
      time: 1200
   });

   /*-- AOS SCROLL ANIAMATION PLUGIN --*/
   AOS.init({
     duration: 1200,
     offset: "50px"
   })

   /*-- SCROLL UP --*/
   $(".scroll-up").fadeOut();
   $(window).scroll(function() {
      if ( $(this).scrollTop()>100 ) {
         $(".scroll-up").fadeIn();
      } else {
         $(".scroll-up").fadeOut();
      };
   });

   $(".scroll-up").click(function() {
      $("html").animate({scrollTop: 0}, 1000);
      return false;
   });

   /*-- WINDOW LOAD TIME ANIMATION --*/
   $(window).on("load",function() {
      $(".loader-bg").fadeOut(3000);
      $(".loader").fadeOut(2000);
   });

})
