const mot = "rever";

// console.log();

function estPalindrome(mot) {
   let motToArray = mot.split('');
   let motInverse = motToArray.slice().reverse(); //faire une copie du motToArray:
   for(let i = 0; i< motToArray.length; i++) {
    if(motToArray[i] !== motInverse[i]) {
        return false;
    }
   } 
    return true
}
console.log(`${mot} ` + (estPalindrome(mot) ? `est ` : `n'est pas `) + `un palindrome`);;