const calcul = {
    moyenne : function(tab) {
        let resultat = 0;
        for(let valeur of tab){
            resultat += valeur;
        }
        return resultat / tab.length;
    },
    
    somme : function(tab) {
        let resultat = 0;
        for(let valeur of tab){
            resultat += valeur;
        }
        return resultat;
    }
}
export default calcul;
