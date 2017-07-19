// https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
// shuffles an array in place

// Declare a namespace for our functions and objects
var ICAN = {};

// subspaces
ICAN.utils = {};
ICAN.map = {};

// ----UTILS----

ICAN.utils.shuffle = function (a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}

// ----END UTILS----

// ----MAP----

// lat, lng pairs
ICAN.map.alumniLocations = [
	[42.36, -71.05],
	[41.87, -87.63],
	[44.38, -68.21],
	[42.37, -72.52],
	[40.79, -77.86],
	[37.87, -122.27],
	[33.7925, -84.3240],
	[34.4208, -119.6982],
	[33.7490, -84.3880],
	[42.3370, -71.2092],
	[42.4440, -76.5019],
	[42.3876, -71.0995],
	[41.3083, -72.9279],
	[25.7617, -80.1918],
	[39.2904, -76.6122],
	[42.2793, -71.4162],
	[39.9526, -75.1652],
	[41.3839, -72.9026],
	[40.7128, -74.0059],
	[41.9584, -70.6673],
	[51.5074, -0.1278],
	[40.1164, -88.2434],
	[42.2626, -71.8023],
	[41.6525, -70.2881],
	[43.0760, -107.2903],
	[42.2808, -83.7430],
	[44.9778, -93.2650],
	[40.7062, -73.6187],
	[19.0000, -70.6],
	[36.1627, -86.7816],
	[29.6197, -95.6349],
	[29.7604, -95.3698],
	[32.7555, -97.330]
]

ICAN.utils.shuffle(ICAN.map.alumniLocations);

// recursive helper function to enable staggered rendering
ICAN.map.addMarker = function (i, markers, map) {
	if (i >= ICAN.map.alumniLocations.length) {
		return;
	}

	var pos = { lat: ICAN.map.alumniLocations[i][0], lng: ICAN.map.alumniLocations[i][1] };
	markers.push(new google.maps.Marker({
		position: pos,
		map: map,
		animation: google.maps.Animation.DROP
	}));

	// set final argument higher for slower rendering
	setTimeout(ICAN.map.addMarker.bind(this, i + 1, markers, map), 20);
}

ICAN.map.addAllMarkers = ICAN.map.addMarker.bind(this, 0);

ICAN.map.initMap = function () {

	// Check whether to render in mobile mode
	var responsive = $('nav').width() < 768;

	// set up the map
	var map = new google.maps.Map(document.getElementById('alumni-map'), {
		center: {lat: 41.24, lng: -53.67},
		scrollwheel: false,
		zoom: responsive ? 2 : 3,
		disableDefaultUI: true
	});

	// keep a reference to the markers, in case we need to mess with them later
	var markers = [];

	// Set up rendering the markers on scroll
	var mapTriggerY = $('#alumni-map').offset().top - $('#alumni-map').height() - 100;

	if (window.scrollY >= mapTriggerY) {
		ICAN.map.addAllMarkers(markers, map);
	} else {
		$(document).scroll(function (event) {
			if (window.scrollY > mapTriggerY) {
				ICAN.map.addAllMarkers(markers, map);
				$(document).off('scroll');
			}
		});
	}
}

// ----END MAP----
