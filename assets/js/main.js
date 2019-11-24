$(document).ready(function () {

    $('.navbar-hamburger').on('click', function () {
      $(this).toggleClass('active');
      $('.navbar-list').stop(true, true).fadeToggle(500);
    });
  
  });


document.body.onload = function () {
    setTimeout(function () {
        var preloader = document.getElementById("preloader");
        if (!preloader.classList.contains("done")) {
            preloader.classList.add("done");
        }
    }, 1000);
}
