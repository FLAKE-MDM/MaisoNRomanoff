$('.btn-menu').click(function(){
  $(this).toggleClass('active');
  $('.navbar').toggleClass('show');
  $('body').toggleClass('overflow-none');
})
