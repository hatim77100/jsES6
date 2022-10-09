let montantHT = 10;
let montantTTC = calculPrixTTC(10);

console.log(montantTTC);

// les paramètres par défaut ne peuvent se mettre le plus à droite de la fonction.
function calculPrixTTC(montant, remise=50, taux = 20) {
    let montantTTC = montant + montant*taux/100;
    return montantTTC - montantTTC*remise/100
};