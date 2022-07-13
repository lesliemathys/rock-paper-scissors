let playerScore = 0;
let compScore = 0;

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
        console.log(draw);
        console.log(`Player: ${playerScore}`, `Comp: ${compScore}`);

    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        compScore += 1;
        console.log(compWin);
        console.log(`Player: ${playerScore}`, `Comp: ${compScore}`);

    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore += 1;
        console.log(playerWin);
        console.log(`Player: ${playerScore}`, `Comp: ${compScore}`);

    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore += 1;
        console.log(playerWin);
        console.log(`Player: ${playerScore}`, `Comp: ${compScore}`);

    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        console.log(draw);
        console.log(`Player: ${playerScore}`, `Comp: ${compScore}`);

    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        compScore += 1;
        console.log(compWin);
        console.log(`Player: ${playerScore}`, `Comp: ${compScore}`);

    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        compScore += 1;
        console.log(compWin);
        console.log(`Player: ${playerScore}`, `Comp: ${compScore}`);

    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore += 1;
        console.log(playerWin);
        console.log(`Player: ${playerScore}`, `Comp: ${compScore}`);

    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        console.log(draw);
        console.log(`Player: ${playerScore}`, `Comp: ${compScore}`);
    }
}

function game() {
    let games = 0;
    do { 
        const playerSelection = prompt('Rock, paper or scissors?').toLowerCase()
        const computerSelection = computerPlay();
        console.log(playerSelection);
        console.log(computerSelection);
        playRound(playerSelection, computerSelection);
        games++

        if (playerScore === 3 && games < 5) {
            console.log('You won the game!');
            return;
    
        } else if (compScore === 3 && games < 5) {
            console.log('You lost the game!');
            return;
    
        } else if (playerScore === compScore && games === 5) {
            console.log('You tied the game!');
            return;

        } else if (games === 5 && compScore > playerScore) {
            console.log('You lost the game!');
            return;

        } else if (games === 5 && playerScore > compScore) {
            console.log('You won the game!');
            return;
        }
    } while (games < 5);
}
game()