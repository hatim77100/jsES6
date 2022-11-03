
export class Livre {
  constructor(titre, nbPage, auteur) {
    this.titre = titre;
    this.nbPage = nbPage;
    this.auteur = auteur;
  }
  toString() {
    return `Titre : ${this.titre} - Nombre de pages : ${this.nbPage} - auteur : ${this.auteur}`;
  }
}


