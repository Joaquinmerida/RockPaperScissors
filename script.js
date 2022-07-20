let humanScore = ['']
let machineScore = ['']

function win(array) {
    array.push('')
}

function playRound(userInput, computerInput, humanScore, computerScore) {

    if (userInput === computerInput) {
        console.log('TIE!!')
    }
    else if (userInput == 'rock') {
        if (computerInput == 'paper') {
            win(machineScore)
            console.log('Computer Won, paper beats rock!')
        } else {
            win(humanScore)
            console.log('Player Won, rock beats scissors! ')
        }
    }
    else if (userInput == 'scissors') {
        if (computerInput == 'rock') {
            win(machineScore)
            console.log('Computer Won, rock beats scissors!')
        } else {
            win(humanScore)
            console.log('Player Won, scissors beats rock!')
        }
    }
    else if (userInput == 'paper') {
        if (computerInput == 'scissors') {
            win(machineScore)
            console.log('Computer Won, scissors beats paper!')
        } else {
            win(humanScore)
            console.log('Player Won, rock beats paper!')
        }
    }
}

let game = function () {
    let userText = prompt("Choose: Rock, Paper or Scissors!").toLowerCase()
    const possibleInputs = ["rock", "paper", "scissors"]
    let machineInput = Math.floor(Math.random() * possibleInputs.length)
    switch (machineInput) {
        case 0:
            machineChoice = "rock";
            break;
        case 1:
            machineChoice = "paper";
            break;
        case 2:
            machineChoice = "scissors";
            break;
    }
    playRound(userText, machineChoice, humanScore, machineScore)
}

for (let i = 0; i < 5; i++) {
    game()
    console.log(`Human: ${humanScore.length - 1}`)
    console.log(`Computer: ${machineScore.length - 1}`)
    console.log(`------------------------------------Round ${i + 1}------------------------------------`)
    if (i + 1 == 5) {
        console.log("Game ended!!!")
        if (humanScore.length - 1 > machineScore.length - 1) {
            console.log("You win!")
        } else if (humanScore.length - 1 == humanScore.length - 1) {
            console.log("Its a tie!")
        }else {
            console.log("You lost!")
        }
    }
}

