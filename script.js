$(document).ready(function () {
  $(`#about-me-page`).fadeIn("slow");
  $("nav a").click(function (e) {
    e.preventDefault();
    let id = $(this).attr("id");
    $(".section").fadeOut("slow");
    $(`#${id}-page`).fadeIn("slow");
  });
});
