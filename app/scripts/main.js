
$(function ($) {
  // This is an ES6 function%c!
  const log = (x) => console.log.apply(null, [].concat(x));

  // log the cool little message in console with heart emoji
  log([`%c${style.emoji('heart')} %cWelcome, %cMA %cWeb Devs %c${style.emoji('heart')}`,
    style.exclam,
    style.font({color: 'rgb(82, 65, 76)', size: 24}),
    style.font({color: 'coral', size: 28, weight: 'bold'}),
    style.font({color: 'rgb(91, 140, 90)', size: 24}),
    style.exclam]);


  $('.learn-me-grid').masonry({
    // options
    itemSelector: '.grid-item'
  });


  //TODO: Add a form and demo validation.
  //$("form[name=demo]").validate();

});
