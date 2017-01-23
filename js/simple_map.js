var map;
function initMaper() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 39, lng: -75},
		zoom: 2
	});
	
	
	
	map.data.loadGeoJson('json/google.json');
	
	map.data.setStyle({
		fillColor: 'red',
		strokeWeight: 2
	});
}


