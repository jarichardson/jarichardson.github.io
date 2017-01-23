var map;
function initMapEarth() {
	mapE = new google.maps.Map(document.getElementById('mapEarth'), {
		center: new google.maps.LatLng(39,-75),
		zoom: 5,
		minZoom: 1,
		mapTypeId: 'satellite'
	});
	
	
	
	mapE.data.loadGeoJson('json/google.json');
	
	mapE.data.setStyle({
		fillColor: 'red',
		strokeWeight: 2
	});
}


