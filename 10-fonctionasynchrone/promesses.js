function tempo() {
  return new Promise(function (resolve) {
    console.log("Etape 1");
    setTimeout(() => {
      resolve("coucou");
    }, 2000);
    console.log("Etape 3");
  });
};

// async function ditBonjour() {
//     console.log("Début de programme");
//     tempo().then(function (valeur) {
//         console.log("Etape 2");
//       console.log(valeur);
//     });
//     console.log("fin du programme");
// }

async function ditBonjour() {
    console.log("Début de programme");
    const affichageBonjour = await tempo()
    console.log(affichageBonjour);
    console.log("fin du programme");
}

ditBonjour();