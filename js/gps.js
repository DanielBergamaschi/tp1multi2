// Copio los que nos paso el profe, corte la parte que estrictamente nos sirve
// seria basicamente realizar un if con las variables de lat y lon 
// y que de acuerdo a los  valores haga un location a otra pagina


/*Lista de Coordenadas

    Palacio Barolo

        GMS: 34°36′34″S 58°23′09″O

        Decimal: -34.60944, -58.38583

    Congreso de la Nación

        GMS: 34°36′36″S 58°23′34″O

        Decimal: -34.61000, -58.39278

    Logia Masónica (Gran Logia de la Argentina — Sede Central)

        Ubicación: Tte. Gral. Juan Domingo Perón 1242

        GMS: 34°36′20″S 58°23′07″O

        Decimal: -34.60556, -58.38528

    Facultad de Ingeniería (UBA — Sede Av. Las Heras)

        Nota: Es la sede con el icónico estilo gótico.

        GMS: 34°35′19″S 58°23′48″O

        Decimal: -34.58861, -58.39667

    Área de Artes Multimediales - UNA

        Ubicación: Viamonte 1832 (interpretando "una multimedia" como el Área Transdepartamental de Artes Multimediales de la Universidad Nacional de las Artes).

        GMS: 34°35′59″S 58°23′31″O

        Decimal: -34.59972, -58.39194

    Facultad de Medicina (UBA)

        GMS: 34°35′54″S 58°23′54″O

        Decimal: -34.59833, -58.39833

    AMIA (Asociación Mutual Israelita Argentina)

        Ubicación: Pasteur 633

        GMS: 34°36′07″S 58°23′58″O

        Decimal: -34.60194, -58.39944

    Teatro Colón

        GMS: 34°36′04″S 58°22′59″O

        Decimal: -34.60111, -58.38306

    Iglesia San Expedito (Parroquia Nuestra Señora de Balvanera)

        Ubicación: Bartolomé Mitre 2411 (donde se encuentra el santuario).

        GMS: 34°36′37″S 58°24′12″O

        Decimal: -34.61028, -58.40333

    Estación Once (Once de Setiembre)

        GMS: 34°36′31″S 58°24′32″O

        Decimal: -34.60861, -58.40889


      _________________________________________________________

        Límites de los Cuadrados de 100m de Lado

    Palacio Barolo

        Latitud (Sur a Norte): entre -34.60989 y -34.60899

        Longitud (Oeste a Este): entre -58.38638 y -58.38528

    Congreso de la Nación

        Latitud (Sur a Norte): entre -34.61045 y -34.60955

        Longitud (Oeste a Este): entre -58.39333 y -58.39223

    Logia Masónica (Sede Central)

        Latitud (Sur a Norte): entre -34.60601 y -34.60511

        Longitud (Oeste a Este): entre -58.38583 y -58.38473

    Facultad de Ingeniería (Sede Las Heras)

        Latitud (Sur a Norte): entre -34.58906 y -34.58816

        Longitud (Oeste a Este): entre -58.39722 y -58.39612

    Área de Artes Multimediales - UNA

        Latitud (Sur a Norte): entre -34.60017 y -34.59927

        Longitud (Oeste a Este): entre -58.39249 y -58.39139

    Facultad de Medicina (UBA)

        Latitud (Sur a Norte): entre -34.59878 y -34.59788

        Longitud (Oeste a Este): entre -58.39888 y -58.39778

    AMIA

        Latitud (Sur a Norte): entre -34.60239 y -34.60149

        Longitud (Oeste a Este): entre -58.39999 y -58.39889

    Teatro Colón

        Latitud (Sur a Norte): entre -34.60156 y -34.60066

        Longitud (Oeste a Este): entre -58.38361 y -58.38251

    Iglesia San Expedito

        Latitud (Sur a Norte): entre -34.61073 y -34.60983

        Longitud (Oeste a Este): entre -58.40388 y -58.40278

    Estación Once

        Latitud (Sur a Norte): entre -34.60906 y -34.60816

        Longitud (Oeste a Este): entre -58.40944 y -58.40834

    📌 Cómo usar estos datos: Si combinás estos rangos mínimos y máximos, 
    obtenés las cuatro esquinas del cuadrado. Por ejemplo, 
    la esquina suroeste del Palacio Barolo sería (-34.60989, -58.38638).

*/

