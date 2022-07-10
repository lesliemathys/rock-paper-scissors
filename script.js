function computerPlay() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    let randomChoice = choices[Math.floor(Math.random() * choices.length)];

    console.log(randomChoice);
}
computerPlay()
