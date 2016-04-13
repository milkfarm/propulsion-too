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

  });
})();
