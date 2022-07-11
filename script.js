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

    if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'rock') {
        console.log(draw);
        console.log(`Player: ${playerScore}`, `Comp: ${compScore}`);

    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper') {
        compScore += 1;
        console.log(compWin);
        console.log(`Player: ${playerScore}`, `Comp: ${compScore}`);

    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors') {
        playerScore += 1;
        console.log(playerWin);
        console.log(`Player: ${playerScore}`, `Comp: ${compScore}`);

    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock') {
        playerScore += 1;
        console.log(playerWin);
        console.log(`Player: ${playerScore}`, `Comp: ${compScore}`);

    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'paper') {
        console.log(draw);
        console.log(`Player: ${playerScore}`, `Comp: ${compScore}`);

    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors') {
        compScore += 1;
        console.log(compWin);
        console.log(`Player: ${playerScore}`, `Comp: ${compScore}`);

    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock') {
        compScore += 1;
        console.log(compWin);
        console.log(`Player: ${playerScore}`, `Comp: ${compScore}`);

    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper') {
        playerScore += 1;
        console.log(playerWin);
        console.log(`Player: ${playerScore}`, `Comp: ${compScore}`);
        
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'scissors') {
        console.log(draw);
        console.log(`Player: ${playerScore}`, `Comp: ${compScore}`);
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Rock, paper or scissors?')
        const computerSelection = computerPlay();
        console.log(playerSelection);
        console.log(computerSelection);
        playRound(playerSelection, computerSelection);
    }
}
game()