var mymap = L.map('mapid').setView([39.7502,-104.9490], 17);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 25,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoidGhvbXdvcm0iLCJhIjoiY2s2bDY1ZXJyMDhrbTNqbjB6YWV4ZG91dyJ9.RRKk7tlQbdvJBLWnXwG9QA'
}).addTo(mymap);

var gjData = 'data1/zootrees.geojson'




var pointStyle = {
    radius: 3,
    fillColor: "#134413",
    color: "#000",
    weight: 1,
    opacity: 0.35,
    fillOpacity: 0.8
    };

let xhr = new XMLHttpRequest();
xhr.open('GET', gjData);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.responseType = 'json';
xhr.onload = function() {
    if (xhr.status !== 200) return
    treeLayer = L.geoJSON(xhr.response, {
        pointToLayer: function (feature, latlng) {
               return L.circleMarker(latlng, pointStyle);
          }
       }
  )
treeLayer.addTo(mymap);

};
xhr.send();
