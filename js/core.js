$(document).ready(function() {

  $(window).on('scroll touchmove', function() {
    if ($(window).scrollTop() >= 80) {
      $('.banner').addClass('btm-shdw');
    } else {
      $('.banner').removeClass('btm-shdw');
    }
  });

  // open main nav
  $('.navicon').click(function(){
    $('nav').toggleClass('open');
    $('body').toggleClass('clip');
    $('.nav-bg').fadeToggle(200, function() {
      $('.sub-nav > ul').slideUp(200);
    });
  });

});