var Xclose = document.getElementById("modelClose");
if(Xclose.addEventListener) {
Xclose.addEventListener("click", hideModel);
} else { 
Xclose.attachEvent("onclick", hideModel);
}

//document.getElementById("modelClose").addEventListener("click", hideModel);

var element = document.getElementById("modelWrapper");
if(element.addEventListener) {
element.addEventListener("click", hideModel);
} else { 
element.attachEvent("onclick", hideModel);
}

function hideModel() {
			var x = document.getElementById("PrintLB");
			var noRedirect = '.LBcontent-div, .printPics, .printblog, .LBimg, .LBa, .LBp';
			if (!event.target.matches(noRedirect)) {
			//if (event.target.id !== "Print-Ina") {
				x.style.display = "none";
			}
		}
		function showModel(mod) { 
			var x = document.getElementById("PrintLB");
			switch(mod) {
				case 'TL':
					document.getElementById("modelDownload").href="https://github.com/jarichardson/jarichardson.github.io/raw/master/stls/apollo17.stl";
					document.getElementById("modelPic").src="images/3Dmodels/pic_taurus_littrow.jpg";
					document.getElementById("modelTitle").innerHTML = 'Taurus-Littrow Valley';
					document.getElementById("modelAbout").innerHTML = '<p class="LBp">I’ve printed multiple Taurus Littrow Valley models, including a small and large one printed horizontally and vertically (similar to Ina D). I used a DEM made custom by Ernie Wright to make a 3x Vertical Exaggeration Model. </p><p class="LBp">The model with astronaut figurines was printed horizontally with dark gray PLA filament. The “contour lines” from the print are apparent. This picture is after “fuzzies” were removed and some of the pulled filament can still be seen as little hairs or bumps on the print.</p>';
					document.getElementById("STLViewer").innerHTML = '<iframe height="500" width="500" frameborder="0" src="https://render.githubusercontent.com/view/3d?url=https://raw.githubusercontent.com/jarichardson/jarichardson.github.io/master/stls/apollo17.stl" title="apollo17.stl"></iframe>';
				break;
				
				case 'Ina':
					document.getElementById("modelDownload").href="https://github.com/jarichardson/jarichardson.github.io/raw/master/stls/InaD-5ve.stl";
					document.getElementById("modelPic").src="images/3Dmodels/pic_inaD.jpg";
					document.getElementById("modelTitle").innerHTML = 'Ina D';
					document.getElementById("modelAbout").innerHTML = '<p class="LBp">Ina D is the largest of the Irregular Mare Patches on the Moon and it is famously difficult to see in orthographic photos because the high-standing blobs of material look like they are depressions.</p><p class="LBp">I used a NAC DTM to make a 5x vertical exaggeration model of Ina D. Meshlab converted the resulting OBJ file to an STL for MatterControl to print. This model was printed vertically on a raft with east facing down.</p>';
					document.getElementById("STLViewer").innerHTML = '<iframe height="500" width="500" frameborder="0" src="https://render.githubusercontent.com/view/3d?url=https://raw.githubusercontent.com/jarichardson/jarichardson.github.io/master/stls/InaD-5ve.stl" title="InaD-5ve.stl"></iframe>';
				break;
				
			}
			
			x.style.display = "block";
		}
