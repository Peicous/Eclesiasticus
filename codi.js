//Carrega asincrona
//Colors de pla terriotiral
//Canviar icones
//Pujar imatges sensibles


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
function getUserLocation() {
	navigator.geolocation.getCurrentPosition(success, error, options);
}

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
var geojson_territori;

const GeoJson = {
	type: "FeatureCollection",
	features:[]
};

//Polygons regions
function instanceGeoJson() {
	let geo_json = GeoJson;
	if (geo_json != undefined) {
		geojson_territori = L.geoJSON(geo_json, {
			style: function (feature) {
				return {
					weight: 4,
					opacity: 1,
					fillOpacity: 0
				};
			},
			onEachFeature: onEachFeature,
		})
	}
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

//===========================================================================================

function onEachFeature(feature, layer) {
	//Comarques gironines
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
			weight: 2,
			opacity: 1,
			fillOpacity: 0.5,
			fillColor: '#F3F373',
			color: "black",
		});
	}
	//Àrea Metropolitana de Barcelona
	else if (
		feature.properties.nom_comar == "Maresme" ||
		feature.properties.nom_comar == "Barcelonès" ||
		feature.properties.nom_comar == "Baix Llobregat" ||
		feature.properties.nom_comar == "Vallès Oriental" ||
		feature.properties.nom_comar == "Vallès Occidental"
	) {
		layer.setStyle({
			weight: 2,
			opacity: 1,
			fillOpacity: 0.5,
			fillColor: '#F37373',
			color: "black",
		});
	}
	//Comarques centrals
	else if (
		feature.properties.nom_comar == "Bages" ||
		feature.properties.nom_comar == "Osona" ||
		feature.properties.nom_comar == "Berguedà" ||
		feature.properties.nom_comar == "Solsonès" ||
		feature.properties.nom_comar == "Moianès" ||
		feature.properties.nom_comar == "Lluçanès"
	) {
		layer.setStyle({
			weight: 2,
			opacity: 1,
			fillOpacity: 0.5,
			fillColor: '#7373F3',
			color: "black",
		});
	}
	//Alt Pirineu i Aran
	else if (
		feature.properties.nom_comar == "Alta Ribagorça" ||
		feature.properties.nom_comar == "Alt Urgell" ||
		feature.properties.nom_comar == "Cerdanya" ||
		feature.properties.nom_comar == "Pallars Sobirà" ||
		feature.properties.nom_comar == "Pallars Jussà" ||
		feature.properties.nom_comar == "Val d'Aran"
	) {
		layer.setStyle({
			weight: 2,
			opacity: 1,
			fillOpacity: 0.5,
			fillColor: '#73F3F3',
			color: "black",
		});
	}
	//Ponent
	else if (
		feature.properties.nom_comar == "Segrià" ||
		feature.properties.nom_comar == "Garrigues" ||
		feature.properties.nom_comar == "Noguera" ||
		feature.properties.nom_comar == "Segarra" ||
		feature.properties.nom_comar == "Urgell" ||
		feature.properties.nom_comar == "Pla d'Urgell"
	) {
		layer.setStyle({
			weight: 2,
			opacity: 1,
			fillOpacity: 0.5,
			fillColor: '#F373F3',
			color: "black",
		});
	}
	//Penedès
	else if (
		feature.properties.nom_comar == "Alt Penedès" ||
		feature.properties.nom_comar == "Baix Penedès" ||
		feature.properties.nom_comar == "Garraf" ||
		feature.properties.nom_comar == "Anoia"
	) {
		layer.setStyle({
			weight: 2,
			opacity: 1,
			fillOpacity: 0.5,
			fillColor: '#FF7F00',
			color: "black",
		});
	}
	//Camp de Tarragona
	else if (
		feature.properties.nom_comar == "Tarragonès" ||
		feature.properties.nom_comar == "Alt Camp" ||
		feature.properties.nom_comar == "Baix Camp" ||
		feature.properties.nom_comar == "Priorat" ||
		feature.properties.nom_comar == "Conca de Barberà"
	) {
		layer.setStyle({
			weight: 2,
			opacity: 1,
			fillOpacity: 0.5,
			fillColor: '#73F373',
			color: "black",
		});
	}
	//Terres de l'Ebre
	else if (
		feature.properties.nom_comar == "Ribera d'Ebre" ||
		feature.properties.nom_comar == "Terra Alta" ||
		feature.properties.nom_comar == "Baix Ebre" ||
		feature.properties.nom_comar == "Montsià"
	) {
		layer.setStyle({
			weight: 2,
			opacity: 1,
			fillOpacity: 0.5,
			fillColor: '#B3B373',
			color: "black",
		});
	}
	else {
		layer.setStyle({
			weight: 2,
			opacity: 1,
			fillOpacity: 0.4,
			color: "black",
		});
	}
}

map.doubleClickZoom.disable(); 
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

