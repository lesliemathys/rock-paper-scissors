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

    let playerScore = 0;
    let compScore = 0;

    if (playerSelection === 'rock' && computerSelection === 'rock') {
        console.log(draw);
        console.log(`Player: ${playerScore}`, `Comp: ${compScore}`);

    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        compScore++;
        console.log(compWin);
        console.log(`Player: ${playerScore}`, `Comp: ${compScore}`);

    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++;
        console.log(playerWin);
        console.log(`Player: ${playerScore}`, `Comp: ${compScore}`);

    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++;
        console.log(playerWin);
        console.log(`Player: ${playerScore}`, `Comp: ${compScore}`);

    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        console.log(draw);
        console.log(`Player: ${playerScore}`, `Comp: ${compScore}`);

    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        compScore++;
        console.log(compWin);
        console.log(`Player: ${playerScore}`, `Comp: ${compScore}`);

    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        compScore++;
        console.log(compWin);
        console.log(`Player: ${playerScore}`, `Comp: ${compScore}`);

    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++;
        console.log(playerWin);
        console.log(`Player: ${playerScore}`, `Comp: ${compScore}`);
        
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        console.log(draw);
        console.log(`Player: ${playerScore}`, `Comp: ${compScore}`);
    }
}
const playerSelection = "rock".toLowerCase();
const computerSelection = computerPlay();

console.log(playerSelection);
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));