const mapboxgl = require('mapbox-gl');
const marker = require('./marker');

mapboxgl.accessToken = 'pk.eyJ1IjoicmFtZW40c2FsZSIsImEiOiJjanI5b3ZyNmowMDA0NGFwbGk0eDAzM3phIn0.CZwumgpI1bwpUOQBSmJoKg';
const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705],
  zoom: 12,
  style: "mapbox://styles/mapbox/streets-v10"
});

marker('restaurant', [-74.009151, 40.705086]).addTo(map)
