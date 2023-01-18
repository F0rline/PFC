let userChoice='';

document.getElementById("buttonId").addEventListener("click", function(){
    userChoice=this.getAttribute('class');
    console.log(userChoice);
  });

let options = ["rock", "paper", "scissor", "lizard", "spock"];

let computerChoice = options[Math.floor(Math.getRandomInt(1, options.length + 1))];

if (userChoice === ''){
  console.log('not choosed yet');}
else {
    if (userChoice === computerChoice) {
  console.log("Egalité !");} 
    else if (
    (userChoice === "rock" && (computerChoice === "scissor" || computerChoice === "lizard")) || 
    (userChoice === "paper" && (computerChoice === "rock" || computerChoice === "spock")) || 
    (userChoice === "scissor" && (computerChoice === "paper" || computerChoice === "lizard")) || 
    (userChoice === "lizard" && (computerChoice === "paper" || computerChoice === "spock")) || 
    (userChoice === "spock" && (computerChoice === "rock" || computerChoice === "scissor"))
    ) {
    console.log("Vous avez gagné ! Votre choix était " + userChoice + " et celui de l'ordinateur était " + computerChoice);
    } else {
    console.log("Vous avez perdu ! Votre choix était " + userChoice + " et celui de l'ordinateur était " + computerChoice);
    }
}
