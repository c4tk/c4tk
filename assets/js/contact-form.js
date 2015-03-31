$(function () {
  setTimeout(function () {
    var contactForms = $(".contact-form");
    contactForms.each(function (i, f) {
     $(f).attr("action", $(f).data("actionPath"));
    });
  }, 1000); // 1 second timeout protection against spam bots.
});
