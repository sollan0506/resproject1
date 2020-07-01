// Gallery 초기값 설정
$(window).load(function(){
  var container = $('#gallery');

  container.isotope({
    itemSelector: '.grid-item'
  });
});


$(function(){

  // Covervid JS Call
  $('.covervid-video').coverVid(1920, 1080);


  //  Circle Progress JS Call
  $('.circle.circle1').circleProgress({
    value: 0.87,
    size: 180,
    fill: '#8ec735'
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(87 * progress) + '<i>%</i>');
  });

  $('.circle.circle2').circleProgress({
    value: 0.85,
    size: 180,
    fill: '#fcbf00'
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(85 * progress) + '<i>%</i>');
  });

  $('.circle.circle3').circleProgress({
    value: 0.75,
    size: 180,
    fill: '#1ac7cc'
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(75 * progress) + '<i>%</i>');
  });

  $('.circle.circle4').circleProgress({
    value: 0.8,
    size: 180,
    fill: '#e43240'
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(80 * progress) + '<i>%</i>');
  });


  // gmenu JS
  var gMenu = $('.gmenu li a');

  gMenu.click(function(){
    gMenu.removeClass('menu-act');
    $(this).addClass('menu-act');

    event.preventDefault();
  });


  // Gallery Setting
  var grid = $('.grid');
  var all = $('.grid-item a');
  var g1 = $('.g1 a');
  var g2 = $('.g2 a');
  var g3 = $('.g3 a');

  // lightBox JS 초기설정
  all.lightBox({
    overlayBgColor: '#333',
    overlayOpacity: 0.6,
    imageLoading: '../images/light-box/lightbox-ico-loading.gif',
    imageBtnClose: '../images/light-box/lightbox-btn-close.gif',
    imageBtnPrev: '../images/light-box/lightbox-btn-prev.gif',
    imageBtnNext: '../images/light-box/lightbox-btn-next.gif',
    imageBlank: '../images/light-box/lightbox-blank.gif'
  });

  // Filter Sort Setting
  $('#m1').click(function(){
    grid.isotope({ filter: '*' })
    all.lightBox({
      imageLoading: '../images/light-box/lightbox-ico-loading.gif',
      imageBtnClose: '../images/light-box/lightbox-btn-close.gif',
      imageBtnPrev: '../images/light-box/lightbox-btn-prev.gif',
      imageBtnNext: '../images/light-box/lightbox-btn-next.gif',
      imageBlank: '../images/light-box/lightbox-blank.gif'
    });
    event.preventDefault();
  });

  $('#m2').click(function(){
    grid.isotope({ filter: '.g1' })
    g1.lightBox({
      imageLoading: '../images/light-box/lightbox-ico-loading.gif',
      imageBtnClose: '../images/light-box/lightbox-btn-close.gif',
      imageBtnPrev: '../images/light-box/lightbox-btn-prev.gif',
      imageBtnNext: '../images/light-box/lightbox-btn-next.gif',
      imageBlank: '../images/light-box/lightbox-blank.gif'
    });
    event.preventDefault();
  });

  $('#m3').click(function(){
    grid.isotope({ filter: '.g2' })
    g2.lightBox({
      imageLoading: '../images/light-box/lightbox-ico-loading.gif',
      imageBtnClose: '../images/light-box/lightbox-btn-close.gif',
      imageBtnPrev: '../images/light-box/lightbox-btn-prev.gif',
      imageBtnNext: '../images/light-box/lightbox-btn-next.gif',
      imageBlank: '../images/light-box/lightbox-blank.gif'
    });
    event.preventDefault();
  });

  $('#m4').click(function(){
    grid.isotope({ filter: '.g3' })
    g3.lightBox({
      imageLoading: '../images/light-box/lightbox-ico-loading.gif',
      imageBtnClose: '../images/light-box/lightbox-btn-close.gif',
      imageBtnPrev: '../images/light-box/lightbox-btn-prev.gif',
      imageBtnNext: '../images/light-box/lightbox-btn-next.gif',
      imageBlank: '../images/light-box/lightbox-blank.gif'
    });
    event.preventDefault();
  });


  // jarallax JS Call
  $('.jarallax').jarallax({
      speed: 0.2
  }); 


  // WOW JS Call
  new WOW().init();


  // Sticky JS Setting
  // 상단 네비게이션 스크롤이동 설정
  var menuItem = $('#gnb li a, #navi h1 a');

  menuItem.click(function(){
    var el = $(this).attr('href');  //ex) #about
    // console.log(el);
    var elWrap = $(el);           //ex) $('#about')
    // console.log(elWrap);
    
    scrollMove(elWrap, 50);
  });

  // 부드러운 이동 함수 만들기
  function scrollMove(elWrap, navHeight){
    var offset = elWrap.offset().top; //위로부터 얼만큼 떨어져 있는지
    var totalScroll = offset - navHeight;

    $('html, body').animate({scrollTop: totalScroll}, 800);
  }


  // Mobile Menu Toggle Setting
  var mobileMenu = $('#gnb');
  var mobileBtn = $('.navbar-header button');

  mobileMenu.mouseleave(function(){
    $(this).animate({'height': 0}, 800, function(){
      $(this).removeClass('in');
    }).children().children('li').removeClass('active');
    mobileBtn.css('background', 'transparent');
  });
  mobileBtn.mouseenter(function(){
    $(this).css('background', '#ddd');
  });
});