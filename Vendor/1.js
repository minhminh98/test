$(function () {
  $('.demo').slick({
    dots: true,
    dotsClass:'slick-dot',
      infinite: false,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      appendDots: '.nut',
      prevArrow: '.slide-button-left',
      nextArrow:".slide-button-right",
      adaptiveHeight: true,
      responsive: [{
        breakpoint: 576,
        settings:{
          slidesToShow:1,
          autoplay: true,
          autoplaySpeed :3000
        }
      }]
              
  });
  $('.language').click(function (e) { 
    e.preventDefault();
    $('a.layer').toggleClass('show-layer')
  });
  $('.shopping').click(function (e) { 
    e.preventDefault();
      $(this).toggleClass("show-shopping")
  });
  $('.icon-reppon span').click(function (e) { 
    e.preventDefault();
    $('.icon-reppon ul ').toggleClass('show-icon-reppon')
  });
  
  $('.show-menu').click(function (e) { 
    e.preventDefault();
    $('.menutop').slideToggle();
  });
   var trangthai= true;
   
  $('.menutop-link').click(function (e) { 
    e.preventDefault();  
    if($(this).next().hasClass('show-li-item')){
      $(this).next().removeClass('show-li-item')
    }
    else{
       var dulieu = $(this).data('dulieu');    
      $('.show-li-item').removeClass('show-li-item')
       $("#"+ dulieu).toggleClass('show-li-item');
    }    
  });

  $('.pages-link').click(function (e) { 
    e.preventDefault();
    if($(this).next().hasClass('show-li-item2')){
      $(this).next().removeClass('show-li-item2')
    }
    else{
       var dulieu = $(this).data('dulieu');    
      $('.show-li-item2').removeClass('show-li-item2')
       $("#"+ dulieu).toggleClass('show-li-item2');
      }
  }); 
 
  $(window).scroll(function () { 
    var footerHere= $('.slides').offset().top;
    var bodyHere= $('body,html').scrollTop();   
    if( bodyHere >= footerHere +500){     
      $('.uptotop').addClass('show-uptotop')
    }
    else{      
      $('.uptotop').removeClass('show-uptotop')
    }
    if(bodyHere >= ($('.content').offset().top)){
      $('nav.header').addClass('show-nav')
    }
    else{
      $('nav.header').removeClass('show-nav')
    }
   
  });
  $(".uptotop").click(function (e) { 
    e.preventDefault();
      $('body,html').animate({scrollTop: 0})
  });
});