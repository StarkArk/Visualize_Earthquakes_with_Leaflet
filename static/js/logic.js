
// Link to earthquakes for the last 7 days that equal or exceed a magnitude 2.5
var url = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojson'

// Style Function?

// Create initial map object
var myMap = L.map("map", {
    center: [39.3210, -111.0937],
    zoom: 6
});

// Adding a tile layer (the background map image) to our map:
// We use the addTo() method to add objects to our map.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);



// Get GeoJSON data
d3.json(url).then(function (data) {

    function getColor(x) {
        switch (true) {
            case x > 90:
                return "#ea2c2c";
            case x > 70:
                return "#ea2c2c";
            case x > 50:
                return "#ea2c2c";
            case x > 30:
                return "#ea2c2c";
            case x > 10:
                return "#ea2c2c";
            default:
                return "#98ee00";
        }
    }

    function styleMine(feature) {
        return {
            opacity: 1,
            fillColor: getColor(feature.properties.mag),
            color: '#000000',
            radius: 16,
            weight: 0.5,
            stroke: true
        }
    }




    console.log(data);
    // Creating a GeoJSON layer with the retrieved data
    L.geoJson(data, {
        pointToLayer: function (feature, latLong) {
            return L.circleMarker(latLong);
        },
        style: styleMine
        //  onEach and bindPopUp
    }).addTo(myMap);





    // for (var i = 0; i < data.length; i++) {
    //     // Setting the marker radius for the state by passing population into the markerSize function
    //     stateMarkers.push(
    //       L.circle(locations[i].coordinates, {
    //         stroke: false,
    //         fillOpacity: 0.75,
    //         color: "white",
    //         fillColor: "white",
    //         radius: markerSize(locations[i].state.population)
    //       })
    //     );
});

// Store our API endpoint as queryUrl.




