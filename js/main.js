$(document).ready(function(){
	var dotSize = 8;
	if(window.innerWidth <1024){
		dotSize = 4;
	}else{
		dotSize = 8;
	}

    $(".nav").scrollspy({ offset: 80, animate: true });

    // Scroll To
    $('.js_scrollTo').on('click', function (e) {
        // var headerHeight = 80;
        var sectionMargin = 160;
        e.preventDefault();
     
        var targetEle = $(this).attr("data-scrollTarget");
        var $targetEle = $(targetEle);
        if(targetEle == '#contact') {
            sectionMargin = -80;
        }
     
        $('html, body').stop().animate({
            'scrollTop': $targetEle.offset().top - sectionMargin
        }, 800, 'swing', function () {
            window.location.hash = targetEle;
        });
    });     


    // Particle
    particlesJS('pjs',
      
      {
        "particles": {
          "number": {
            "value": 100,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": "#fff"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "img/star.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.4,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": dotSize,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 4,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 100,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 2
          },
          "move": {
            "enable": true,
            "speed": 0.8,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": false,
              "mode": "repulse"
            },
            "onclick": {
              "enable": false,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 200
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true,
        "config_demo": {
          "hide_card": false,
          "background_color": "#b61924",
          "background_image": "",
          "background_position": "50% 50%",
          "background_repeat": "no-repeat",
          "background_size": "cover"
        }
      }
      
    );

    // Form Handling
    function smoothScrollTo(targetEle){
        var $targetEle = $(targetEle);
        if(targetEle == '#contact') {
            sectionMargin = -80;
        }else{
            sectionMargin = 40;
        }

        $('html, body').stop().animate({
            'scrollTop': $targetEle.offset().top - sectionMargin
        }, 800, 'swing', function () {
            window.location.hash = targetEle;
        });
    }
    function checkFilled(elementID) {
        var val = $(elementID).val();
        if(val == ''){
          $(elementID).addClass('empty');
          return false;
        } else {
          $(elementID).removeClass('empty');
          return true;
        }
    }
    function checkAgreed() {
        if($('#agreed').hasClass('checked')) {
          $('#agreed').removeClass('empty');
          return true;
        }else{
          $('#agreed').addClass('empty');
          return false;
        }
    }
    function checkIsEmail(emailElement) {
      emailText = $(emailElement).val()
      var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      if(regex.test(emailText)){
          $(emailElement).removeClass('empty');
          return true;
      }else{
          $(emailElement).addClass('empty');
          return false;
      }
    }
    function checkSelected() {
      if( $('select').val() == '' ) {
        $("select").addClass('empty');
        return false;
      } else {
        $("select").removeClass('empty');
        return true;
      }
    }
    $('#last_name').on('input',function(){
        checkFilled('#last_name');
    });
    $('#company_name').on('input', function(){
        checkFilled('#company_name');
    });
    $('#phone').on('input',function(){
        checkFilled('#phone');
    });
    $('#email').on('input', function(){
        checkFilled('#email');
        checkIsEmail('#email');
    });
    $('#description').on('input', function(){
        checkFilled('#description');
    });
    $('#agreed').click(function(){
        $(this).toggleClass('checked');
        checkAgreed();
    });
    $('select').on('change', function() {
	  checkSelected();
	});

    $('#op_form').on('submit', function(e){
        // e.preventDefault();
        var isNameFilled = checkFilled('#last_name');
        var isCompanyFilled = checkFilled('#company_name');
        var isTelFilled = checkFilled('#phone');
        var isEmailFilled = checkFilled('#email');
        var isEmail = checkIsEmail('#email');
        var isDescriptionFilled = checkFilled('#description');
        var isAgreed = checkAgreed();
        var isSelected = checkSelected();

        var allFilled = isNameFilled &&
                        isCompanyFilled &&
                        isTelFilled &&
                        isEmailFilled &&
                        isEmail &&
                        isDescriptionFilled &&
                        isSelected &&
                        isAgreed;

        if( !allFilled ){
            smoothScrollTo('#contact');
            e.preventDefault();
        }

    });


    // solution carsousel
    $('.solution-text1 .btn-next').on('click', function(){
    	$(this).parents('.solution-text1').addClass('out');
    	$(this).parents('.solution-texts').find('.solution-text2').removeClass('out');
    	$(this).parents('.sub-section').find('.solution-phone1').addClass('out');
      	$(this).parents('.sub-section').find('.solution-phone2').removeClass('out');
    });
    $('.solution-text2 .btn-prev').on('click', function(){
    	$(this).parents('.solution-text2').addClass('out');
    	$(this).parents('.solution-texts').find('.solution-text1').removeClass('out');
    	$(this).parents('.sub-section').find('.solution-phone2').addClass('out');
      	$(this).parents('.sub-section').find('.solution-phone1').removeClass('out');
    });

    // video pattern data
    videoPattern = {
    	's12': { videoNumber: 2, currentVideo: 1},
    	's22': { videoNumber: 5, currentVideo: 1},
    	's42': { videoNumber: 2, currentVideo: 1},
    }
    $('.phone-btn-left').on('click', function(){
    	if(!$(this).hasClass('disabled')){
    		$(this).parents('.solution-phone').find('.phone-btn-right').removeClass('disabled');
    		var p = $(this).parents('.solution-phone').find('.phone-videos').data('pattern');
    		var videoNumber = videoPattern[p].videoNumber;
    		var currentVideo = videoPattern[p].currentVideo;
    		$(this).parents('.solution-phone').find('.phone-content').animate({left: "+=236"});
    		$(this).parents('.solution-phone').find('.content-qr').animate({left: "+=236"});
    		videoPattern[p].currentVideo = --currentVideo;
    		if(currentVideo == 1){
    			$(this).addClass('disabled');
    		}
    	}
    });

    $('.phone-btn-right').on('click', function(){
    	if(!$(this).hasClass('disabled')){
    		// enable left button
    		$(this).parents('.solution-phone').find('.phone-btn-left').removeClass('disabled');
    		// get pattern
    		var p = $(this).parents('.solution-phone').find('.phone-videos').data('pattern');
    		//
    		var videoNumber = videoPattern[p].videoNumber;
    		var currentVideo = videoPattern[p].currentVideo;
    		$(this).parents('.solution-phone').find('.phone-content').animate({left: "-=236"});
    		$(this).parents('.solution-phone').find('.content-qr').animate({left: "-=236"});
    		videoPattern[p].currentVideo = ++currentVideo;
    		if(currentVideo == videoNumber){
    			$(this).addClass('disabled');
    		}
    	}
    });


    // WHY DOM DON'T UPDATE
    // $('.phone-btn-right').on('click', function(){
    // 	if(!$(this).hasClass('disabled')){
    // 		$(this).parents('.solution-phone').find('.phone-btn-left').removeClass('disabled');
    // 		var videoNumber = $(this).parents('.solution-phone').find('.phone-videos').data('videonumber')*1;
    // 		var currentVideo = $(this).parents('.solution-phone').find('.phone-videos').data('currentvideo')*1;
    // 		$(this).parents('.solution-phone').find('.phone-content').animate({left: "-=236"});
    // 		$(document).trigger('data-attribute-changed');
    // 		$(this).parents('.solution-phone').find('.phone-videos').attr('data-currentvideo', ++currentVideo);
    // 		$(document).trigger('data-attribute-changed');
    // 		if(currentVideo == videoNumber){
    // 			$(this).addClass('disabled');
    // 		}
    // 	}
    // });

    function openMenu(){
        $('.sp_menu').addClass('open');
        $('.sp_header').addClass('open');
        $('html, body').css({ 'overflow-y': 'hidden'});
        $('.sp_nav').addClass('open');
    }
    function closeMenu(){
        $('.sp_menu').removeClass('open');
        $('.sp_header').removeClass('open');
        $('html, body').css({ 'overflow-y': 'scroll'});
        $('.sp_nav').removeClass('open');
    }
    // SP Triggers
    $('.sp_menu').click(function(){
        if($(this).hasClass('open')){
          closeMenu();
        }else{
          openMenu();
        }
    });

    $('.sp_nav a').click(function(){
        href = $(this).attr('hret');
        $('.nav a[href="'+href+'"]').trigger('click');
        closeMenu();
    });

    $(window).scroll(function(){
        var scroll = $(window).scrollTop();

        // SP Scroll Events
        if( scroll > 350 ){
            $('.sp_logo').addClass('show');
        } else {
            $('.sp_logo').removeClass('show');
        }
    });


    function init() {
    	setTimeout(function(){
    		$('#top').removeClass('out');
    		setTimeout(function(){
    			$('.header').removeClass('out');
    		}, 1500);
    	}, 200)
    	$(window).trigger('scroll');
    }

    // INVIEW EFFECT
    // TOP
    $('.top-logo').on('inview', function(event, isInView){
      if(isInView) {
        $('.header').addClass('scroll');
      } else {
        $('.header').removeClass('scroll');
      }
    });

    // VALUE
    $('.value-eng').on('inview', function(event, isInView){
	  if(isInView) {
        $('#value').removeClass('out');
      } else {
        
      }
    });

    // SOLUTION
    $('.sub-solution1 h3').on('inview', function(event, isInView){
	  if(isInView) {
        $('.sub-solution1').removeClass('out');
      } else {
        
      }
    });
    $('.sub-solution2 h3').on('inview', function(event, isInView){
	  if(isInView) {
        $('.sub-solution2').removeClass('out');
      } else {
        
      }
    });
    $('.sub-solution3 h3').on('inview', function(event, isInView){
	  if(isInView) {
        $('.sub-solution3').removeClass('out');
      } else {
        
      }
    });
    $('.sub-solution4 h3').on('inview', function(event, isInView){
	  if(isInView) {
        $('.sub-solution4').removeClass('out');
      } else {
        
      }
    });
    $('.sub-solution5 h3').on('inview', function(event, isInView){
	  if(isInView) {
        $('.sub-solution5').removeClass('out');
      } else {
        
      }
    });

    // FEATURE
    $('.feature-block h4').on('inview', function(event, isInView){
	  if(isInView) {
        $('#feature').removeClass('out');
      } else {
        
      }
    });

    // TECH
    $('.sub-tech1 .tech-action').on('inview', function(event, isInView){
	  if(isInView) {
        $('.sub-tech1').removeClass('out');
      } else {
        
      }
    });
    $('.sub-tech2 .tech-action').on('inview', function(event, isInView){
	  if(isInView) {
        $('.sub-tech2').removeClass('out');
      } else {
        
      }
    });
    $('.sub-tech3 .tech-action').on('inview', function(event, isInView){
	  if(isInView) {
        $('.sub-tech3').removeClass('out');
      } else {
        
      }
    });






    // PROCESS
    $('.process-block h4').on('inview', function(event, isInView){
	  if(isInView) {
        $('#process').removeClass('out');
      } else {
        
      }
    });

    // BOOK
    $('.book-action').on('inview', function(event, isInView){
	  if(isInView) {
        $('#book').removeClass('out');
      } else {
        
      }
    });


    init();
    


    
});