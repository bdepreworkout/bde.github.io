$(document).ready(function(){


	$("#portfolio-contant-active").mixItUp();


	$("#testimonial-slider").owlCarousel({
	    paginationSpeed : 500,
	    singleItem:true,
	    autoPlay: 3000,
	});


	$("#clients-logo").owlCarousel({
		autoPlay: 3000,
		items : 5,
		itemsDesktop : [1199,5],
		itemsDesktopSmall : [979,5],
	});

	$("#works-logo").owlCarousel({
		autoPlay: 3000,
		items : 5,
		itemsDesktop : [1199,5],
		itemsDesktopSmall : [979,5],
	});


	// google map
		var map;
		function initMap() {
		  map = new google.maps.Map(document.getElementById('map'), {
		    center: {lat: -34.397, lng: 150.644},
		    zoom: 8
		  });
		}


	// Counter
	$('.counter').counterUp({
        delay: 10,
        time: 1000
	});
	


	// $('#files').parse({
	// 	config: {
	// 		delimiter: "",
	// 		complete: displayHTMLTable,
	// 	},
	// 	before: function(file, inputElem)
	// 	{
	// 		//console.log("Parsing file...", file);
	// 	},
	// 	error: function(err, file)
	// 	{
	// 		//console.log("ERROR:", err, file);
	// 	},
	// 	complete: function()
	// 	{
	// 		//console.log("Done with all files");
	// 	}
	// });

});
