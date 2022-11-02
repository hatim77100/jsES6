class Personne {
    constructor(nom, age) {
        this.nom = nom;
        this.age = age;
    }

    anniversaire(){
        this.age++;
    }

    affichagePerso() {
        return `Nom : ${this.nom} - Age : ${this.age}`
    }
}

let perso1 = new Personne("Tya", 30);
let perso2 = new Personne("Milo", 35);

perso2.anniversaire();

// créer une classe à partir d'une classe;

class Guerrier extends Personne {
    constructor(nom,age,pseudo) {
        super(nom, age);
        this.pseudo = pseudo;
        this.force = 5;
        this.agilite = 2;
        this.intel = 2;
    }
    affichagePerso() {
        let txt = super.affichagePerso();
            txt += `\nPseudo : ${this.pseudo}\n`
            txt += `Force : ${this.force} \n`
            txt += `Agilité : ${this.agilite} \n`
            txt += `Intel : ${this.intel} `
       return txt;     
    }
}

let perso3 = new Guerrier("tya", 35, "collapse");


console.log(perso3.affichagePerso());
