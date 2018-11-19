$(document).ready(function(){
  $('.js-dropdown-toggle').on('click', function(e){
    e.preventDefault();
    $(this).parent().siblings('.js-dropdown-menu').slideToggle();
  });

  $('.navbar-mobile-btn').on('click', function(){
    $('.navbar-mobile, .navbar-backdrop').addClass('is-show');
    $('body').addClass('over-hidden');
  });
  $('.navbar-backdrop, .navbar-mobile-close').on('click', function(){
    $('.navbar-mobile, .navbar-backdrop').removeClass('is-show');
    $('body').removeClass('over-hidden');
  });
});
