$(document).ready(function(){
  $('.loop').owlCarousel({
      center: true,
      items: 2,
      loop: true,
      margin: 10,
      responsive: {
          600: {
              items: 5
          }
      }
  });
});

