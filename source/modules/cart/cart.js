document.addEventListener("DOMContentLoaded", function() {
  $(".js-receiver-info-checker").on("change", function() {
    if (this.checked) {
      $(".js-receiver-info-form").slideUp();
    } else {
      $(".js-receiver-info-form").slideDown();
    }
  });
});
