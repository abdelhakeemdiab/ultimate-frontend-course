$(function() {
    'use strict';
    // Toggle Side Bar 
    $('.toggle-sidebar').on('click', function ()  {
        $('.sidebar, .content-area').toggleClass('no-sidebar');
    });
    //Toggle Sub Menu
    $('.toggle-submenu').on('click', function () {
        $(this).find('.fa-angle-right').toggleClass('down');
        $(this).next('.child-links').slideToggle();
    });
});