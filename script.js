function computerPlay() {
    let choices = ['rock', 'paper', 'scissors'];
    let randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
}
computerPlay()

function playRound() {
    const playerWin = 'You won!';
    const compWin = 'You lost!';
    const draw = 'It\'s a tie!';
}
playRound()