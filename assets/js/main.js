$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items:1.5,
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