const input = document.getElementById("input");
const button = document.getElementById("button");
const p = document.getElementById("p");
const mot = "rever";

button.addEventListener("click", ()=> {
    p.textContent = estPalindrome(input.value)
});

function estPalindrome(mot) {
   let motToArray = mot.split('');
   let motInverse = motToArray.slice().reverse(); //faire une copie du motToArray:
   for(let i = 0; i< motToArray.length; i++) {
    if(motToArray[i] !== motInverse[i]) {
        return `${mot} n'est pas un palindrome`;
    }
   } 
   return `${mot} est un palindrome`
}
// console.log(`${mot} ` + (estPalindrome(mot) ? `est ` : `n'est pas `) + `un palindrome`);