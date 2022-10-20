let requete = createSelect("livre",{champ:"type",valeur:"policier"},{champ:"auteur",valeur:"Milo"},{champ:"couleur",valeur:"blue"});
console.log(requete);

function createSelect(table, ...conditions){
    let cond = "";
    for(let [key, c] of conditions.entries()){
        cond += `${c.champ} = "${c.valeur}"`;
        if(key != conditions.length -1) cond += " AND ";
    }
    return `select * from ${table} where ${cond}`;
}