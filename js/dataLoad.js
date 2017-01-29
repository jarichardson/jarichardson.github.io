function dataLoad() {
	//mapE.data.loadGeoJson('https://jarichardson.github.io/json/points.json');
	/*
	mapE.data.setStyle({
		fillColor: 'red',
		strokeWeight: 2
	});
	*/
	
//	mapM.data.loadGeoJson('https://localhost/home/jacob-ssder/Science/Professional/website/jarichardson.github.io/json/points.json');
	/*
	mapM.data.setStyle({
		fillColor: 'green',
		strokeWeight: 4
	});
	*/


var iconBase = 'http://maps.google.com/mapfiles/kml/';

var icons = {
  data: {
    icon: new google.maps.MarkerImage(iconBase + 'pal4/icon13.png',
                new google.maps.Size(30, 30),
                new google.maps.Point(0, 0),
                new google.maps.Point(15, 15))
  },
  paper: {
    icon: new google.maps.MarkerImage(iconBase + 'pal4/icon0.png',
                new google.maps.Size(30, 30),
                new google.maps.Point(0, 0),
                new google.maps.Point(15, 15))
  },
  conference: {
    icon: new google.maps.MarkerImage(iconBase + 'pal2/icon6.png',
                new google.maps.Size(30, 30),
                new google.maps.Point(0, 0),
                new google.maps.Point(15, 15))
  }
};

function addMarker(feature) {
  var marker = new google.maps.Marker({
    position: feature.position,
		icon: icons[feature.type].icon,
    map: mapE
  });
}

var features = [
  {
  	//Tolbachik Paper
    position: new google.maps.LatLng(55.7918, 160.3290),
    type: 'paper'
  }, {
  	//Tolbachik Data
    position: new google.maps.LatLng( 55.7885, 160.2136),
    type: 'data',
    title: 'Tolbachik Data'
  }, {
  	//Iceland AGU 2016
    position: new google.maps.LatLng(64.9331, -16.5990),
    type: 'conference'
  }, {
  	//Iceland LiDAR Data
    position: new google.maps.LatLng(64.9064, -16.7796),
    type: 'data'
  }, {
  	//Earthquake paper
    position: new google.maps.LatLng(10.1446, -85.4530),
    type: 'paper'
  }, {
  	//San Raf Data
  	position: new google.maps.LatLng(38.7455, -111.0718),
  	type: 'data'
  }, {
  	//San Raf Paper
  	position: new google.maps.LatLng(38.6083, -111.1597),
  	type: 'paper'
  }, {
  	//nevado del ruiz abstract
  	position: new google.maps.LatLng(4.8920, -75.3188),
  	type: 'conference'
  }
];

for (var i = 0, feature; feature = features[i]; i++) {
  addMarker(feature);
}
 
      
}
