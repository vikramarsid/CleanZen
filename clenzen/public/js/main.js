"use strict";

function pieChart() {
	//circle progress bar
	if ((jQuery().easyPieChart) && (jQuery.support.leadingWhitespace)) {
		var count = 0 ;
		var colors = ['#4D91BA', '#5FCCA3', '#FFBB19'];
		jQuery('.chart').each(function(){
				
			var imagePos = jQuery(this).offset().top;
			var topOfWindow = jQuery(window).scrollTop();
			if (imagePos < topOfWindow+900) {

				jQuery(this).easyPieChart({
			        barColor: colors[count],
					trackColor: '#e4e4e4',
					scaleColor: false,
					scaleLength: false,
					lineCap: 'butt',
					lineWidth: 4,
					size: 180,
					rotate: 0,
					animate: 3000,
					onStep: function(from, to, percent) {
							jQuery(this.el).find('.percent').text(Math.round(percent));
						}
			    });
			}
			count++;
			if (count >= colors.length) { count = 0};
		});
	}
}


jQuery(document).ready(function() {
	///////////
	//Plugins//
	///////////
    //contact form processing
    jQuery('form.contact-form').on('submit', function( e ){
        e.preventDefault();
        var $form = jQuery(this);
        jQuery($form).find('span.contact-form-respond').remove();
        //checking on empty values
        var formFields = $form.serializeArray();
        for (var i = formFields.length - 1; i >= 0; i--) {
        	if (!formFields[i].value.length) {
        		$form.find('[name="' + formFields[i].name + '"]').addClass('invalid').on('focus', function(){jQuery(this).removeClass('invalid')});
        	};
        };
        //if one of form fields is empty - exit
        if ($form.find('[name]').hasClass('invalid')) {
        	return;
        };
        //sending form data to PHP server if fields are not empty
        var request = $form.serialize();
        var ajax = jQuery.post( "contact-form.php", request )
            .done(function( data ) {
                jQuery($form).find('[type="submit"]').attr('disabled', false).parent().append('<span class="contact-form-respond highlight">'+data+'</span>');
        })
            .fail(function( data ) {
                jQuery($form).find('[type="submit"]').attr('disabled', false).parent().append('<span class="contact-form-respond highlight">Mail sent. You will be contacted soon.</span>');
        })
    });
    
    //mailchimp subscribe form processing
    jQuery('#signup').on('submit', function( e ) {
        e.preventDefault();
        // update user interface
        jQuery('#response').html('Adding email address...');
        // Prepare query string and send AJAX request
        jQuery.ajax({
            url: 'mailchimp/store-address.php',
            data: 'ajax=true&email=' + escape(jQuery('#mailchimp_email').val()),
            success: function(msg) {
                jQuery('#response').html(msg);
            }
        });
    });
	
	//twitter
	//slide tweets
	jQuery('#tweets .twitter').bind('loaded', function(){
		jQuery(this).addClass('flexslider').find('ul').addClass('slides');
	});
	if (jQuery().tweet) {
		jQuery('.twitter').tweet({
			modpath: "./twitter/",
		    count: 3,
		    avatar_size: 48,
		    loading_text: 'loading twitter feed...',
		    join_text: 'auto',
		    username: 'vikramarsid', 
		    template: "{avatar}<div class=\"tweet_right\">{time}{join}<span class=\"tweet_text\">{tweet_text}</span></div>"
		});
	}


	//mainmenu
	if (jQuery().superfish) {
		jQuery('ul.sf-menu').superfish({
			delay:       300,
			animation:   {opacity:'show'},
			animationOut: {opacity: 'hide'},
			speed:       'fast',
			disableHI:   false,
			cssArrows:   true,
			autoArrows:  true
		});
	}
	jQuery('#toggle_mobile_menu, #mainmenu a').on('click', function(){
		jQuery('#header').toggleClass('mobile-active');
	});

	//top (header) search
	jQuery('#toggle_search').on('click', function() {
		jQuery(this).toggleClass('active');
		if (jQuery(this).hasClass('active')) {
			jQuery('#header .widget_search').animate({
				height: '100%'
			}, 500);
		} else {
			jQuery('#header .widget_search').animate({
				height: 0
			}, 300);
		}
	});
 
	//toTop
	if (jQuery().UItoTop) {
        jQuery().UItoTop({ easingType: 'easeOutQuart' });
    }

	//parallax
	if (jQuery().parallax) {
		jQuery('#progress').parallax("50%", 0.4);
		jQuery('#skills').parallax("50%", 0.3);
	}

    //prettyPhoto
    if (jQuery().prettyPhoto) {
	   	jQuery("a[data-gal^='prettyPhoto']").prettyPhoto({
	   		hook: 'data-gal',
			theme: 'facebook' /* light_rounded / dark_rounded / light_square / dark_square / facebook / pp_default*/
	  	});
	}

   	//tooltip
   	if (jQuery().tooltip) {
		jQuery('[data-toggle="tooltip"]').tooltip();
	}

   	//carousel
   	if (jQuery().carousel) {
		jQuery('.carousel').carousel();
	}

	//owl carousel
	if (jQuery().owlCarousel) {
		jQuery("#related-event-items-carousel").owlCarousel({
	    	navigation : true,
	    	// navigationText : true,
	    	pagination : false,
	    	items: 3,
	    	itemsDesktop: [1199,3],
	    	itemsDesktopSmall: [979,2],
	    	itemsTablet: [768,1],
	    	itemsMobile: [479,1]

	    });
		
		jQuery("#partners-carousel").owlCarousel({
	    	navigation : true,
	    	// navigationText : true,
	    	pagination : false,
	    	items: 3,
	    	itemsDesktop: [1199,3],
	    	itemsDesktopSmall: [979,2],
	    	itemsTablet: [768,1],
	    	itemsMobile: [479,1]

	    });

	    jQuery("#related-products-carousel").owlCarousel({
	    	navigation : true,
	    	// navigationText : true,
	    	pagination : false,
	    	items: 3,
	    	itemsDesktop: [1199,3],
	    	itemsDesktopSmall: [979,2],
	    	itemsTablet: [768,1],
	    	itemsMobile: [479,1]

	    });
	    jQuery(".owl-carousel").owlCarousel({
	    	navigation : true,
	    	// navigationText : true,
	    	pagination : false,
	    	// items: 4,

	    });

	}
    
    //nice scroll
	// if (jQuery().niceScroll) {
	// 	jQuery("html").niceScroll({
	// 		cursorcolor: '#fbd81a',
	// 		cursorborder: 'none',
	// 		cursorborderradius: '0',
	// 		cursorwidth: '8px'
	// 	});
	// }


	//single page localscroll and scrollspy
	var navHeight = jQuery('#header').outerHeight(true);
	jQuery('body').scrollspy({
		target: '#mainmenu_wrapper',
		offset: navHeight
	});
	if (jQuery().localScroll) {
		jQuery('#mainmenu, #land, #mainslider').localScroll({
			duration:900,
			easing:'easeInOutQuart',
			offset: -navHeight+10
		});
		
	}
	/////////
	//shop///
	/////////
	jQuery('#toggle_shop_view').on('click', function( e ) {
		e.preventDefault();
		jQuery(this).toggleClass('grid');
		jQuery('#product_listing').toggleClass('list');
	});
	//zoom image
	if (jQuery().elevateZoom) {
		jQuery('#product-image').elevateZoom({
			gallery: 'product-image-gallery',
			cursor: 'pointer', 
			galleryActiveClass: 'active', 
			responsive:true, 
			loadingIcon: 'img/AjaxLoader.gif'
		});
	}
	//add review button
	jQuery('#add_review a').on('click', function( e ) {
		jQuery('#product-tabs a[href="#product-reviews"]').tab('show');
	});
	//product counter
	jQuery('.plus, .minus').on('click', function( e ) {
		var numberField = jQuery(this).parent().find('[type="number"]');
		var currentVal = numberField.val();
		var sign = jQuery(this).val();
		if (sign === '-') {
			if (currentVal > 1) {
				numberField.val(parseFloat(currentVal) - 1);
			}
		} else {
			numberField.val(parseFloat(currentVal) + 1);
		}
	});
	//remove product from cart
	jQuery('a.remove').on('click', function( e ) {
		e.preventDefault();
		jQuery(this).closest('tr').remove();
	});

	//comingsoon counter
	if (jQuery().countdown) {
		jQuery('#countdown').countdown({until: new Date(2015, 5-1, 15)});
	};


});


