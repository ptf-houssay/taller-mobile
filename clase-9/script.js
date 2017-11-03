var map = new google.maps.Map(document.getElementById("map"), {
  zoom: 15,
  center: { lat: -34.6037389, lng: -58.3815704 }
});

var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;
  var lugarActual = { lat: crd.latitude, lng: crd.longitude };
  var marker = new google.maps.Marker({
    position: lugarActual,
    title: "Lugar Actual",
    map: map
  });
  map.setCenter(lugarActual);
}

function error(err) {
  console.warn("ERROR(" + err.code + "): " + err.message);
}

var coord = navigator.geolocation.getCurrentPosition(success, error, options);

var campus = new google.maps.Marker({
  position: { lat: -34.5988795, lng: -58.4003857 },
  title: "Campus BA"
});

var boton = document.getElementById("agregar-campus");
boton.addEventListener("click", function(e) {
  e.preventDefault();
  campus.setMap(map)
});
