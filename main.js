const getUserChoice = function (userInput){
    userInput = userInput.toLowerCase ();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' ){
        return userInput;
    }else{
        console.log ('Error');
    }
}
const getComputerChoice = function (){
    const randomNumber = Math.floor (Math.random () * 3);
    if (randomNumber === 0){
        return 'rock';
    }else if (randomNumber === 1){
        return 'paper';
    }else if (randomNumber === 2){
        return 'scissors';
    }
}
const determineWinner = function (userChoice, computerChoice){
    if (userChoice === computerChoice){
        console.log ('The game is a tie.');
        }else if (userChoice === 'rock' && computerChoice === 'paper'){
            console.log ('The computer wins!');
        }else if (userChoice === 'rock' && computerChoice !== 'paper'){
            console.log ('The human wins!');
        }else if (userChoice === 'paper' && computerChoice === 'scissors'){
            console.log ('The computer wins!');
        }else if (userChoice === 'paper' && computerChoice === 'rock'){
            console.log ('The human wins!');
        }else if (userChoice === 'scissors' && computerChoice === 'rock'){
            console.log ('The computer wins!');
        }else if (userChoice === 'scissors' && computerChoice === 'paper'){
            console.log ('The human wins!')
        }
        
}
const playGame = function (){
    const userChoice = getUserChoice ('rock');
    const computerChoice = getComputerChoice ();{
        console.log (`Human chooses ${userChoice}`);
        console.log (`Computer chooses ${computerChoice}`);
    }
    determineWinner (userChoice, computerChoice);
}

playGame ();
