const swiper = new Swiper('.swiper', {



  
  direction: 'horizontal',
  loop: true, 
  effect: 'flip',
  fipEffect: { slideshadow: true, limitRotation: true },
   pagination: {
       el: '.swiper-pagination',
       clickable: true,
     dynamicBullets: true,
       
  },  navigation: {
    nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',

  },  scrollbar: {
     el: '.swiper-scrollbar',
     
  }, 
   slideToClickedSlide: true,
  
});
new Swiper(".reviews");