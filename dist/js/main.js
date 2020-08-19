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

    // Toggle Full Screen
    $('.toggle-fullscreen').on('click', function () {
        $(this).toggleClass('full-screen');
        if ($(this).hasClass('full-screen')) {
            openFullscreen();
        } else {
            closeFullscreen();  
        }
    });
});


/* Get the documentElement (<html>) to display the page in fullscreen */
var elem = document.documentElement;

/* View in fullscreen */
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem.msRequestFullscreen();
  }
}

/* Close fullscreen */
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) { /* Firefox */
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE/Edge */
    document.msExitFullscreen();
  }
}

const myMap = new Map()
const mySet = new Set()