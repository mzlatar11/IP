$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

$(function(){
  wow = new WOW(
  {
    mobile: false
  });
  wow.init();


  $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });



  $('.iso-box-section a').nivoLightbox({
        effect: 'fadeScale',
    });


  $(function(){
    jQuery(document).ready(function() {
    $('#home').backstretch([
       "proizvod_naslovna.jpg", 
       "naslovna1.jpg",
        ],  {duration: 1500, fade: 500});
    });
  })

});

