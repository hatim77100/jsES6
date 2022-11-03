import { Livre } from "./classLivre.mjs";
import Auteur from "./classAuteur.mjs"

let a1 = new Auteur("Milo", 31);
let a2 = new Auteur("Tya", 24);
let l1 = new Livre("Titre1", 200, a1);
let l2 = new Livre("Titre2", 200, a2);

console.log(l1.toString());
console.log(l2.toString());