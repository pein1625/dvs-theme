$(document).ready(function(){
  $('.dropdown-caret').on('click', function(e){
    e.preventDefault();
    $(this).parent().siblings('.dropdown-menu').slideToggle();
  });

  $('.js-mb-menu-btn').on('click', function(){
    $('.js-mb-menu, .js-mb-filter').addClass('is-show');
    $('body').addClass('no-scroll');
  });
  $('.js-mb-filter, .js-mb-menu-close').on('click', function(){
    $('.js-mb-menu, .js-mb-filter').removeClass('is-show');
    $('body').removeClass('no-scroll');
  });
});
