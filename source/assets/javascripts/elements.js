// MAIN.JS
//--------------------------------------------------------------------------------------------------------------------------------
//This is main JS file that contains custom JS scipts and initialization used in this template*/
// -------------------------------------------------------------------------------------------------------------------------------
// Template Name: EIGHT.
// Author: Designova.
// Version 1.0 - Initial Release
// Website: http://www.Designova.net
// Copyright: (C) 2015
// -------------------------------------------------------------------------------------------------------------------------------

/*global $:false */
/*global window: false */

(function(){
  "use strict";

  $(function ($) {

    $(".dropdown").hover(
      function() {
        $('.dropdown-menu', this).stop( true, true ).slideDown("fast");
        $(this).toggleClass('open');
      },
      function() {
        $('.dropdown-menu', this).stop( true, true ).slideUp("fast");
        $(this).toggleClass('open');
      }
    );

  });

})();
