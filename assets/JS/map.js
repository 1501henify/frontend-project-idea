// Coordinates for Anambra State, Nigeria
const onitshaLat = 6.1524;
const onitshaLon = 6.8257;

// Initialize the map at Anambra's location
const map = L.map('map').setView([onitshaLat, onitshaLon], 15);

// Add OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors',
}).addTo(map);

// Add a marker at Anambra's location
L.marker([onitshaLat, onitshaLon])
  .addTo(map)
  .bindPopup('<b>Find us here, Anambra, Nigeria!</b>')
  .openPopup();
