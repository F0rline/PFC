let userChoice = '';

// let saveScoreJoueur = localStorage.setItem('ScoreJoueur', UserScore);
// let saveScoreComputer = localStorage.setItem('ScoreOrdinateur', ComputerScore);

// let getScoreJoueur = localStorage.getItem('ScoreJoueur');
// let getScoreComputer = localStorage.getItem('ScoreOrdinateur');

// let cleanScore = localStorage.clear();



document.getElementById("rock").addEventListener("click", function(userChoice) {
  userChoice = "rock";
  console.log(userChoice);
});


document.getElementById("paper").addEventListener("click", function(userChoice) {
  userChoice = "paper";
  console.log(userChoice);
});


document.getElementById("scissor").addEventListener("click", function(userChoice) {
  userChoice = "scissor";
  console.log(userChoice);
});


document.getElementById("lizard").addEventListener("click", function(userChoice) {
  userChoice = "lizard";
  console.log(userChoice);
});


document.getElementById("spoke").addEventListener("click", function(userChoice) {
  userChoice = "spoke";
  console.log(userChoice);
});


let options = ["rock", "paper", "scissor", "lizard", "spock"];

let computerChoice = options[Math.floor(Math.random() * options.length)];

  if (userChoice === computerChoice) {
    console.log("Egalité !");
  } else if (
    (userChoice === "rock" && (computerChoice === "scissor" || computerChoice === "lizard")) ||
    (userChoice === "paper" && (computerChoice === "rock" || computerChoice === "spock")) ||
    (userChoice === "scissor" && (computerChoice === "paper" || computerChoice === "lizard")) ||
    (userChoice === "lizard" && (computerChoice === "paper" || computerChoice === "spock")) ||
    (userChoice === "spock" && (computerChoice === "rock" || computerChoice === "scissor"))
  ) {
    console.log("Vous avez gagné ! Votre choix était " + userChoice + " et celui de l'ordinateur était " + computerChoice);
    cleanScore
  } else {
    console.log("Vous avez perdu ! Votre choix était " + userChoice + " et celui de l'ordinateur était " + computerChoice);
    cleanScore
  }