let lugares;

let lat = 0;
let lon = 0;
let acc = 0; // precisión del GPS

tomarUbicacion ();
coordenadasLugares ();
cargarPaginaGPS ();


function tomarUbicacion () {

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

}


function cargarPaginaGPS () {

for (i = 0; i < 10; i++) {

    if (lat > lugares[i].lat_min_sur && lat < lugares[i].lat_max_norte && 
      lon > lugares[i].lng_min_oeste && lon < lugares[i].lng_max_este) {

         location.replace(lugares[i].pagina)


      } else (preventDefault())


}




}

function coordenadasLugares () {


 lugares = [
  {
    lugar: "Palacio Barolo",
    centro: { lat: -34.60944, lng: -58.38583 },
    pagina: "pagina2-barolo.html",
    lat_min_sur: -34.60989,
    lat_max_norte: -34.60899,
    lng_min_oeste: -58.38638,
    lng_max_este: -58.38528
  },
  {
    lugar: "Congreso de la Nación",
    centro: { lat: -34.61000, lng: -58.39278 },
    pagina: "Pagina1-congreso.html",
    lat_min_sur: -34.61045,
    lat_max_norte: -34.60955,
    lng_min_oeste: -58.39333,
    lng_max_este: -58.39223
  },
  {
    lugar: "Logia Masónica (Sede Central)",
    centro: { lat: -34.60556, lng: -58.38528 },
    pagina: "pagina4-logia.html",
    lat_min_sur: -34.60601,
    lat_max_norte: -34.60511,
    lng_min_oeste: -58.38583,
    lng_max_este: -58.38473
  },
  {
    lugar: "Facultad de Ingeniería (Sede Las Heras)",
    centro: { lat: -34.58861, lng: -58.39667 },
    pagina: "pagina10-ingenieria.html",
    lat_min_sur: -34.58906,
    lat_max_norte: -34.58816,
    lng_min_oeste: -58.39722,
    lng_max_este: -58.39612
  },
  {
    lugar: "Área de Artes Multimediales - UNA",
    centro: { lat: -34.59972, lng: -58.39194 },
    pagina: "pagina9-multimedia.html",
    lat_min_sur: -34.60017,
    lat_max_norte: -34.59927,
    lng_min_oeste: -58.39249,
    lng_max_este: -58.39139
  },
  {
    lugar: "Facultad de Medicina (UBA)",
    centro: { lat: -34.59833, lng: -58.39833 },
    pagina: "pagina8-medicina.html",
    lat_min_sur: -34.59878,
    lat_max_norte: -34.59788,
    lng_min_oeste: -58.39888,
    lng_max_este: -58.39778
  },
  {
    lugar: "AMIA",
    centro: { lat: -34.60194, lng: -58.39944 },
    pagina: "pagina5-amia.html",
    lat_min_sur: -34.60239,
    lat_max_norte: -34.60149,
    lng_min_oeste: -58.39999,
    lng_max_este: -58.39889
  },
  {
    lugar: "Teatro Colón",
    centro: { lat: -34.60111, lng: -58.38306 },
    pagina: "pagina7-colon.html",
    lat_min_sur: -34.60156,
    lat_max_norte: -34.60066,
    lng_min_oeste: -58.38361,
    lng_max_este: -58.38251
  },
  {
    lugar: "Iglesia San Expedito",
    centro: { lat: -34.61028, lng: -58.40333 },
    pagina: "pagina3-iglesia.html",
    lat_min_sur: -34.61073,
    lat_max_norte: -34.60983,
    lng_min_oeste: -58.40388,
    lng_max_este: -58.40278
  },
  {
    lugar: "Estación Once",
    centro: { lat: -34.60861, lng: -58.40889 },
    pagina: "pagina6-once.html",
    lat_min_sur: -34.60906,
    lat_max_norte: -34.60816,
    lng_min_oeste: -58.40944,
    lng_max_este: -58.40834
  }
];



}

