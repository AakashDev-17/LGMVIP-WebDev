$(document).ready(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 50) {
      $(".navbar").css("background", "white");
      $(".navbar").css("color", "black");
    } else {
      $(".navbar").css("background", "transparent");
      $(".navbar").css("color", "white");
    }
  });
});

