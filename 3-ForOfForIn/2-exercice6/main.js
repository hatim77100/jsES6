const notes = [5, 10, 15, 20];

//----------- avec la boucle For --------------

function calculerLaMoyenne() {
  let resultat = 0;
  for (let i = 0; i < notes.length; i++) {
    resultat += notes[i];
  }
  return (resultat /= notes.length);
}
console.log(`La moyenne est de : ${calculerLaMoyenne()}`);

// -------- avec la boucle For in -------------

function calculerLaMoyenne1() {
    let resultat = 0;
    for (let indice in notes) {
      resultat+= notes[indice];
    }
    return (resultat /= notes.length);
  }
  console.log(`La moyenne est de : ${calculerLaMoyenne1()}`);

//--------- avec la boucle for of ----------------

function calculerLaMoyenne2() {
    let resultat = 0;
    for (let valeur of notes) {
      resultat+= valeur;
    }
    return (resultat /= notes.length);
  }
  console.log(`La moyenne est de : ${calculerLaMoyenne2()}`);