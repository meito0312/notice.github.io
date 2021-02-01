$(function(){
  
  
  // $('.burger-btn').on('click',function(){
  //   $('.burger-btn').toggleClass('close');
  //   $('.nav-wrapper').fadeToggle(500);
  //   $('body').toggleClass('noscroll');
  // });

  // $('.burger-btn').click(function(){
  //   $('.burger-btn').toggleClass('close');
    // $('.nav-wrapper').fadeIn(500);
  // });

  $('.burger-btn').click(function(){
    if($('.nav-wrapper').hasClass('open')){
       $('.nav-wrapper').removeClass('open');
       $('.nav-wrapper').slideUp();
    }
    else{
      $('.nav-wrapper').addClass('open');
      $('.nav-wrapper').slideDown();
    }
  });
});

