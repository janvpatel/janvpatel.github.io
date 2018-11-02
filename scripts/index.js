$(document).ready(function() {
  $('.container').hide().fadeIn(200);


  $('a').not( ".active" ).not(".external").on('click', function( event ) {
    event.preventDefault();
    newLocation = this.href;
    console.log($(this).hasClass( "noExit" ));
    if($(this).hasClass("noExit")) {
      newpage();
    } else {
      $('.container').fadeOut(200,newpage);
    }
  });

  $('a.external').on('click', function( event ) {
    event.preventDefault();
    newLocation = this.href;
    $('body').fadeOut(250,newpage);
  });

  function newpage() {
    window.location = newLocation;
  }

  $('#social a').on('mouseover', function() {
    $(this).addClass('animated bounce');
  });

  $('#social a').on('mouseout', function() {
    $(this).removeClass('animated bounce');
  });

});
