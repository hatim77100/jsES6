let randoms = [];

// console.log(random);

for (let i = 0; i <10 ; i++) {
let aleatoire = Math.floor(Math.random() * 2);
    randoms.push(aleatoire); 
}  

// console.log(randoms); 

let nbPile = 0;
let nbFace = 0;

for(let valeur of randoms) {
    if(valeur === 0) {
        nbPile++;
    } else {
        nbFace++
    }
}
let prct = nbFace/10*100
console.log(`Le nombre de pile est de : ${nbPile}, 
Le nombre de face est de : ${nbFace},
Le nombre de face représente : ${prct}%`);