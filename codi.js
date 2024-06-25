//Canviar icones
//Agrupació llocs visitats
//Panell lateral


const options = {
	enableHighAccuracy: true,
	timeout: 5000,
	maximumAge: 0,
};

function success(pos) {
	const crd = pos.coords;

	L.marker([crd.latitude, crd.longitude], {
		icon: new L.Icon({
			iconUrl: './img/point.png',
			shadowUrl: '',
			iconSize: [29, 29],
			iconAnchor: [24, 40],
			popupAnchor: [-10, -34],
			shadowSize: [29, 29]
		})
	})
	.bindTooltip(location.name)
	.bindPopup(location.name)
	.addTo(map);

	map.setView([crd.latitude, crd.longitude], 15);
}

function error(err) {
	console.warn(`ERROR(${err.code}): ${err.message}`);
}

//Geolocation
//navigator.geolocation.getCurrentPosition(success, error, options);

//LAYERS
var layer_osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png');
var layer_satellite = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}');
var layer_light = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png');

//MAPA
var map = L.map('map', {
	maxBounds: L.latLngBounds(L.latLng(-90, -180), L.latLng(90, 180)),
	worldCopyJump: true,
	noWrap: true,
	layers: [layer_osm]
})
.setView([42.0201463, 2.5149485], 12);

var zoneLayer;

//Polygons regions
if (GeoJson != undefined) {
	L.geoJSON(GeoJson, {
		style: function (feature) {
			return {
				weight: 4,
				opacity: 1,
				fillOpacity: 0
			};
		},
		onEachFeature: onEachFeature,
	})
	.addTo(map);
}

function handleMarkerHover(e) {
	//var marker = e.target;
	//var zone = marker.options.zone;
}

function handleMarkerOut(e) {
	/*if (zoneLayer != undefined) {
		map.removeLayer(zoneLayer);
	}*/
}

// Add the event listeners to each feature (province/state)
function onEachFeature(feature, layer) {
	if (
		feature.properties.nom_comar == "Gironès" ||
		feature.properties.nom_comar == "Selva" ||
		feature.properties.nom_comar == "Alt Empordà" ||
		feature.properties.nom_comar == "Baix Empordà" ||
		feature.properties.nom_comar == "Pla de l'Estany" ||
		feature.properties.nom_comar == "Garrotxa" ||
		feature.properties.nom_comar == "Ripollès" ||
		feature.properties.nom_comar == "Puigcerdà"
	) {
		layer.setStyle({
			weight: 4,
			opacity: 1,
			fillOpacity: 0,
			color: "#ffd966",
		});
	}
	else {
		layer.setStyle({
			weight: 4,
			opacity: 1,
			fillOpacity: 0,
			color: "#9fc5e8",
		});
	}
}

//===========================================================================================
map.setMaxBounds(
	[
		[
            43.072930069455225,
            4.0842969746326787,
          ],
          [
			  43.0917230990579,
            0.06395199615073466,
          ],
          [
			  40.501140508891666,
            0.043199179604698656,
          ],
          [
			  40.48896601772529,
            3.5670096660089143,
          ],
          [
			  43.07394216872578,
            4.0820092606887783,
          ]
	]
);
map.setView([42.0201463, 2.5149485], 10);
map.setMinZoom(9);


//groups
const parroquiesGroup = L.layerGroup();
const esglesiesGroup = L.layerGroup();
const cementirisGroup = L.layerGroup();
const altresGroup = L.layerGroup();
const visitedGroup = L.layerGroup();
const debugGroup = L.layerGroup();

