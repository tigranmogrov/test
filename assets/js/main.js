$(document).ready(function () {

    $('.navbar-hamburger').on('click', function () {
      $(this).toggleClass('active');
      $('.navbar-list').stop(true, true).fadeToggle(500);
    });
  
  });

  $('.about-carusel').slick({
    infinite: false,
    speed: 900,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: '<i class="fas fa-chevron-left"></i>',
    nextArrow: '<i class="fas fa-chevron-right"></i>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.clients-content').slick({
    infinite: false,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true
  });
document.body.onload = function () {
    setTimeout(function () {
        var preloader = document.getElementById("preloader");
        if (!preloader.classList.contains("done")) {
            preloader.classList.add("done");
        }
    }, 1000);
}

