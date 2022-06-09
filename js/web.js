
    $('.header__burger').click(function(){
        $(this).toggleClass('active');
        $('.header').toggleClass('active');
        $('body').toggleClass('no-scroll');
    })


    const items = [...document.querySelectorAll('.web__experience-items-title')];

const updateCount = (el) => {
  const value = parseInt(el.dataset.value);
  const increment = Math.ceil(value / 1000);
  // const increment = 1;
  let initialValue = 0;

  const increaseCount = setInterval(() => {
    initialValue += increment;

    if (initialValue > value) {
      el.textContent = `${value}+`;
      clearInterval(increaseCount);
      return;
    }

    el.textContent = `${initialValue}+`;
  }, 65);
  // console.log(increaseCount);
};

items.forEach((item) => {
  updateCount(item);
});



const preloader = document.querySelector('.preloader') ;

// window.addEventListener('load',function() {
//   preloader.classList.add('hide-preloader');
// })

setTimeout(function() {
  $('.preloader').fadeToggle();
}, 500)