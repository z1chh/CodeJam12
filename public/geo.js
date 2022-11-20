var map = L.map('map').setView([50, -80], 2);//canada
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
navigator.geolocation.getCurrentPosition(locate)
setInterval(() => {
    navigator.geolocation.getCurrentPosition(getPosition)
}, 1000);
var marker, circle;

function locate(position){
    var lat = position.coords.latitude
    var long = position.coords.longitude
    if(marker) {
        map.removeLayer(marker)
    }
    marker = L.marker([lat, long]).addTo(map)
    var featureGroup = L.featureGroup([marker]).addTo(map)
    map.fitBounds(featureGroup.getBounds(), {padding: [5000,5000]})
}


function getPosition(position){
    var lat = position.coords.latitude
    var long = position.coords.longitude
    if(marker) {
        map.removeLayer(marker)
    }
    marker = L.marker([lat, long]).addTo(map)
    var featureGroup = L.featureGroup([marker]).addTo(map)

}