
    $('.header__burger').click(function(){
        $(this).toggleClass('active');
        $('.header').toggleClass('active');
        $('body').toggleClass('no-scroll');
    })


    
    const preloader = document.querySelector('.preloader') ;

setTimeout(function() {
  $('.preloader').fadeToggle();
}, 500)