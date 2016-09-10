$(function ($) {
  // This is an ES6 function!
  const log = (x) => console.log(x);

  log('Welcome to MA Web Devs!');

  //$("form[name=demo]").validate();

  $('.learn-me-grid').masonry({
    // options
    itemSelector: '.grid-item'
  });

});
