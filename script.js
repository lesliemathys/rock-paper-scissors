function computerPlay() {
    let choices = ['rock', 'paper', 'scissors'];
    let randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
}
computerPlay()

function playRound(playerSelection, computerSelection) {
    const playerWin = 'You won!';
    const compWin = 'You lost!';
    const draw = 'It\'s a tie!';

    if (playerSelection === 'rock' && computerSelection === 'rock') {
        return draw;
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return compWin;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return playerWin;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return playerWin;
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        return draw;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return compWin;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return compWin;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return playerWin;
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        return draw;
    }
}
const playerSelection = "PAPER".toLowerCase();
const computerSelection = computerPlay();

console.log(playerSelection);
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));