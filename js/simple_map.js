var map;
function initMapEarth() {
	mapE = new google.maps.Map(document.getElementById('mapEarth'), {
		center: {lat: 39, lng: -75},
		zoom: 2,
	  minZoom: 1
	});
	
	
	
	mapE.data.loadGeoJson('json/google.json');
	
	mapE.data.setStyle({
		fillColor: 'red',
		strokeWeight: 2
	});
}


