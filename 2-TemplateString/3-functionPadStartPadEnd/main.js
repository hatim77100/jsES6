// let tab = [12, 5, 28, 100];
// for(let i = 0; i < tab.length ; i++){
//     console.log((tab[i].toString().padStart(3, 1)));
// }

let tab = [12, 5, 28, 100];
for(let i = 0; i < tab.length ; i++){
    console.log((tab[i].toString().padEnd(3, 1)));
}

let nom = "Hatim";
console.log(nom.padStart(7, "/"), nom.padEnd(7, '/'));

let nom1 = "k3iwmkfhgmora";
// let nom3 = "khizziwa";
let txt = nom1.padStart((nom1.length + 9), "/");
let txt2 = txt.padEnd((txt.length + 9), "/");
    console.log(txt2);