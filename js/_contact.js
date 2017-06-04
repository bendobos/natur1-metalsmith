$("#contact-form").submit(function(e) {
  e.preventDefault();

  $(".send").toggleClass("hidden");
  $(".loading").toggleClass("hidden");

  var $form = $(this);
  $.post($form.attr("action"), $form.serialize()).then(function() {
    $(".loading").toggleClass("hidden");
    $(".success").toggleClass("hidden");
  });
});
