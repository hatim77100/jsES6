const inputNumber1 = document.getElementById("number1");
const inputNumber2 = document.getElementById("number2");
const options = document.getElementById("options");
const resultatSpan = document.getElementById("resultatSpan");
const button = document.getElementById("button");
const divResultat = document.getElementById("divResultat");

const addition = (x, y) => x + y;
const soustraction = (x, y) => x - y;
const Multiplication = (x, y) => x * y;
const division = (x, y) => x / y;

button.addEventListener("click", () => {
  const nb1 = parseInt(inputNumber1.value);
  const nb2 = parseInt(inputNumber2.value);

  switch (parseInt(options.value)) {
    case 1:
      divResultat.innerHTML = formatageCalcul(Multiplication, nb1, nb2);
      break;
    case 2:
      divResultat.innerHTML = formatageCalcul(division, nb1, nb2);
      break;
    case 3:
      divResultat.innerHTML = formatageCalcul(soustraction, nb1, nb2);
      break;
    case 4:
      divResultat.innerHTML = formatageCalcul(addition, nb1, nb2);
      break;

    default: divResultat.innerHTML = errorAffichage("Calcul non pris en compte")
      break;
  }
});

const formatageCalcul = (fonctionDerapel, x, y) => {
  let txt = "<div style='color:green; border:2px solid green'>";
  txt += `le résultat est : ${fonctionDerapel(x, y)}`;
  txt += "</div>";
  return txt;
};

const errorAffichage = (message) => {
  let txt  = "<div style='color:red; border: 2px solid red'>";
      txt += `${message}`;
      txt += "</div>";
      return txt;
}
