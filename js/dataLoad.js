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
  }, /* {
    position: new google.maps.LatLng(-33.91725, 151.23011),
    type: 'data'
  }, {
    position: new google.maps.LatLng(-33.91872, 151.23089),
    type: 'data'
  }, {
    position: new google.maps.LatLng(-33.91784, 151.23094),
    type: 'data'
  }, {
    position: new google.maps.LatLng(-33.91682, 151.23149),
    type: 'data'
  }, {
    position: new google.maps.LatLng(-33.91790, 151.23463),
    type: 'data'
  }, {
    position: new google.maps.LatLng(-33.91666, 151.23468),
    type: 'data'
  }, {
    position: new google.maps.LatLng(-33.916988, 151.233640),
    type: 'data'
  }, {
    position: new google.maps.LatLng(-33.91662347903106, 151.22879464019775),
    type: 'conference'
  }, {
    position: new google.maps.LatLng(-33.916365282092855, 151.22937399734496),
    type: 'conference'
  }, {
    position: new google.maps.LatLng(-33.91665018901448, 151.2282474695587),
    type: 'conference'
  }, {
    position: new google.maps.LatLng(-33.919543720969806, 151.23112279762267),
    type: 'conference'
  }, {
    position: new google.maps.LatLng(-33.91608037421864, 151.23288232673644),
    type: 'conference'
  }, {
    position: new google.maps.LatLng(-33.91851096391805, 151.2344058214569),
    type: 'conference'
  }, {
    position: new google.maps.LatLng(-33.91818154739766, 151.2346203981781),
    type: 'conference'
  }, {
    position: new google.maps.LatLng(-33.91727341958453, 151.23348314155578),
    type: 'paper'
  }*/
];

for (var i = 0, feature; feature = features[i]; i++) {
  addMarker(feature);
}
 
      
}
