document.addEventListener("DOMContentLoaded", function (event) {

    $(document).ready(function () {
        $('.works__slider').slick({
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            // vertical: true,
            dots: true,

        });
    });
});




$('.header__content-link').click(function (event) {
    event.preventDefault();


  
    
    $('.header__burger').removeClass('active');
    $('body').removeClass('no-scroll');
    $('.header').removeClass('active');


    let $this = $(this),
        blockId = $this.data('scroll');
    blockOffset = $(blockId).offset().top;
    $('html, body').animate({
        scrollTop: blockOffset
    }, 500)
})


$('.home__content-link').click(function (event) {
    event.preventDefault();

    // $('.home__content-links').removeClass('active');
    // $('.header__burger').removeClass('active');
    // $('body').removeClass('no-scroll');

    let $this = $(this),
        blockId = $this.data('scroll');
    blockOffset = $(blockId).offset().top;
    $('html, body').animate({
        scrollTop: blockOffset
    }, 500)
})


    $('.header__burger').click(function(){
        $(this).toggleClass('active');
        $('.header').toggleClass('active');
        $('body').toggleClass('no-scroll');
    })


    $(".contact__rocket-link").click(function()
	{
		jQuery('html,body').animate({scrollTop:0},600);
	})



    
const preloader = document.querySelector('.preloader') ;

// window.addEventListener('load',function() {
//   preloader.classList.add('hide-preloader');
// })

setTimeout(function() {
    $('.preloader').fadeToggle();
  }, 500)