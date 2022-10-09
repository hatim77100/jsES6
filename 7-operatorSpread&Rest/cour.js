const notes = [5,10,15,20];
// const notes2 = notes.slice();
const notes2 = [0,...notes,35];
notes.push(25,30);
// console.log(notes2);
// console.log(notes);

const perso = {
    nom: "Milo",
    age: 31,
}
const perso2 = {...perso};
perso2.nom = "Tata";
// console.log(perso);
// console.log(perso2);

const persoGuerrier = {
    ...perso,
    type: "Guerrier",
    force: 5,
}
let {nom, type, ...reste} = persoGuerrier
// console.log(persoGuerrier);
// console.log(nom + " " + type);
// console.log(reste);

//*******Opérateur Rest*******
const personnage = {
    nom: "Maya",
    age: 31,
};
const personnage2 = {
    nom: "Mina",
    age: 41,
};
const personnage3 = {
    nom: "Adham",
    age: 28,
};

afficherPersonnage(personnage, personnage2, personnage3);

function afficherPersonnage(...persos) {
    console.log(persos);
}
