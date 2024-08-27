
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissor = document.querySelector("#scissor");
let pcount = document.querySelector(".player-count");
let ccount = document.querySelector(".computer-count");
let display = document.querySelector(".display-para");
let reset = document.querySelector(".reset");
const guess = document.querySelectorAll(".guess");
let pselected = document.querySelector(".player-selected");
let cselected = document.querySelector(".computer-selected");
let userScore = 0;
let compScore = 0;

guess.forEach( (choice) => {
    choice.addEventListener("click" , () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    
    if (userChoice == compChoice){
        display.innerText = "Match draw";
        pselected.innerText = userChoice;
        cselected.innerText = compChoice;
    } 
    else if (userChoice == "rock" && compChoice == "scissor"){
        display.innerText = "rock Wins";
        pselected.innerText = userChoice;
        cselected.innerText = compChoice;
        userScore = userScore + 1
        pcount.innerHTML = userScore;
        ccount.innerHTML = compScore;
    } 
    else if (userChoice == "rock" && compChoice == "paper"){
        display.innerText = "paper Wins";
        pselected.innerText = userChoice;
        cselected.innerText = compChoice;
        compScore = compScore + 1
        pcount.innerHTML = userScore;
        ccount.innerHTML = compScore;
    } 
    else if (userChoice == "paper" && compChoice == "scissor"){
        display.innerText = "Scissor Wins";
        pselected.innerText = userChoice;
        cselected.innerText = compChoice;
        compScore = compScore + 1
        pcount.innerHTML = userScore;
        ccount.innerHTML = compScore;
    } 
    else if (userChoice == "paper" && compChoice == "rock"){
        display.innerText = "paper Wins";
        pselected.innerText = userChoice;
        cselected.innerText = compChoice;
        userScore = userScore + 1
        pcount.innerHTML = userScore;
        ccount.innerHTML = compScore;
    } 
    else if (userChoice == "scissor" && compChoice == "rock"){
        display.innerText = "rock Wins";
        pselected.innerText = userChoice;
        cselected.innerText = compChoice;
        compScore = compScore + 1
        pcount.innerHTML = userScore;
        ccount.innerHTML = compScore;
    } 
    else if (userChoice == "scissor" && compChoice == "paper"){
        display.innerText = "Scissor Wins";
        pselected.innerText = userChoice;
        cselected.innerText = compChoice;
        userScore = userScore + 1
        pcount.innerHTML = userScore;
        ccount.innerHTML = compScore;
    }
};

const genCompChoice = () => {
    const options = ["rock","paper","scissor"];
    const randIndx = Math.floor(Math.random() * 3);
    return options[randIndx];
};

reset.addEventListener(("click") , () => {
    display.innerText = "Result is shown here!!";
    pselected.innerText = "";
    cselected.innerText = "";
    pcount.innerText = "0";
    ccount.innerText = "0";
    userScore = 0;
    compScore = 0;
});