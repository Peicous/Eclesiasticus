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
var layer_watercolor = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg');
var layer_satellite = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}');
var layer_light = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png');

//MAPA
var map = L.map('map', {
	maxBounds: L.latLngBounds(L.latLng(-90, -180), L.latLng(90, 180)),
	worldCopyJump: true,
	noWrap: true,
	layers: [layer_light]
})
.setView([42.0201463, 2.5149485], 12);

var zoneLayer;

//Polygons regions
if (GeoJson != undefined) {
	L.geoJSON(GeoJson, {
		style: function (feature) {
			return {
				weight: 1,
				opacity: 0, //ha de ser 0 per prod 1 per dev!
				fillOpacity: 0 // ha de ser 0 per prod 0.1 per dev!
			};
		},
		onEachFeature: onEachFeature,
	})
	.addTo(map);
}

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

//===========================================================================================

map.setView([42.0201463, 2.5149485], 12);


//groups
const parroquiesGroup = L.layerGroup();
const iclesiesGroup = L.layerGroup();
const altresGroup = L.layerGroup();

locations.map(location => {
	let zindex = 1;
	let size = location.type === "iclesia" ? 14 : 20;
	let anchor = [14, 35];

	if (location.type == "desconegut") {
		anchor = [10, 10]
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
		marker.bindPopup(location.description?.join(""));
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

	//debug_marker.addTo(iclesiesGroup);
})


// Add layer groups to the map
iclesiesGroup.addTo(map);
parroquiesGroup.addTo(map);
altresGroup.addTo(map);

// Create layer control
L.control.layers(
	{
		"Mapa clàssic": layer_watercolor,
		"Satèl·lit": layer_satellite,
		"Mapa clar": layer_light,
	}, 
	{
		'Esglésies': iclesiesGroup,
		'Parròquies': parroquiesGroup,
	},
	{
		position: 'bottomleft'
	}
).addTo(map);

