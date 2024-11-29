
const geojsonBase64_20172021 = `
`;

const geojsonBase64_20212024 = `
`;

const reginaMarkers = [
    { 
        coords: [ 50.462967, -104.618128], 
        photo: './media/icon_photos/reg_photos/albert.jpg', 
    },
    { 
        coords: [ 50.427939, -104.624472], 
        photo: './media/icon_photos/reg_photos/bathroom.jpg', 
    },
    { 
        coords: [  50.447535, -104.608805], 
        photo: './media/icon_photos/reg_photos/bikerack.jpg', 
    },
    { 
        coords: [  50.446263, -104.607760], 
        photo: './media/icon_photos/reg_photos/birds.jpg', 
    },
    { 
        coords: [  50.469678, -104.611015], 
        photo: './media/icon_photos/reg_photos/desolate.jpg', 
    },
    { 
        coords: [  50.396723, -104.758230], 
        photo: './media/icon_photos/reg_photos/farm.jpg', 
    },
    { 
        coords: [  50.422020, -104.629765], 
        photo: './media/icon_photos/reg_photos/finley.jpg', 
    },
    { 
        coords: [  50.433253, -104.656035], 
        photo: './media/icon_photos/reg_photos/flat.jpg', 
    },
    { 
        coords: [  50.449995, -104.611652], 
        photo: './media/icon_photos/reg_photos/grease.jpg', 
    },
    { 
        coords: [  50.447611, -104.615367], 
        photo: './media/icon_photos/reg_photos/pole.jpg', 
    },
    { 
        coords: [  50.432686, -104.594413], 
        photo: './media/icon_photos/reg_photos/sciencecenter.jpg', 
    },
    { 
        coords: [  50.461715, -104.594968], 
        photo: './media/icon_photos/reg_photos/shop.jpg', 
    },
    { 
        coords: [  50.445694, -104.582105], 
        photo: './media/icon_photos/reg_photos/sideofhouse.jpg', 
    },
    { 
        coords: [  50.420939, -104.606826], 
        photo: './media/icon_photos/reg_photos/snowball.jpg', 
    },
    { 
        coords: [  50.430482, -104.621317], 
        photo: './media/icon_photos/reg_photos/waterheater.jpg', 
    },
    { 
        coords: [  50.495200, -104.600892], 
        photo: './media/icon_photos/reg_photos/workbathroom.jpg', 
    },
    { 
        coords: [  50.447993, -104.608074], 
        photo: './media/icon_photos/reg_photos/bricks.jpg', 
    },
    { 
        coords: [   50.402551, -104.597203], 
        photo: './media/icon_photos/reg_photos/gammy.jpg', 
    }
];

const montrealMarkers = [
    { 
        coords: [ 45.548700, -73.601249], 
        photo: './media/icon_photos/bathroom_lormier.jpg', 
    },
    { 
        coords: [ 45.534976, -73.604583], 
        photo: './media/icon_photos/bb_chairs.jpg', 
    },
    { 
        coords: [ 45.521080, -73.559641], 
        photo: './media/icon_photos/bird_vine.jpg', 
    },
    { 
        coords: [ 45.531339, -73.607674], 
        photo: './media/icon_photos/buand_bathroom.jpg', 
    },
    { 
        coords: [ 45.519212, -73.557986], 
        photo: './media/icon_photos/bunny.jpg', 
    },
    { 
        coords: [ 45.558892, -73.658879], 
        photo: './media/icon_photos/couchetard2.jpg', 
    },
    { 
        coords: [ 45.533975, -73.604552], 
        photo: './media/icon_photos/dreamcode_home.jpg', 
    },
    { 
        coords: [ 45.519626, -73.563425], 
        photo: './media/icon_photos/fisherking.jpg', 
    },
    { 
        coords: [ 45.562682, -73.535233], 
        photo: './media/icon_photos/hoch_cones.jpg', 
    },
    { 
        coords: [ 45.562720, -73.533929], 
        photo: './media/icon_photos/hoch_statue.jpg', 
    },
    { 
        coords: [ 45.530314, -73.609608], 
        photo: './media/icon_photos/hockey_blade.jpg', 
    },
    { 
        coords: [ 45.450582, -73.584808 ], 
        photo: './media/icon_photos/mitten.jpg', 
    },
    { 
        coords: [ 45.535096, -73.603873], 
        photo: './media/icon_photos/onewheel.jpg', 
    },
    { 
        coords: [ 45.480236, -73.598145], 
        photo: './media/icon_photos/pcs_study.jpg', 
    },
    { 
        coords: [ 45.544009, -73.652882], 
        photo: './media/icon_photos/plane.jpg', 
    },
    { 
        coords: [ 45.516269, -73.578207], 
        photo: './media/icon_photos/pool_claw.jpg', 
    },
    { 
        coords: [ 45.540007, -73.623644], 
        photo: './media/icon_photos/salledebain.jpg', 
    },
    { 
        coords: [ 45.502468, -73.559217], 
        photo: './media/icon_photos/storageroom.jpg', 
    },
    { 
        coords: [45.461840, -73.568947], 
        photo: './media/icon_photos/verdun_bowling.jpg', 
    },
    { 
        coords: [ 45.528929, -73.616393], 
        photo: './media/icon_photos/dresser.jpg', 
    },
    { 
        coords: [ 45.523425, -73.605453], 
        photo: './media/icon_photos/fish_and_crab.jpg', 
    },{ 
        coords: [ 45.532604, -73.616487], 
        photo: './media/icon_photos/shack.jpg', 
    }
];

