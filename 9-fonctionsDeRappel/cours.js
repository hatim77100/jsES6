const notes = [5,10,15,20];
const notes2 = notes.map(n => n*n);

console.log(notes2);

const calculPar3 = (x, maFonctionDeRapel) => maFonctionDeRapel(x,3);

const addition = (x,y) =>x+y;

const multiplication = (x,y) => x*y;

const calcul = calculPar3(5,multiplication);

console.log();