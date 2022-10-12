const classes = {
  guerrier: { class: "war", force: 5, agilite: 3, intelligence: 2 },
  archer: { class: "archer", force: 3, agilite: 5, intelligence: 3 },
  mage: { class: "archer", force: 3, agilite: 5, intelligence: 3 },
};


const p1 = {
    nom: "Milo",
    age:30,
    ...classes.archer
}
console.log(p1);
