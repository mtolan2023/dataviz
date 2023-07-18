// Creating the map object
let myMap = L.map("map", {
  center: [40.7, -73.95],
  zoom: 11
});

// Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// To do:

let baseURL = "https://data.cityofnewyork.us/resource/fhrw-4uyv.json?";
let date = "$where=created_date between'2016-01-01T00:00:00' and '2017-01-01T00:00:00'";
let complaint = "&complaint_type=Rodent";
let limit = "&$limit=10000";


// Assemble the API query URL.
let url = baseURL + date + comlaint + limit;

// Get the data with d3.
d3.json(url).then(function(response) {
  let markers = L.markerClusterGroup();

  for(let i = 0; i < response.length; i++){
    let location = response[i].location;

    if (location) {
      markers.addLayer(L.marker([location.coordinates[1], location.coordinates[0]])
      .bindPopup(response[i].descriptor));
    }
  }

  myMap.addLayer(markers);
});