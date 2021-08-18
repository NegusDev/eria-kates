$(document).ready(function(){
	  $("#owl-video").owlCarousel({
 
		loop:true,
		autoplay:true ,
		color:true,
		autoplayTimeout:3000,
		dots:false,
		nav:true,
		slideSpeed : 300,
		paginationSpeed : 400,
 
	    responsive:{
			0:{
				items:1
			},
			544:{
				items:2
				},
			768:{
				items:2
				},
			769:{
				items:3
				}
			}
 
  });
 	// AOS
	AOS.init();
});
