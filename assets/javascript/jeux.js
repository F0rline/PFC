let options = ["pierre", "feuille", "ciseaux", "lézard", "spock"];

let playerChoice = prompt("Choisissez pierre, feuille, ciseaux, lézard ou spock :");

let computerChoice = options[Math.floor(Math.random() * options.length)];

if (playerChoice === computerChoice) {
  console.log("Egalité !");
} else if (
  (playerChoice === "pierre" && (computerChoice === "ciseaux" || computerChoice === "lézard")) || 
  (playerChoice === "feuille" && (computerChoice === "pierre" || computerChoice === "spock")) || 
  (playerChoice === "ciseaux" && (computerChoice === "feuille" || computerChoice === "lézard")) || 
  (playerChoice === "lézard" && (computerChoice === "feuille" || computerChoice === "spock")) || 
  (playerChoice === "spock" && (computerChoice === "pierre" || computerChoice === "ciseaux"))
) {
  console.log("Vous avez gagné ! Votre choix était " + playerChoice + " et celui de l'ordinateur était " + computerChoice);
} else {
  console.log("Vous avez perdu ! Votre choix était " + playerChoice + " et celui de l'ordinateur était " + computerChoice);
}
