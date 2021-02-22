$(document).ready(function () {
 /* $(".btn-gr").click(function(){
    $(this).toggleClass("green");
}); */

    $(".card-elite").hover(
      function () {
        $(this).addClass("animation-elite");
      },
      function () {
        $(this).removeClass("animation-elite");
      }
    );

    $(".card-blogs").hover(
        function () {
          $(this).addClass("animation-blogs");
        },
        function () {
          $(this).removeClass("animation-blogs");
        }
      );
  });