jQuery(window).load(function(){
	
	//chart
	pieChart();

	// setTimeout(function(){
	// 	jQuery('.progress-bar').addClass('stretchRight');
	// }, 600);

	//bxslider 
	if (jQuery().bxSlider) {
		//homepage slider
		jQuery('#land .bxslider').bxSlider({
			adaptiveHeight: true,
			auto: true,
			mode: 'vertical',
			slideMargin: 0
		});
		//regular slider
		// jQuery('.bxslider').bxSlider();
	}
	//fractionslider
	if (jQuery().fractionSlider) {
		var $mainSlider = jQuery('#mainslider');
		jQuery('.slider').fractionSlider({
			'fullWidth': 			true,
			'responsive': 			true,
			'dimensions': 			"1920,550",
		    'increase': 			true,
			'slideEndAnimation': 	false,
			'timeout' : 			3000,
			'slideTransition' :    'none',
			'slideTransitionSpeed' :1000,
			'transitionIn':        'fade',
			'transitionOut':       'fade',
			'controls':             true,
			'pager':                true 

		});
	}

	//flexslider
	if (jQuery().flexslider) {
		//var $mainSlider = jQuery('#mainslider');
		jQuery("#mainslider .flexslider").flexslider({
			animation: "fade",
			useCSS: true,
			controlNav: true,   
			directionNav: false,
		    prevText: "",
		    nextText: "",
			smoothHeight: false,
			slideshowSpeed:8000,
			animationSpeed:300,
			start: function( slider ) {
				slider.find('.slide_description').children().css({'visibility': 'hidden'});
				slider.find('.flex-active-slide .slide_description').children().each(function(index){
				var self = jQuery(this);
				var animationClass = !self.data('animation') ? 'fadeInRight' : self.data('animation');
				setTimeout(function(){
						self.addClass("animated "+animationClass);
					}, index*200);
				});
			},
			after :function( slider ){
				slider.find('.flex-active-slide .slide_description').children().each(function(index){
				var self = jQuery(this);
				var animationClass = !self.data('animation') ? 'fadeInRight' : self.data('animation');
				setTimeout(function(){
						self.addClass("animated "+animationClass);
					}, index*200);
				});
			},
			end :function( slider ){
				slider.find('.slide_description').children().each(function() {
					jQuery(this).attr('class', '');
				});
			}
		});

		jQuery(".flexslider").flexslider({
			animation: "fade",
			useCSS: true,
			controlNav: true,   
			directionNav: false,
		    prevText: "",
		    nextText: "",
			//animationLoop: false,
			smoothHeight: true,
			slideshowSpeed:5000,
			animationSpeed:800,
			after :function( slider ){
				//console.log(slider.find('.slide_description').children());
			  	//bg-color1 - class for #mainslider
			  	//var currentClass = $mainSlider.find('.flex-active-slide').attr('data-bg');
			  	//$mainSlider.attr('class', currentClass);
			}
		});
	}


	//stick header to top
	var affixHeader = jQuery('#header');
	var headerOffset = jQuery('#topline').outerHeight(true);
	jQuery(affixHeader).affix({
		offset: {
			top: headerOffset,
			bottom: 0
		}
	});
	//animating header
	// jQuery(affixHeader).on('affix.bs.affix', function () {
	// 	if (jQuery(this).hasClass('animating')) {
	// 		return;
	// 	} else {
	// 		jQuery(this).toggleClass('animating').animate({opacity:0, top: -jQuery(this).height()}, 10).delay(400).animate({opacity:1, top: 0}, 400).queue(function(){
	// 			jQuery(this).toggleClass('animating');
	// 			jQuery(this).dequeue();
	// 		});
	// 	}
	// });
	// jQuery(affixHeader).on('affix-top.bs.affix', function () {
	// 	if (jQuery(this).hasClass('animating')) {
	// 		return;
	// 	} else {
	// 		jQuery(this).toggleClass('animating').animate({opacity:0}, 10).delay(100).animate({opacity:1}, 500).queue(function(){
	// 			jQuery(this).toggleClass('animating');
	// 			jQuery(this).dequeue();
	// 		});
	// 	}
	// });
	
	//wrap header with div for smooth sticking
	var headerHeight = affixHeader.outerHeight(true);
	affixHeader.wrap('<div id="header_wrapper"></div>').parent().css({height: headerHeight}); //wrap header for smooth stick and unstick
	
	//if header has different height on afixed and affixed-top positions - correcting wrapper height
	jQuery(affixHeader).on('affixed-top.bs.affix', function () {
		affixHeader.parent().css({height: affixHeader.outerHeight(true)});
	});

	//preloader
	jQuery(".preloaderimg").fadeOut();
	jQuery(".preloader").delay(200).fadeOut("slow").delay(200, function(){
		jQuery(this).remove();
	});

	jQuery('body').delay(1000).scrollspy('refresh');


	
	//animation to elements on scroll
	if (jQuery().appear) {
		// jQuery('.to_animate').appear().css({opacity: 0});
		jQuery('.to_animate').appear().css({'visibility': 'hidden'});
		jQuery('.to_animate').filter(':appeared').each(function(index){
			var self = jQuery(this);
			var animationClass = !self.data('animation') ? 'fadeInUp' : self.data('animation');
			var animationDelay = !self.data('delay') ? 270 : self.data('delay');
			setTimeout(function(){
				self.addClass("animated " + animationClass);
			}, index * animationDelay);
		});

		jQuery('body').on('appear', '.to_animate', function(e, $affected ) {
			jQuery($affected).each(function(index){
				var self = jQuery(this);
				var animationClass = !self.data('animation') ? 'fadeInUp' : self.data('animation');
				var animationDelay = !self.data('delay') ? 270 : self.data('delay');
				setTimeout(function(){
					self.addClass("animated " + animationClass);
				}, index * animationDelay);
			});
		});
	}

	//counters init on scroll
	if (jQuery().appear) {
		jQuery('.counter').appear();
		jQuery('.counter').filter(':appeared').each(function(index){
			if (jQuery(this).hasClass('counted')) {
				return;
			} else {
				jQuery(this).countTo().addClass('counted');
			}
		});
		jQuery('body').on('appear', '.counter', function(e, $affected ) {
			jQuery($affected).each(function(index){
				if (jQuery(this).hasClass('counted')) {
					return;
				} else {
					jQuery(this).countTo().addClass('counted');
				}
				
			});
		});
	}


	//flickr
	// use http://idgettr.com/ to find your ID
	if (jQuery().jflickrfeed) {
		jQuery("#flickr").jflickrfeed({
			flickrbase: "http://api.flickr.com/services/feeds/",
			limit: 6,
			qstrings: {
				id: "129661175@N04"
			},
			itemTemplate: '<a href="{{image_b}}" data-gal="prettyPhoto[pp_gal]"><li><img alt="{{title}}" src="{{image_s}}" /></li></a>'
		}, function(data) {
			jQuery("#flickr a").prettyPhoto({
				hook: 'data-gal',
				theme: 'facebook'
	   		});
jQuery("#flickr li").hover(function () {						 
jQuery(this).find("img").stop().animate({ opacity: 0.5 }, 200);
}, function() {
jQuery(this).find("img").stop().animate({ opacity: 1.0 }, 400);
});
});
}

});

