var map = L.map("map").setView([59.26803797168206, 15.21545545625287], 13); // Set the map center and zoom level

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

var marker = L.marker([59.26803797168206, 15.21545545625287]).addTo(map);
marker
  .bindPopup(
    "<b>La Santa Maria Tattoo & Art</b><br>Rudbecksgatan 38, 702 23 Örebro"
  )
  .openPopup();
