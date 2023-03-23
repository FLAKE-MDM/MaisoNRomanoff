// all
$('.btn-menu').click(function(){
  $(this).toggleClass('active');
  $('.navbar').toggleClass('show');
  $('body').toggleClass('overflow-none');
})

$('.toggler').click(function(e){
  e.preventDefault();
  $(this).toggleClass('active');
})

// home
$(window).on('load',function(){
  $('#cookie').modal('show');
});

// card
new Swiper(".card-slider", {
  loop: true,
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  thumbs: {
    swiper: {
      el: ".thumbs-slider",
      slidesPerView: 4,
      spaceBetween: 6,
      direction: "vertical",
      breakpoints: {
        1200: {
          spaceBetween: 10,
        },
      },
    },
  },
  nested: true,
});

Fancybox.bind('[data-fancybox="gallery"]', {});

document.addEventListener('DOMContentLoaded', () => {
  const width = window.innerWidth
  if (width > 991){
    new Swiper(".additional-slider", {
      slidesPerView: 3,
      spaceBetween: 12,
      navigation: {
        nextEl: ".additional-next",
        prevEl: ".additional-prev",
      },
      breakpoints: {
        1200: {
          spaceBetween: 18,
        },
      },
    });
  }
})


