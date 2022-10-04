const notes = [5, 10, 15, 20];
for (let [index, value] of notes.entries()) {
    if (value % 2 === 0 ) {
        console.log(`Note numéro ${index} : ${value}`);
    }
}