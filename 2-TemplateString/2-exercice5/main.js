const nb = document.querySelector("#rayon");
const divResultat = document.querySelector("#resultat");
const perimetreCheckbox = document.querySelector("#perimetre");

function calcul() {
  let resultat = 0;
 
  if (perimetreCheckbox.checked) {
    resultat = perimetre(nb.value);
    affichageResultat("blue");
  } else {
    resultat = aire(nb.value);
    affichageResultat("red")
  }
  divResultat.textContent= resultat;
}

function perimetre(x) {
  return "Périmètre : " + Math.PI * x * 2;
}

function aire(x) {
  return "Aire : " + Math.PI * Math.pow(x, 2);
}
function affichageResultat(color) {
  divResultat.style.color = color;
  divResultat.textContent = resultat;
}


