// Copio los que nos paso el profe, corte la parte que estrictamente nos sirve
// seria basicamente realizar un if con las variables de lat y lon y que de acuerdo a los 
// valores haga un location a otra pagina

let lat = 0;
let lon = 0;
let acc = 0; // precisión del GPS



  // Solicitar geolocalización en tiempo real
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(
      (position) => {
        lat = position.coords.latitude;
        lon = position.coords.longitude;
        acc = position.coords.accuracy; // precisión en metros
      },
      (err) => {
        console.error("Error al obtener la ubicación:", err);
      },
      { enableHighAccuracy: true, maximumAge: 1000, timeout: 5000 }
    );
  }
