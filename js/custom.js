$(document).ready(function(){
	
	/* Initialize FancyBox for product images */
	$('.fancybox').fancybox({
		openEffect  : 'none',
		closeEffect : 'none',
		prevEffect : 'none',
		nextEffect : 'none',
		closeBtn  : false,
		helpers : {
			title : {
				type : 'inside'
			},
			buttons	: {}
		},
		afterLoad : function() {
			this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '');
		}
	});

	/* Initialize BX Slider for hero section */
	$('.slider').bxSlider({
		mode: 'horizontal',
		auto: true,
		pause: 4000,
		pager: true,
		controls: true,
		autoControls: false,
		stopAutoOnClick: true
	});

	/* Mobile Menu Toggle */
	$('.mobile-menu-btn').on('click', function() {
		$('nav ul').slideToggle();
		$(this).find('span').toggleClass('active');
	});

	/* Search Bar mobile */
	$(window).on('resize', function() {
		if ($(window).width() > 768) {
			$('nav ul').show();
		}
	});

	/* Cart Quantity Controls */
	$('.prev').on("click", function(){
		var prev = $(this).closest('.qty').find("input").val();
		if (prev == 1) {
			$(this).closest('.qty').find("input").val('1');
		}else{
			var prevVal = prev - 1;
			$(this).closest('.qty').find("input").val(prevVal);
		}  		
	});
	
	$('.next').on("click", function(){
		var next = $(this).closest('.qty').find("input").val();
		if (next == 10) {
			$(this).closest('.qty').find("input").val('10');
		}else{
			var nextVal = ++next;
			$(this).closest('.qty').find("input").val(nextVal);
		}  		
	});

	/* Form Interactions - Shipping Method Toggle */
	$('input[type="radio"][name="payment"]').change(function(){
		if ($(this).val() == 'easypaisa') {
			$('#easypaisaText').css('display', 'block');
		} else {
			$('#easypaisaText').css('display', 'none');
		}
	});

	/* Smooth Scroll for anchor links */
	$('a[href*="#"]:not([href="#"]') {
		$(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					$('html, body').animate({
						scrollTop: target.offset().top - 20
					}, 500);
					return false;
				}
			}
		});
	}

	/* Add to Cart button animation */
	$('.product-detail a:contains("Add to Cart")').on('click', function(e) {
		e.preventDefault();
		$(this).text('Added!').css('background', '#4CAF50').css('color', 'white');
		setTimeout(function() {
			$(this).text('Add to Cart').css('background', '').css('color', '');
		}.bind(this), 2000);
	});

	/* Contact Form Submission */
	$('#contact').on('click', function(e) {
		e.preventDefault();
		var fname = $('#fname').val();
		var email = $('#email').val();
		var message = $('#message').val();
		if (fname && email && message) {
			alert('Thank you for contacting us! We will get back to you soon.');
			$('#contact-form')[0].reset();
		} else {
			alert('Please fill in all fields.');
		}
	});

	/* Newsletter Subscription */
	$('#subscribe-form').on('submit', function(e) {
		e.preventDefault();
		var email = $('#subscribe').val();
		if (email) {
			alert('Thanks for subscribing!');
			$(this)[0].reset();
		}
	});

	/* Initialize ToolTips */
	$('[data-toggle="tooltip"]').tooltip();

	/* Add to Cart form submit */
	$('#cart-form').on('submit', function(e) {
		e.preventDefault();
		var qty = $('input[name="cartNumber"]').val();
		var productName = $(this).closest('.product-detail').prev('h3').text() || 'Product';
		alert('Added ' + productName + ' x' + qty + ' to cart!');
	});

});