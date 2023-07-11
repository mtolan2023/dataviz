// Create a map object.
let myMap = L.map("map", {
  center: [15.5994, -28.6731],
  zoom: 3
});

// Add a tile layer.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// Country data
let countries = [
  {
    name: "Luxembourg",
    location: [49.815273, 6.129583],
    gdp_pc: 116014.6025
  },
  {
    name: "Bermuda",
    location: [32.321384, -64.75737],
    gdp_pc: 107079.4798
  },
  {
    name: "Switzerland",
    location: [46.818188, 8.227512],
    gdp_pc: 87097.03645
  },
  {
    name: "Ireland",
    location: [53.41291, -8.24389],
    gdp_pc: 85267.76474
  },
  {
    name: "Cayman Islands",
    location: [19.513469, -80.566956],
    gdp_pc: 85082.52686
  },
  {
    name: "Norway",
    location: [60.472024, 8.468946],
    gdp_pc: 67389.91205
  },
  {
    name: "United States",
    location: [37.09024, -95.712891],
    gdp_pc: 63413.51386
  },
  {
    name: "Denmark",
    location: [56.26392, 9.501785],
    gdp_pc: 61063.31643
  },
  {
    name: "Singapore",
    location: [1.352083, 103.819836],
    gdp_pc: 59797.75218
  },
  {
    name: "Iceland",
    location: [64.963051, -19.020835],
    gdp_pc: 59270.18005
  },
  {
    name: "Netherlands",
    location: [52.132633, 5.291266],
    gdp_pc: 52397.11671
  },
  {
    name: "Sweden",
    location: [60.128161, 18.643501],
    gdp_pc: 52274.40879
  },
  {
    name: "Australia",
    location: [-25.274398, 133.775136],
    gdp_pc: 51692.84275
  },
  {
    name: "Qatar",
    location: [25.354826, 51.183884],
    gdp_pc: 50124.38594
  },
  {
    name: "Finland",
    location: [61.92411, 25.748151],
    gdp_pc: 48773.28117
  },
  {
    name: "Austria",
    location: [47.516231, 14.550072],
    gdp_pc: 48586.80132
  },
  {
    name: "Hong Kong",
    location: [22.396428, 114.109497],
    gdp_pc: 46323.86344
  },
  {
    name: "Germany",
    location: [51.165691, 10.451526],
    gdp_pc: 46208.42947
  },
  {
    name: "Germany",
    location: [51.165691, 10.451526],
    gdp_pc: 46208.42947
  },
  {
    name: "Belgium",
    location: [50.503887, 4.469936],
    gdp_pc: 45159.34822
  },
  {
    name: "Israel",
    location: [31.046051, 34.851612],
    gdp_pc: 44168.94364
  }
];


// Loop through the cities array, and create one marker for each city object.
for (let i = 0; i < countries.length; i++) {

  // Conditionals for country gdp_pc
  let color = "";
  if (countries[i].gdp_pc > 100000) {
    color = "yellow";
  }
  else if (countries[i].gdp_pc > 75000) {
    color = "blue";
  }
  else if (countries[i].gdp_pc > 50000) {
    color = "green";
  }
  else {
    color = "violet";
  }

  // Add circles to the map.
  L.circle(countries[i].location, {
    fillOpacity: 0.75,
    color: "white",
    fillColor: color,
    // Adjust the radius.
    radius: Math.sqrt(countries[i].gdp_pc) * 500
  }).bindPopup(`<h1>${countries[i].name}</h1> <hr> <h3>GDP Per Capita (USD): ${countries[i].gdp_pc}</h3>`).addTo(myMap);
}