// Define common icons
const createIcon = (url, size, anchor) =>
    L.icon({ iconUrl: url, iconSize: size, iconAnchor: anchor, popupAnchor: [0, -32] });

const defaultIcon = createIcon('./media/icon.png', [40, 40], [16, 32]);
const hoverIcon = createIcon('./media/iconhover.png', [50, 50], [20, 32]);

// Initialize map and layers
const initializeMap = (mapId, tilePath, bounds, heatmapBase64, markersData, maxBounds) => {
    // Create tile layer
    const tileLayer = L.tileLayer(tilePath, { tms: 1, opacity: 1, minZoom: 12, maxZoom: 17 });

    // Initialize map with bounds and maxBounds
    const map = L.map(mapId, {
        layers: [tileLayer],
        minZoom: 12,
        maxZoom: 16,
        maxBounds: maxBounds,
        maxBoundsViscosity: 1.0
    });

    const initialCenter = [(bounds[0][0] + bounds[1][0]) / 2, (bounds[0][1] + bounds[1][1]) / 2];
    map.setView(initialCenter, 14); // Adjust zoom to your desired level

    const photoMarkersLayer = L.layerGroup();
    let heatmapLayer;

    // Add markers to the map
    markersData.forEach(marker => {
        const markerElement = L.marker(marker.coords, { icon: defaultIcon });

        markerElement.on('mouseover', () => markerElement.setIcon(hoverIcon));
        markerElement.on('mouseout', () => markerElement.setIcon(defaultIcon));

        markerElement.bindPopup(`
            <div style="text-align: center;">
                <img src="${marker.photo}" alt="Photo" style="width: 250px; height: auto; border-radius: 8px;" />
            </div>
        `);

        photoMarkersLayer.addLayer(markerElement);
    });

    // Decode the Base64 heatmap data
    const decodedGeoJson = JSON.parse(atob(heatmapBase64));

    // Generate heatmap layer
    const heatPoints = decodedGeoJson.features.map(f => {
        const [lng, lat] = f.geometry.coordinates;
        return [lat, lng, f.properties.intensity || 1];
    });

    heatmapLayer = L.heatLayer(heatPoints, {
        radius: 30,
        blur: 15,
        maxZoom: 17
    }).addTo(map);

    const heatmapCanvas = heatmapLayer._canvas;
    if (heatmapCanvas) heatmapCanvas.style.opacity = 0.5;

    photoMarkersLayer.addTo(map);

    // Layer controls
    const control = L.control.layers(null, {
        'What is here?': photoMarkersLayer,
        'I\'ve been here': heatmapLayer
    }, { collapsed: false }).addTo(map);

    return map;
};

// Map bounds and settings
const reginaBounds = [
    [50.388583, -104.767017],
    [50.516618, -104.474762]
];

const montrealBounds = [
    [45.397540, -73.852372],
    [45.655147, -73.406946]
];

// Initialize maps with Base64-encoded GeoJSON strings
initializeMap(
    'regina-map',
    './reg_tiles/tiles/{z}/{x}/{y}.png',
    reginaBounds,
    geojsonBase64_20172021, // Replace with your actual Base64 string
    reginaMarkers,
    reginaBounds
);

initializeMap(
    'montreal-map',
    './mtl_tiles/tiles/{z}/{x}/{y}.png',
    montrealBounds,
    geojsonBase64_20212024, // Replace with your actual Base64 string
    montrealMarkers,
    montrealBounds
);