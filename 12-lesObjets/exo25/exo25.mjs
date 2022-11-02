const calcul = {
    x: 5,
    y: 3,

    addition : function(x,y) {
        return x + y;
    },

    multiplication : function(x, y) {
        return x*y;
    },

    affichageCalcul:function(signe) {
        switch(signe) {
            case "*":
            case "X":
            case "x": console.log(`Le résultat du calcul ${this.x} ${signe} ${this.y} = ${this.multiplication(calcul["x"], calcul["y"])} `); 
            break;
            case "+": console.log(`Le résultat du calcul ${this.x} ${signe} ${this.y} = ${this.addition(calcul["x"],calcul["y"])}`);
        }
    },
}
calcul.x = 10;
calcul.y = 10;

export default calcul;

calcul.affichageCalcul("x");
calcul.affichageCalcul("+");



