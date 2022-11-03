
 class Auteur {
    constructor(nom, age){
        this.nom = nom;
        this.age = age;
    }

    toString() {
        return `NOM : ${this.nom} - Age : ${this.age}`
    }
}

export default Auteur;