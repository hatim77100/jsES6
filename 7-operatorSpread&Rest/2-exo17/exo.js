function addition(...nombres) {
    let resultat = 0;
    for(let nombre of nombres) {
        resultat += nombre
    }
    return resultat;
}

function multiplication(...nombres) {
    let resultat = 1;
    for(let nombre of nombres) {
        resultat *= nombre
    }
    return resultat;
}

console.log(`le resultat de l'addition est de : ${addition(1,15,20)}`);
console.log(`le resultat de l'addition est de : ${multiplication(1,15,20)}`);