locations.map(location => {
	let zindex = 1;
	let size = [20, 20];
	let anchor = [10, 20];
	let popup = [0, 0];

	if (location.type == "desconegut") {
		anchor = [9, 22]
		size = [17, 22];
		popup = [0, -25];
	}
	else if (location.type == "esglesia" || location.type == "parroquia") {
		size = [22, 22];
		popup = [-3, -25];
	}
	else if (location.type == "cementiri") {
		anchor = [10, 25];
		size = [22, 22];
		popup = [2, -30];
	}

	// importància i mida
	if (location.zindex != undefined) {
		zindex = location.zindex;
	}
	if (location.size != undefined) {
		size = location.size;
	}
	if (location.anchor != undefined) {
		anchor = location.anchor;
	}

	//icona custom
	let icona = new L.Icon({
		iconUrl: `./img/${location.type}.png`,
		shadowUrl: '',
		iconSize: size,
		iconAnchor: anchor,
		popupAnchor: popup,
		tooltipAnchor: [10, -15],
		shadowSize: size
	});

	let marker = L.marker(location.coordinates, {
		icon: icona,
		zone: location.zone
	});
	
	marker.on('mouseover', handleMarkerHover);
	marker.on('mouseout', handleMarkerOut);
	
	//pc only 
	if (true) {
		marker.bindTooltip(location.name);
	}
	
	if (location.description != undefined) {
		marker.bindPopup(location.description?.join(""));
	}
	
	marker.setZIndexOffset(zindex)
	
	let debug_marker = L.marker(location.coordinates, {zone: location.zone});
	debug_marker.bindPopup(location.name);
	debug_marker.on('mouseover', handleMarkerHover);
	debug_marker.on('mouseout', handleMarkerOut);
	
	if (location.type === 'esglesia') {
		marker.addTo(esglesiesGroup);
	} 
	else if (location.type === 'parroquia') {
		marker.addTo(parroquiesGroup);
	}
	else if (location.type === 'cementiri') {
		marker.addTo(cementirisGroup);
	}
	else {
		if (location.type === 'area') {
			L.circle(location.coordinates, {
				color: 'transparent',
				fillColor: '#ffe08c',
				fillOpacity: 0.5,
				radius: location.radi
			})
			.addTo(altresGroup);
		}
		else {
			marker.addTo(altresGroup);
		}
	}

	if (location.visited) {
		marker.addTo(visitedGroup);
	}

	debug_marker.addTo(debugGroup);
})


// Add layer groups to the map
esglesiesGroup.addTo(map);
parroquiesGroup.addTo(map);
cementirisGroup.addTo(map);
altresGroup.addTo(map);
//visitedGroup.addTo(map);

//debugGroup.addTo(map);


const esglesisCheckbox = document.getElementById("esglesies_input");
esglesisCheckbox.addEventListener("change", function() {
	if (this.checked) {
		esglesiesGroup.addTo(map);
	}
	else {
		map.removeLayer(esglesiesGroup);
	}
});

const parroquiesCheckbox = document.getElementById("parroquies_input");
parroquiesCheckbox.addEventListener("change", function() {
	if (this.checked) {
		parroquiesGroup.addTo(map);
	}
	else {
		map.removeLayer(parroquiesGroup);
	}
});

const cementirisCheckbox = document.getElementById("cementiris_input");
cementirisCheckbox.addEventListener("change", function() {
	if (this.checked) {
		cementirisGroup.addTo(map);
	}
	else {
		map.removeLayer(cementirisGroup);
	}
});

const altresCheckbox = document.getElementById("altres_input");
altresCheckbox.addEventListener("change", function() {
	if (this.checked) {
		altresGroup.addTo(map);
	}
	else {
		map.removeLayer(altresGroup);
	}
});

//Filtre per ubicacions visitades
const visitatCheckbox = document.getElementById("visitat_input");
visitatCheckbox.addEventListener("change", function() {
	if (this.checked) {
		map.removeLayer(esglesiesGroup);
		map.removeLayer(parroquiesGroup);
		map.removeLayer(cementirisGroup);
		map.removeLayer(altresGroup);

		visitedGroup.addTo(map);
	}
	else {
		map.removeLayer(visitedGroup);

		if (esglesisCheckbox.checked) {
			esglesiesGroup.addTo(map);
		}
		if (parroquiesCheckbox.checked) {
			parroquiesGroup.addTo(map);
		}
		if (cementirisCheckbox.checked) {
			cementirisGroup.addTo(map);
		}
		if (altresCheckbox.checked) {
			altresGroup.addTo(map);
		}
	}
});