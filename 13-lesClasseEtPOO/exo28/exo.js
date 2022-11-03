const input = document.getElementById("rayon");
const select = document.getElementById("type");
const btn = document.getElementById("btn");
const divResultat = document.getElementById("resultat");

class Cercle {
  constructor(rayon) {
    this.rayon = rayon;
  }
  perimetre = () => 2 * Math.PI * this.rayon;
  aire = () => Math.PI * this.rayon * this.rayon;
  toString = () =>
    `Cercle de rayon ${
      this.rayon
    } - P : ${this.perimetre()} - A : ${this.aire()}`;
}

btn.addEventListener("click", function () {
  let c = new Cercle(input.value);
  switch (select.value) {
    case "tout":
      divResultat.textContent = c.toString();
      break;
    case "perimetre":
      divResultat.textContent = c.perimetre();
      break;
    case "aire":
      divResultat.textContent = c.aire();
      break;
    default:
      divResultat.textContent = "Veuillez mettre une valeur valide";
  }
});

for (let i = 2; i <= 10; i++) {
  let c = new Cercle(i);
  console.log(c.toString());
}
