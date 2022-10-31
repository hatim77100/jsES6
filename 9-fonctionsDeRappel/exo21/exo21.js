
const pile = (nombre) => {
    console.log("****************************");
    console.log("vous avez obtenu un Pile :" + nombre);
    console.log("////////////////////////////");
}

const face = (nombre) => {
    console.log("****************************");
    console.log("vous avez obtenu une face :" + nombre);
    console.log("////////////////////////////");
}

const pileOuFace = (ok, ko) => {
let random = Math.floor(Math.random() * 2)
if(random === 1) {
    ok(random)
}else {
    ko(random);
}
}
pileOuFace(pile, face);

