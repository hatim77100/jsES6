// Destructuring sur les tableaux:

let notes = [5,10,15,20];
let [note1, note2, note3, note4] = notes;
console.log(`${note1} - ${note2} - ${note3} - ${note4}`);

// Destructuring sur les objets:

let perso = {
    nom : "Hatim",
    age : 40,
    sexe: true
};

let {nom, age, sexe} = perso;
console.log(`${nom} - ${age} - ${sexe}`);