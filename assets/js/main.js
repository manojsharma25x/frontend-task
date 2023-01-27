$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items:1.5,
    autoplay:true,
    nav:true,
    autoplayTimout:2000,
    responsive : {
      // breakpoint from 0 up
      1279 : {
          items:2.5
      },
      1440 : {
          items:3.5
      },
      1600 : {
          items:5.5
      },
  }
  });
});
// https://stackoverflow.com/questions/31224192/owl-carousel-making-custom-navigation