const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const posiibleChoices = document.querySelectorAll('button')

possibleChoices.forEach(possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
}))

function generateComputerChoice() {
    const rendomNumber = Math.floor(Math.random() * possibleChoices.length) 

if (randomNumber === 1) {

    computerChoice = 'rock'
}
if (randomNumber === 2) {

    computerChoice = 'scissors'

}
if (randomNumber === 3) {

    computerChoice = 'paper'
}

computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = 'its a draw!'

    }
}
function getResult() {
    if (computerChoice === ' rock ' && userChoice === 'paper') {
        result = 'you win!'
        
    }
}

function getResult() {
    if (computerChoice === ' paper ' && userChoice === 'rock') {
        result = 'you lost!'
        
    }
}


function getResult() {
    if (computerChoice === ' scissors ' && userChoice === 'rock') {
        result = 'you win!'
        
    }
}


function getResult() {
    if (computerChoice === ' paper ' && userChoice === 'scissors') {
        result = 'you win!'
        
    }
}


function getResult() {
    if (computerChoice === ' scissors ' && userChoice === 'paper') {
        result = 'you lost!'
        
    }
} 


function getResult() {
    if (computerChoice === ' rock ' && userChoice === 'scissor') {
        result = 'you lost!'
        
    }
}