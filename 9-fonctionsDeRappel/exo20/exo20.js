const addition = (x, y) => x + y;
const soustraction = (x, y) => x - y;
const Multiplication = (x, y) => x * y;
const division = (x, y) => x / y;

const fonctionDeCalcul = (fonctionDerapel,x,y) => {
  console.log("******************")
  console.log(`le résultat est : ${fonctionDerapel(x,y)}`);
  console.log("******************")
};

console.log(fonctionDeCalcul(division,5,3));