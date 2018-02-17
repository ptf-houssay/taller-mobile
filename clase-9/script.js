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
  position: { lat: -34.5989402, lng: -58.3983325 },
  title: "Campus BA"
});

var ventanaInfo = new google.maps.InfoWindow({
  content: `
  <h1>Campus BA - Plaza Houssay</h1>
  <p>Sede de Programá Tu Futuro</p>
  <pre>
  if (queresCodear) {
    veniAProgramaTuFuturo()
  }
  </pre>
  `
});

campus.addListener("click", function() {
  ventanaInfo.open(map, campus);
});

var cmd = new google.maps.Marker({
  position: {lat:-34.654765, lng:-58.379338},
  title: "CMD Barracas"
});

var listaDeFerias = [
  {position: {lat:-34.654765, lng:-58.379338}, title: "CMD"},
  {position: { lat: -34.5989402, lng: -58.3983325 }, title: "Campus BA"}
]

listaDeFerias.forEach(function(feria) {
  var marcador = new google.maps.Marker(feria);
  marcador.setMap(map)
})