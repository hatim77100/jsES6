class Voiture {
    constructor(marque,modele,nbPortes){
        this.marque = marque;
        this.modele = modele;
        this.nbPortes = nbPortes;
    }
}

class Voiture5portes extends Voiture{
    constructor(marque,modele){
        super(marque,modele,5);
        this.type = "familiale";
    }
}

class Voiture3portes extends Voiture{
    constructor(marque,modele){
        super(marque,modele,3);
        this.type = "célibataire";
    }
}

class Voiture5portesYotota extends Voiture5portes{
    constructor(modele){
        super("Yotota",modele);
    }
}

class Voiture5portesTroen extends Voiture5portes{
    constructor(modele){
        super("Troen",modele);
    }
}

class Voiture5portesYototaRyas extends Voiture5portesYotota {
    constructor(){
        super("Ryas");
    }
}

let voiture1 = new Voiture5portesYototaRyas();
let voiture2 = new Voiture5portesTroen("5C");
let voiture3 = new Voiture3portes("Troen","4C");
console.log(voiture1);
console.log(voiture2);
console.log(voiture3);