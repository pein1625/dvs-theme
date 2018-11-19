  $(".js-social-btn").on('click', function(e){
    e.stopPropagation();
    $(this).toggleClass('is-hide');
    $(".js-social-sticky").toggleClass('is-show');
  });
  $(".js-social-sticky").on('click', function(e){
    e.stopPropagation();
  });
  $('.js-social-sticky [data-toggle="modal"]').on('click', function(){
    var target = $(this).data('target') || $(this).attr('href');
    if ($(target).length) {
      $(target).modal("show");
    }
  })
  $("html, body").on("click", function(){
    $(".js-social-sticky").removeClass('is-show');
    $(".js-social-btn").removeClass("is-hide");
  });
