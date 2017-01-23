function dataLoad() {
	mapE.data.loadGeoJson('https://jarichardson.github.io/json/google.json');
	
	mapE.data.setStyle({
		fillColor: 'red',
		strokeWeight: 2
	});
	
	
	mapM.data.loadGeoJson('https://localhost/home/jacob-ssder/Science/Professional/website/jarichardson.github.io/json/google.json');
	
	mapM.data.setStyle({
		fillColor: 'green',
		strokeWeight: 4
	});
}
