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

$('.dropdown-menu').on('click', function(event){
  event.stopPropagation();
});

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

// catalogue
var priceSlider = document.getElementById('price-range');

if(priceSlider){
  noUiSlider.create(priceSlider, {
    start: ['0', '10000'],
    connect: true,
    range: {
        'min': 0,
        'max': 10000
    },
});

var formatValues = [
    document.getElementById('price-value-lower'),
    document.getElementById('price-value-upper')
];

priceSlider.noUiSlider.on('update', function (values, handle, unencoded) {
    formatValues[handle].value = Math.ceil(values[handle]);
});

formatValues.forEach((input, handle) => {
  input.addEventListener('change', function () {
    priceSlider.noUiSlider.setHandle(handle, this.value);
  });
})
}


$(".basket-item__del").click(function(e){
  e.preventDefault();
  $(this).closest(".basket-item").remove()
})

document.addEventListener('DOMContentLoaded', () => {
  const width = window.innerWidth
  if (width < 1200){
    $(".filter-toggler").click(function(e){
      e.preventDefault();
      $('#filter').toggleClass('show');
      $('body').toggleClass('overflow-none');
    })
  }
})


// basket
// // input number
jQuery(($) => {
  $(document).on('click', '.input-number__minus', function () {
      let total = $(this).next();
      if (total.val() > 1) {
          total.val(+total.val() - 1);
      } else{
        $(this).parents().find('.btn-add').removeClass('collapse');
        $(this).parents('.fake-btn').addClass('collapse');
      }
  });
  $(document).on('click', '.input-number__plus', function () {
      let total = $(this).prev();
      total.val(+total.val() + 1);
  });
  document.querySelectorAll('.input-number__input').forEach(function (el) {
      el.addEventListener('input', function () {
          this.value = this.value.replace(/[^\d]/g, '');
      });
  });
});

// forgot pass
let codeGroupInputs = document.querySelectorAll("#code-group input")

for(let i = 0; i < codeGroupInputs.length; i++){
  codeGroupInputs[i].addEventListener("input", function(){
    if(codeGroupInputs[i].value != ""){
      codeGroupInputs[i+1].focus()
    } else{
      codeGroupInputs[i-1].focus()
    }
  })

}
