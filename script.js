function computerPlay() {
    let choices = ['rock', 'paper', 'scissors'];
    let randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
}
computerPlay()

function playRound(playerSelection, computerPlay) {
    const playerWin = 'You won!';
    const compWin = 'You lost!';
    const draw = 'It\'s a tie!';

    if (playerSelection === 'rock' && computerPlay === 'rock') {
        console.log(draw);
    } else if (playerSelection === 'rock' && computerPlay === 'paper') {
        console.log(compWin);
    } else if (playerSelection === 'rock' && computerPlay === 'scissors') {
        console.log(playerWin);
    } else if (playerSelection === 'paper' && computerPlay === 'rock') {
        console.log(playerWin);
    } else if (playerSelection === 'paper' && computerPlay === 'paper') {
        console.log(draw);
    } else if (playerSelection === 'paper' && computerPlay === 'scissors') {
        console.log(compWin);
    } else if (playerSelection === 'scissors' && computerPlay === 'rock') {
        console.log(compWin);
    } else if (playerSelection === 'scissors' && computerPlay === 'paper') {
        console.log(playerWin);
    } else if (playerSelection === 'scissors' && computerPlay === 'scissors') {
        console.log(draw);
    }
}
playRound()