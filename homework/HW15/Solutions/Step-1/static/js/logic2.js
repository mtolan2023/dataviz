// We create the tile layer that will be the background
let basemap = L.tileLayer(
    "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png'",
    {
      attribution:
        'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
    });

// Create the map object
let map = L.map("map", {
    center: [40.7, -94.5],
    zoom: 3
});

basemap.addTo(map)

// Here we are using d3 to pull the geojson data
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function (data) {
    //Return the style data for each of the earthquakes we plot
    //Pass the magnitude of the earthquate into two separate functions
    // 1. color, 2. radius
    function styleInfo(feature){
        return {
            opacity: 1,
            fillColor: getColor(feature.geometry.coordinates[2]),
            fillOpacity: 1,
            color: "#000000",
            radius: getRadius(feature.properties.mag),
            stroke: true,
            weight: 0.5
        };
    }

    //function that determines the color of the marker based on the magnitude of the earthquake
    function getColor(depth){
        switch(true) {
            case depth > 90:
                return "#ea2c2c"
            case depth > 70:
                return "#ea822c"
            case depth > 50:
                return "#ee9c00"
            case depth > 30:
                return "#eecc00"
            case depth > 10:
                return "#d4ee00"
            default:
                return "#98ee00"
        }
    }

    // Function to determine the radius of the earthquake marker based on magnitude
    function getRadius(magnitude){
        if (magnitude === 0) {
            return 1;
        }
        return magnitude*4
    }

    // Here we add a geojson layer to the map once the file is loaded
    L.geoJson(data, {
        // turn each feature into a circleMarker on the map
        pointToLayer: function (feature, latlng) {
            return L.circleMarker(latlng);
        },
        // Set the style for each circleMarker using our styleInfo function
        style: styleInfo,
        // We create a popup for each marker to display mag and loc
        onEachFeature: function (feature, layer) {
            layer.bindPopup(
                "Magnitude: "
                + feature.properties.mag
                + "<br>Depth: "
                + feature.geometry.coordinates[2]
                + "<br>Location: "
                + feature.properties.place
            );
        }
    }).addTo(map)

    // Create a legend controller
    let legend = L.control({
        position: "bottomright"
    });

    // THen add all the details for the legend
    legend.onAdd = function () {
        let div = L.DomUtil.create("div", "info legend");

        let grades = [-10, 10, 30, 50, 70, 90];
        let colors = [
          "#98ee00",
          "#d4ee00",
          "#eecc00",
          "#ee9c00",
          "#ea822c",
          "#ea2c2c"
        ];

        // Loop through our intervals to generate a label with a colored square for each interval
        for (let i = 0; i < grades.length; i++) {
            div.innerHTML += "<i style='background: " + colors[i] + "'></i> "
              + grades[i] + (grades[i + 1] ? "&ndash;" + grades[i + 1] + "<br>" : "+");
          }
          return div;
    };
    //finally add the legend to the map
    legend.addTo(map)
});