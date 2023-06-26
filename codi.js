//LAYERS
var layer_principal = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg');
var layer_satelite = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}');
var layer_ligth = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png');

//MAPA
var map = L.map('map', {
	maxBounds: L.latLngBounds(L.latLng(-90, -180), L.latLng(90, 180)),
	worldCopyJump: true,
	noWrap: true,
	layers: [layer_satelite]
})
.setView([41.713488,-7.1185473], 4);

//L.control.scale().addTo(map);

var zoneLayer;

//groups
const parroquiesGroup = L.layerGroup();
const iclesiesGroup = L.layerGroup();

let locations = [
	{
		name: "Exemple",
		type: "iclesia", 
		coordinates: [41.9655403,2.73888370], 
		description: [
			"<h2><b>Exemple màgic</b></h2>",
			"Girones, Catalunya"
		]
	},
]

locations.map(location => {
	let zindex = 1;
	let size = 29;
	let anchor = [24, 40];

	//importancia i tamany
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
		iconSize: [size, size],
		iconAnchor: anchor,
		popupAnchor: [-10, -43],
		shadowSize: [size, size]
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
		marker.bindPopup(location.description?.join(" <br>"));
	}
	
	marker.setZIndexOffset(zindex)
	
	/*let debug_marker = L.marker(location.coordinates, {zone: location.zone});
	debug_marker.bindPopup(location.name);
	debug_marker.on('mouseover', handleMarkerHover);
	debug_marker.on('mouseout', handleMarkerOut);*/
	
	if (location.type === 'iclesia') {
		marker.addTo(iclesiesGroup);
	} 
	else if (location.type === 'parroquia') {
		marker.addTo(parroquiesGroup);
	}

	//debug_marker.addTo(iclesiesGroup);
})


// Add layer groups to the map
iclesiesGroup.addTo(map);
parroquiesGroup.addTo(map);

// Create layer control
const layersControl = L.control.layers(
	{
		"Mapa clàssic": layer_principal,
		"Satelite": layer_satelite,
		"Ligth Mapa": layer_ligth,
	}, 
	{
		'Iclesies': iclesiesGroup,
		'Parroquies': parroquiesGroup,
	},
	{
		position: 'bottomleft'
	}
).addTo(map);

//Polygons regions
/*L.geoJSON(GeoJson, {
	style: function (feature) {
		return {
			weight: 1,
			opacity: 0,
			fillOpacity: 0
		};
	},
	onEachFeature: onEachFeature,
})
.addTo(map);*/

// Add the event listeners to each feature (province/state)
function onEachFeature(feature, layer) {
	layer.on({
		mouseover: highlightFeature,
		mouseout: resetFeature,
	});
}

// Event listener for mouse hover
function highlightFeature(e) {
	var layer = e.target;

	layer.setStyle({
		weight: 3,
		opacity: 1,
		fillOpacity: 0.1,
	});

	if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
		layer.bringToFront();
	}
}

// Event listener for mouse out (reset the style)
function resetFeature(e) {
	var layer = e.target;

	layer.setStyle({
		weight: 1,
		opacity: 0,
		fillOpacity: 0,
	});
}

function handleMarkerHover(e) {
	var marker = e.target;
	var zone = marker.options.zone;

	if (GeoJson != undefined) {
		zoneLayer = L.geoJSON(GeoJson, {
			style: function (feature) {
				return {
					weight: 1,
					opacity: 0,
					fillOpacity: 0,
				};
			},
			filter: function (feature) {
				return feature.properties.ISO_A3 == zone;
			},
		}).getLayers()[0];

		if (zoneLayer) {
			zoneLayer.setStyle({
				weight: 3,
				opacity: 1,
				fillOpacity: 0.1,
			});

			if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
				zoneLayer.bringToFront();
			}

			zoneLayer.addTo(map);
		}
	}
}

function handleMarkerOut(e) {
	if (zoneLayer != undefined) {
		map.removeLayer(zoneLayer);
	}
}



/*

{
	"type": "Feature",
	"properties": { "ADMIN": "Pla de l'Estany", "ISO_A3": "PDE" },
	"geometry": {
		"type": "Polygon",
		"coordinates": [

		]
	}
}

*/