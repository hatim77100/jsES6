let notes1 = [5,10,15,20];
let notes2 = [2,4,6];

const calculMoyen = (tab) => {
    let resultat = 0;
    for(let i = 0; i < tab.length; i++) {
        resultat += tab[i]; 
    }
    return resultat/tab.length;
}

const ajout1 = (tab) => tab.map((tab) => tab + 1);

let notes = [
    [5,10,15,20],
    [2,4,6]
]
const additionerTab = (tab1,tab2) => {
    
}
 
console.log(`La moyenne du tableau 1 est : ${calculMoyen(notes1)}`);
console.log(`La moyenne du tableau 2 est : ${calculMoyen(notes2)}`);
console.log(`Le tableau 1 majoré donne : ${ajout1(notes1)}`);
console.log(`Le tableau 3 donne : ${additionerTab(notes1, notes2)}`);
    