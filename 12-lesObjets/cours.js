let perso = {
    nom:"Tya",
    prenom:"Milo",

    ditBonjour : function() {
        console.log("Bonjour");
        console.log(`bonjour ${this.nom} ${this.prenom}`);
    }
}

console.log(perso.nom);
console.log(perso["nom"]);
perso.ditBonjour();
perso["ditBonjour"]();

// sur les objets on utilise for in:
for(let info in perso) {
    console.log(perso[info]);
}

/****************/
// les fonctions disponible sur les objets

// faire une copie d'un objet:
// 1ère méthode:
let perso2 = {...perso};

// 2ème méthode:

let perso3 = {};
Object.assign(perso3, perso);

console.log(Object.keys(perso2));
console.log(Object.values(perso2));
console.log(Object.entries(perso2));


