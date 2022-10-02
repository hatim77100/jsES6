const villes = {
  paris: { nom: "Paris", lat: 48.8534, long: 2.3488 },
  toulouse: { nom: "Toulouse", lat: 46.6043, long: 1.4437 },
  lyon: { nom: "Lyon", lat: 45.75, long: 4.85 },
};
let{lyon} = villes
// function affichageCoordonnees(nom, latitude, longitude) {
//   let affichage = `
//     ------- ${nom} -------
//     Latitude : ${latitude}
//     Longitude : ${longitude}`;
//   console.log(affichage);
// }
 
// affichageCoordonnees(lyon.nom, lyon.lat, lyon.long);

function affichageCoordonnees(ville) {
    let affichage = `
      ---------${ville.nom}------
      Latitude : ${ville.lat}
      Longitude: ${ville.long}`
      console.log(affichage);
}

affichageCoordonnees(lyon)