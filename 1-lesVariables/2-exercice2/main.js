const input = document.getElementById("factorielle");
const btn = document.querySelector(".btn");
const div = document.getElementById("resultat");

btn.addEventListener("click", () => {
  let nombre = input.value;
  let resultat = 1;
  for (let i = 1; i <= nombre; i++) {
    resultat = resultat * i;
}
div.textContent = "La factorielle de " + input.value + " est = " + resultat;

});
