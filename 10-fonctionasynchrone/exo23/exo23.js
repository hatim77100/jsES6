
function monTimer(timer) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${timer} secondes`);
        },1000)
    })
}


async function startTimer(seconde) {
    for(let i = 0; i < seconde; i++) {
        console.log(await monTimer(seconde-i));
    }
    console.log("Go !!!!!!");
}

startTimer(5);