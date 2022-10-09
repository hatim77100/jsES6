let multiplication = 1;

afficherTableMultiplication(5, 15, 12);


function afficherTableMultiplication(nombre, debut=1, fin=10){
    if(debut > fin) {
        let tmp = debut;
            debut = fin;
            fin = tmp;
    }
    for(let i = debut; i < fin ; i++){
        console.log(`${i} * ${nombre} = ${i * nombre}`);
    }
}