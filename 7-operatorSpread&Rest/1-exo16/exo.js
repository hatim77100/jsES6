const classes = {
  guerrier: { classe: "war", force: 5, agilite: 3, intelligence: 2 },
  archer: { classe: "archer", force: 3, agilite: 5, intelligence: 3 },
  mage: { classe: "archer", force: 3, agilite: 5, intelligence: 3 },
};


const p1 = {
    nom: "Tiya",
    age:30,
    ...classes.archer
}
const p2 = {
    nom: "Milo",
    age:30,
    ...classes.guerrier
}

function afficherPersonnes(...persos) {
    for(let perso of persos) {
      console.log(
        `************************\n`
        + `Nom : ${perso.nom}\n`
        + `Age : ${perso.age}\n`
        + `Classe : ${perso.classe}\n`
        + `Liste des caractères :\n`
        + `Force: ${perso.force}\n`
        + `Agilité : ${perso.agilite}\n`
        + `Intéligence: ${perso.intelligence}\n`
        + `***********************`
      );
  }
    }

afficherPersonnes(p1,p2);