jQuery(window).resize(function(){

	jQuery('body').scrollspy('refresh');
	jQuery("#header_wrapper").css({height: jQuery('#header').outerHeight(true)}); //editing header wrapper height for smooth stick and unstick
	
});

jQuery(window).scroll(function() {

	//circle progress bar
	pieChart();


});




//switcher
/////////////////////////////////////////////
//DELETE FOLLOWING CODE TO DISABLE SWITCHER//
/////////////////////////////////////////////
jQuery(window).load(function(){

		var switcherHTML = '<div id="switcher">';
		switcherHTML +=    '<span class="glyphicon glyphicon-cog"></span>';
		switcherHTML +=    '<h6>Colors</h6>';
		switcherHTML +=    '<ul id="switcher-colors" class="list-inline">';
		switcherHTML +=        '<li>';
		switcherHTML +=            '<a href="#" data-color="" class="color1"></a>';
		switcherHTML +=        '</li>';
		switcherHTML +=        '<li>';
		switcherHTML +=            '<a href="#" data-color="2" class="color2"></a>';
		switcherHTML +=        '</li>';
		switcherHTML +=        '<li>';
		switcherHTML +=            '<a href="#" data-color="3" class="color3"></a>';
		switcherHTML +=        '</li>';
		switcherHTML +=    '</ul>';
		switcherHTML +=    '<h6>Layout</h6>';
		switcherHTML +=    '<div class="checkbox">';
		switcherHTML +=        '<label>';
		switcherHTML +=            '<input type="checkbox" id="layout"> Boxed';
		switcherHTML +=        '</label>';
		switcherHTML +=    '</div>';
		switcherHTML +=    '<h6>Boxed Patterns</h6>';
		switcherHTML +=    '<ul id="switcher-patterns" class="list-inline">';
		switcherHTML +=        '<li>';
		switcherHTML +=            '<a href="#" data-pattern="pattern1">';
		switcherHTML +=                '<img src="img/pattern1.png" alt="" width="30" height="30">';
		switcherHTML +=            '</a>';
		switcherHTML +=        '</li>';
		switcherHTML +=        '<li>';
		switcherHTML +=            '<a href="#" data-pattern="pattern2">';
		switcherHTML +=                '<img src="img/pattern2.png" alt="" width="30" height="30">';
		switcherHTML +=            '</a>';
		switcherHTML +=        '</li>';
		switcherHTML +=        '<li>';
		switcherHTML +=            '<a href="#" data-pattern="pattern3">';
		switcherHTML +=                '<img src="img/pattern3.png" alt="" width="30" height="30">';
		switcherHTML +=            '</a>';
		switcherHTML +=        '</li>';
		switcherHTML +=        '<li>';
		switcherHTML +=            '<a href="#" data-pattern="pattern4">';
		switcherHTML +=                '<img src="img/pattern4.png" alt="" width="30" height="30">';
		switcherHTML +=            '</a>';
		switcherHTML +=        '</li>';
		switcherHTML +=    '</ul>';
		switcherHTML +=    '<p>';
		switcherHTML +=        '<a id="remove_pattern" href="#"><i class="glyphicon glyphicon-trash"></i> Remove Pattern</a>';
		switcherHTML +=    '</p>';
		switcherHTML +='</div>';
		

		jQuery('body').append(switcherHTML);

		//switcher toggle
        jQuery('#switcher span').on('click', function(){
            jQuery(this).parent().toggleClass('active');
        });

        //boxed or wide
        jQuery('#layout').on('click', function(){
            jQuery('body').toggleClass('boxed');
            jQuery('#box_wrapper').toggleClass('container');
            jQuery('#isotopeContainer').isotope('reLayout');
            jQuery(window).trigger('resize');
        });

        //pattern switcher
        var patternClasses = [
            'pattern1',
            'pattern2',
            'pattern3',
            'pattern4'
        ];
        jQuery('#switcher-patterns').on('click', 'a', function(e){
            e.preventDefault();
            e.stopPropagation();
            jQuery('body').removeClass(patternClasses.join(' '));
            jQuery('body').addClass(jQuery(this).data('pattern'));
        });
        //deleting pattern
        jQuery('#remove_pattern').on('click', function(e){
            e.preventDefault();
            e.stopPropagation();
            jQuery('body').removeClass(patternClasses.join(' '));
        });

        //color switcher
        jQuery('#switcher-colors a').on('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            var color = jQuery(this).data('color');
            jQuery('#color-switcher-link').attr('href', 'css/main' + color + '.css');
        });

		//version switcher
        jQuery('#switcher-version a').on('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            var version = jQuery(this).attr('class');
            switch(version) {
case 'dark':
jQuery('.light_section').toggleClass('light_section darkgrey_section');
jQuery('.grey_section').toggleClass('grey_section dark_section').addClass('');
jQuery('#footer, #copyright').attr('class', '').addClass('darkgrey_section');
break;
case 'light':
jQuery('.darkgrey_section').toggleClass('darkgrey_section light_section');
jQuery('.dark_section').toggleClass('dark_section grey_section');
jQuery('#footer, #copyright').attr('class', '').addClass('darkgrey_section');
break;
}
});

});