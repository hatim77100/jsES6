const notes = [5, 10, 15, 20];

// supprimer un element à la fin du tableau
notes.pop()
// console.log(notes);

// rajouter un élement ou plusieur à la fin du tableau
notes.push(25)
// console.log(notes);

// la fonction Map qui récupère un tableau et apporte une modification sur celui-ci en retournant un nouveau tableau.
const notes2 = notes.map(function(note) {
    // return Math.pow(note,2)
    return note ** 2;
});
// console.log(notes2);

// la fonction findIndex(): 
const index = notes.findIndex(function(note) {
    return note === 15;
})
// console.log(index);

// La fonction find()
const persos = [
    ["Tya", 5, 10, 15, 24],
    ["Toto",8, 15, 12, 25],
    ["Milo",9, 11, 7, 28]
];
const valeur = persos.find(function (perso) {
    return perso[0] === "Toto";
})
// console.log(valeur);

// La fonction entries():

const personneNotes = [5, 10, 15, 20];
// let notesEntries = personneNotes.entries();
// console.log(notesEntries.next());
for (let [index, value] of personneNotes.entries()) {
    // console.log(`Note ${index} : ${value}`);
}

// La fonction include() return un boolean:
const noms = ["hatim", "adham", "melanie"];
let inclus = noms.includes("adham");
console.log(inclus);