$(document).ready(function($) {


	// Slider
	var swiper = new Swiper('.swiper-container', {
        pagination: {
          el: '.swiper-pagination',
        },
      });




});

// ButtonUp //
var btn = $('#button');

$(window).on("scroll load resize",function () {
    var pixelTop = $(window).scrollTop();
    if(pixelTop > 0 && $(document).width() > 0) {
        btn.addClass('show');
    }else if(pixelTop < 1) {
       btn.removeClass('show');
    }
});

btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });

  // Плавный скролл к секции

  var nav = $("a.nav__link, a.arrow-down");

    nav.click(function (e) {
    e.preventDefault();
    elementClick = $(this).attr("href");
    destination = $(elementClick).offset().top;
    $('html, body').animate({scrollTop: destination}, '250');  
  })

