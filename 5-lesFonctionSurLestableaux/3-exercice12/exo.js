let tab = [
    {nom : "Tya", age : 25},
    {nom : "Toto", age : 22},
    {nom : "Milo", age : 32},
    {nom : "Mina", age : 32},
];

function retourneIndextab(nom) {
   return tab.findIndex((perso)=> {
        return perso.nom === nom;
    });
}

tab.splice(retourneIndextab("Mina"),1);
console.log(tab);