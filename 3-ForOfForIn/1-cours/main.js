const tab = [10, 20, 30, 40];

for(let indice in tab) {
    let num = parseInt(indice) + 1;
    console.log(`Num ${num} : ${tab[indice]}`);
}

// for of est  utilisable en particulier sur les tableaux:
for(let valeur of tab) {
    // let num = parseInt(indice) + 1;
    console.log(`Note : ${valeur}`);
}

// Boucle for in sur les objets:

const perso = {
    nom : "najoua",
    age :  40,
}

for (const indice in perso) {
    console.log(`${indice} : ${perso[indice]}`);
}