function getAllLocations() {
	return [
		...locations, //Versió antiga
		...alt_pirineu_aran_parroquies,
		...alt_pirineu_aran_oratoris,
		...alt_pirineu_aran_monestirs,
		...alt_pirineu_aran_memorials,
		...alt_pirineu_aran_esglesies,
		...alt_pirineu_aran_cementiris,
		...alt_pirineu_aran_altres,
		...area_metropolitana_barcelona_parroquies,
		...area_metropolitana_barcelona_oratoris,
		...area_metropolitana_barcelona_monestirs,
		...area_metropolitana_barcelona_memorials,
		...area_metropolitana_barcelona_esglesies,
		...area_metropolitana_barcelona_cementiris,
		...area_metropolitana_barcelona_altres,
		...comarques_centrals_parroquies,
		...comarques_centrals_oratoris,
		...comarques_centrals_monestirs,
		...comarques_centrals_memorials,
		...comarques_centrals_esglesies,
		...comarques_centrals_cementiris,
		...comarques_centrals_altres,
		...comarques_gironines_parroquies,
		...comarques_gironines_oratoris,
		...comarques_gironines_monestirs,
		...comarques_gironines_memorials,
		...comarques_gironines_esglesies,
		...comarques_gironines_cementiris,
		...comarques_gironines_altres
	];
}


//groups
const parroquiesGroup = L.layerGroup();
const cementirisGroup = L.layerGroup();
const esglesiesGroup = L.layerGroup();
const monestirisGroup = L.layerGroup();
const oratorisGroup = L.layerGroup();
const memorialsGroup = L.layerGroup();

const altresGroup = L.layerGroup();
const debugGroup = L.layerGroup();

//Carrega de le ubicacions i organizta els markers en grups
function loadLocations(local_locations) {
	//Neteja de grups
	parroquiesGroup.clearLayers();
	cementirisGroup.clearLayers();
	esglesiesGroup.clearLayers();
	monestirisGroup.clearLayers();
	oratorisGroup.clearLayers();
	memorialsGroup.clearLayers();

	altresGroup.clearLayers();
	debugGroup.clearLayers();

	local_locations.map(location => {
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
		
		if (location.type === 'parroquia') { //esglesia basica mida gran
			marker.addTo(parroquiesGroup);
		}
		else if (location.type === 'cementiri') {
			marker.addTo(cementirisGroup);
		}
		else if (location.type === 'esglesia') { //esglesia basica mida petita
			marker.addTo(esglesiesGroup);
		}
		else if (location.type === 'monestir') {
			marker.addTo(monestirisGroup);
		}
		else if (location.type === 'oratori') {
			marker.addTo(oratorisGroup);
		}
		else if (location.type === 'memorial') {
			marker.addTo(memorialsGroup);
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

		//debug_marker.addTo(debugGroup);
	})
}

// Add layer groups to the map
esglesiesGroup.addTo(map);
cementirisGroup.addTo(map);
parroquiesGroup.addTo(map);
monestirisGroup.addTo(map);
oratorisGroup.addTo(map);
memorialsGroup.addTo(map);
altresGroup.addTo(map);

//debugGroup.addTo(map);

//Events
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

const monestirsCheckbox = document.getElementById("monestirs_input");
monestirsCheckbox.addEventListener("change", function() {
	if (this.checked) {
		monestirisGroup.addTo(map);
	}
	else {
		map.removeLayer(monestirisGroup);
	}
});

const oratorisCheckbox = document.getElementById("oratoris_input");
oratorisCheckbox.addEventListener("change", function() {
	if (this.checked) {
		oratorisGroup.addTo(map);
	}
	else {
		map.removeLayer(oratorisGroup);
	}
});

const memorialsCheckbox = document.getElementById("monuments_input");
memorialsCheckbox.addEventListener("change", function() {
	if (this.checked) {
		memorialsGroup.addTo(map);
	}
	else {
		map.removeLayer(memorialsGroup);
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

//Vista de pla terriotorial
const vistaTerriotalCheckbox = document.getElementById("pla_territorial_general_input");
vistaTerriotalCheckbox.addEventListener("change", function() {
	if (this.checked) {
		geojson_territori.addTo(map);
	}
	else {
		map.removeLayer(geojson_territori);
	}
});

const scrollingPanel = document.getElementById("scrolling-panel");
const scrollingContentPanel = document.getElementById("scrolling-panel-content");

window.onload = function() {
	createSidePanel();
};
window.addEventListener('hashchange', function() {
	createSidePanel();
});

function createSidePanel() {
	var hash = window.location.hash.slice(1);

	if (hash.length > 0) {
		scrollingContentPanel.src = `./pagines/${hash}.html`;
		scrollingPanel.style.display = "block";
	}
	else {
		scrollingPanel.style.display = "none";
	}
}

//Vistes
const osmViewCheckbox = document.getElementById("osm_input");
const sateliteViewCheckbox = document.getElementById("satelite_input");

osmViewCheckbox.addEventListener("click", function() {
	if (this.checked) {
		sateliteViewCheckbox.checked = false;
		layer_osm.addTo(map);
		layer_satellite.removeFrom(map);
	}
});
sateliteViewCheckbox.addEventListener("click", function() {
	if (this.checked) {
		osmViewCheckbox.checked = false;
		layer_satellite.addTo(map);
		layer_osm.removeFrom(map);
	}
});

//Filtres

//Filtre per ubicacions visitades
const visitatCheckbox = document.getElementById("visitat_input");
visitatCheckbox.addEventListener("change", function() {
	const all_locations = getAllLocations();

	if (this.checked) {
		const filtered_locations = all_locations.filter(location => location.visited);
		loadLocations(filtered_locations);
	}
	else {
		loadLocations(all_locations);
	}
});