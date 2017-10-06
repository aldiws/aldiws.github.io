// // // event pada saat link dklik




// (function($) {
//     "use strict"; // Start of use strict


//     $('.page-scroll').on('click', function(e){

// 	// ambil isi href
// 	var tujuan = $(this).attr('href');

// 	// tangkap elemen ybs
// 	var elemenTujuan = $(tujuan);

// 	// pindahkan scroll
	 
// 	$('body').stop().animate({
// 		scrollTop: elemenTujuan.offset().top - 50

// 	},1250, 'easeInOutExpo');
// 	// event pada saat link dklik
	
// 	e.preventDefault();


// }); 


//     // Highlight the top nav as scrolling occurs
//     $('body').scrollspy({
//         target: '.navbar-fixed-top',
//         offset: 51
//     });

//     // Closes the Responsive Menu on Menu Item Click
//     $('.navbar-collapse ul li a').click(function(){ 
//             $('.navbar-toggle:visible').click();
//     });

//     // Offset for Main Navigation
//     $('#mainNav').affix({
//         offset: {
//             top: 100
//         }
//     })

//     // Floating label headings for the contact form
//     $(function() {
//         $("body").on("input propertychange", ".floating-label-form-group", function(e) {
//             $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
//         }).on("focus", ".floating-label-form-group", function() {
//             $(this).addClass("floating-label-form-group-with-focus");
//         }).on("blur", ".floating-label-form-group", function() {
//             $(this).removeClass("floating-label-form-group-with-focus");
//         });
//     });

// })(jQuery); // End of use strict
