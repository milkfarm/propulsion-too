/*
 * NORD - Premium HTML5 Template from Designova
 * Author: Designova, http://www.designova.net
 * Copyright (C) 2016 Designova
 * This is a premium product. For licensing queries please contact info@designova.net
 */


/*global $:false */
/*global window: false */
(function() {
  "use strict";
  $(function($) {

    //Detecting viewpot dimension
    var vH = $(window).height();
    var vW = $(window).width();

    //Adjusting Intro Components Spacing based on detected screen resolution
    $('.fullwidth').css('width', vW);
    $('.fullheight').css('height', vH);
    $('.halfwidth').css('width', vW / 2);
    $('.halfheight').css('height', vH / 2);
    $('.quarterheight').css('height', vH - vH/6);

    //PRELOADER
    $('body, html').addClass('preloader-running');
    $('#mastwrap').css('visibility', 'hidden');
    $(window).load(function() {
      $("#status").fadeOut();
      $("#preloader").delay(1000).fadeOut(1000);
      $('body, html').removeClass('preloader-running');
      $('body, html').addClass('preloader-done');
      $("#mastwrap").delay(1000).css('visibility', 'visible');
    });

    //Main Menu Trigger
    (function( $ ){
      $.fn.menuPanelTrigger = function() {
        if($(".mastnav").is(":hidden"))
          {
            $('.mastnav').slideDown();
          }
          else{
            $('.mastnav').slideUp();
          }
      };
    })( jQuery );
    $('.menu-notification a, .menu-close-notification a').on('click', function(e){
      e.preventDefault();
      $().menuPanelTrigger();
    });

    //PORTFOLIO UX
    (function( $ ){
      $.fn.filterPanelTrigger = function() {
        if($(".works-filter-panel").is(":hidden"))
          {
            $('.works-filter-panel').slideDown();
          }
          else{
            $('.works-filter-panel').slideUp();
          }
      };
    })( jQuery );
    $('.filter-notification a').on('click', function(e){
      e.preventDefault();
      $().filterPanelTrigger();
    });
    $('.works-filter li a').on('click', function(){
      $('.works-filter li a').removeClass('filter-active');
      $(this).addClass('filter-active');
      return false;
    });

    if ( $( ".works-container" ).length ) {
      $('.filter-notification a').show();
    }
    else{
      $('.filter-notification a').hide();
    }

    //ISOTOPE GLOBALS
    var $container1 = $('.works-container');
    var $container2 = $('.news-container');

    //ISOTOPE INIT
    $(window).load(function() {
      $container1.isotope({
        // options
        itemSelector: '.works-item',
        layoutMode: 'masonry',
        transitionDuration: '0.8s'
      });
      $container2.isotope({
        // options
        itemSelector: '.news-item',
        layoutMode: 'masonry',
        transitionDuration: '0.8s'
      });
      //forcing a perfect masonry layout after initial load
      setTimeout(function() {
        $container1.isotope('layout');
        $container2.isotope('layout');
      }, 100);
      // filtering
      $('.works-filter li a').on('click', function() {
        $('.works-filter li a').removeClass('active');
        $(this).addClass('active');

        var selector = $(this).attr('data-filter');
        $('.works-container').isotope({
          filter: selector
        });
        setTimeout(function() {
          $container1.isotope('layout');
        }, 700);
        return false;
      });
    });

    //Isotope ReLayout on Window Resize event.
    $(window).on('resize', function() {
      $container1.isotope('layout');
      $container2.isotope('layout');
    });

    //Isotope ReLayout on device orientation changes
    window.addEventListener("orientationchange", function() {
      $container1.isotope('layout');
      $container2.isotope('layout');
    }, false);

    //Venobox
    $('.venobox, .image-lightbox-link').venobox({
      numeratio: true,
      infinigall: true
    });

  });
})();
