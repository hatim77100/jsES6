const mots = ["clou","flou","bijou","genou","trou"];
const mots2 = mots.map((lettre) => {
    if(lettre === "bijou" || lettre === "genou"){
        return lettre + "x";
    }  return lettre + "s";
})
console.log(mots2);