$(document).ready(function(){
	$('.js-mb-menu-btn').on('click', function(){
		console.log('btn clicked');
		$('.js-mb-menu, .js-mb-filter').addClass('is-show');
		$('body').addClass('no-scroll');
	});
	$('.js-mb-filter, .js-mb-menu-close').on('click', function(){
		console.log("close navbar");
		$('.js-mb-menu, .js-mb-filter').removeClass('is-show');
		$('body').removeClass('no-scroll');
	});
  $('.js-dropdown-toggle').on('click', function(){
    $(this).siblings('.js-dropdown-menu').slideToggle();
	});

	appendSlider('product', {
		loop: true,
		nav: true,
		dots: false,
		margin: 20,
		autoplay: true,
		autoplayHoverPause: true,
		autoplayTimeout: 3000,
		smartSpeed: 800,
		responsive: {
			0: {
				items: 1
			},
			575: {
				items: 2
			},
			768: {
				items: 3
			},
			992: {
				items: 4
			},
			1200: {
				items: 5
			}
		}
	});

	numberInput('.js-number-value');
	$('.js-number-btn').on('click', function(){
		var plus = $(this).data('plus');
		var input = $(this).siblings('.js-number-value');
		var value = input.val();
		var newValue = parseInt(value) + plus;
		if (newValue > 0) {
			input.val(newValue);
		}
	});

	// move top button
	$(window).on('scroll', function(){
		if ($(this).scrollTop() > 250) {
			$('.js-btn-movetop').fadeIn();
		} else {
			$('.js-btn-movetop').fadeOut();
		}
	})
	$('.js-btn-movetop').on("click", function(){
		$('html, body').animate({
			scrollTop: 0
		}, 800);
	});
});

$.ripple(".btn, .js-ripple", {
	debug: false, // Turn Ripple.js logging on/off
	on: 'mousedown', // The event to trigger a ripple effect

	opacity: 0.25, // The opacity of the ripple
	color: "auto", // Set the background color. If set to "auto", it will use the text color
	multi: false, // Allow multiple ripples per element

	duration: 0.7, // The duration of the ripple

	// Filter function for modifying the speed of the ripple
	rate: function(pxPerSecond) {
        return pxPerSecond;
    },

	easing: 'linear' // The CSS3 easing function of the ripple
});

function appendSlider(sliderName='', option={}) {
	var slider = $('.js-'+sliderName+'-slider');
	if (slider.length) {
		slider.owlCarousel(option);
		$('.js-'+sliderName+'-slider-prev').on('click', function(){
			$(this).siblings('.js-'+sliderName+'-slider').trigger('prev.owl');
		});
		$('.js-'+sliderName+'-slider-next').on('click', function(){
			$(this).siblings('.js-'+sliderName+'-slider').trigger('next.owl');
		});
	}
};

function numberInput(className) {
	var input = $(className);
	input.keydown(function (e) {
		if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
			(e.keyCode == 65 && (e.ctrlKey === true || e.metaKey === true)) ||
			(e.keyCode == 67 && (e.ctrlKey === true || e.metaKey === true)) ||
			(e.keyCode == 88 && (e.ctrlKey === true || e.metaKey === true)) ||
			(e.keyCode >= 35 && e.keyCode <= 39)) {
				return;
		}
		if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
			e.preventDefault();
		}
	});
};
