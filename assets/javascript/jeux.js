var userChoice;
var radioButtons = document.getElementsByName("choice");

console.log(radioButtons)
    if (radioButtons.checked) {
        userChoice = radioButtons.className;
        console.log(userChoice);
    }
    

let options = ["rock", "paper", "scissor", "lizard", "spock"];



// Jouer un son
// paper = document.getElementsById("paper")
// paperSong = document.getEmentById("testAudio")

// paper.addEventListener("click", function() {
//   paperSong.play();
// });


playButton = document.getElementById("paper", "rock");
audio = new Audio("/song/all-sheep-sounds-minecraft-sound-effect-for-editing.mp3");
audio2 = new Audio("/song/lose-sound.mp3");
audio3 = new Audio("/song/win-sound.mp3");

playButton.addEventListener("click", function() {
  audio.play();
});


// --Save

// let saveScoreJoueur = localStorage.setItem('ScoreJoueur', UserScore);
// let saveScoreComputer = localStorage.setItem('ScoreOrdinateur', ComputerScore);

// let getScoreJoueur = localStorage.getItem('ScoreJoueur');
// let getScoreComputer = localStorage.getItem('ScoreOrdinateur');

// let cleanScore = localStorage.clear();


userScore = 1;
computerScore = 1;
roundNumber = 2;

document.getElementById("rock").addEventListener("click", function (){
  userChoice = "rock";
  document.getElementById("choise-user").src = "/assets/img/stone.svg";
  console.log(userChoice)
});

document.getElementById("paper").addEventListener("click", function (){
  userChoice = "paper";
  document.getElementById("choise-user").src = "/assets/img/paper.svg";
  console.log(userChoice)
});

document.getElementById("scissor").addEventListener("click", function (){
  userChoice = "scissor";
  document.getElementById("choise-user").src = "/assets/img/scissors.svg";
  console.log(userChoice)
});

document.getElementById("lizard").addEventListener("click", function (){
  userChoice = "lizard";
  document.getElementById("choise-user").src = "/assets/img/lizard.svg";
  console.log(userChoice)
});

document.getElementById("spocke").addEventListener("click", function (){
  userChoice = "spocke";
  document.getElementById("choise-user").src = "/assets/img/spocke.svg";
  console.log(userChoice)
});


var button = document.getElementById("launch").addEventListener("click", function startGame(){
  let computerChoice = options[Math.floor(Math.random() * options.length)];
  console.log(userChoice + "vs" + computerChoice)

  let nbRound = document.getElementById("nb-game");
  nbRound.innerHTML = "Manche n°" + roundNumber++;

  if (computerChoice == "paper") {
    document.getElementById("choise-computer").src = "/assets/img/paper.svg";
    console.log(computerChoice);
  } else if (computerChoice == "rock") {
    document.getElementById("choise-computer").src = "/assets/img/stone.svg";
    console.log(computerChoice);
  } else if (computerChoice == "scissor") {
    document.getElementById("choise-computer").src = "/assets/img/scissors.svg";
    console.log(computerChoice);
  } else if (computerChoice == "lizard") {
    document.getElementById("choise-computer").src = "/assets/img/lizard.svg";
    console.log(computerChoice);
  } else if (computerChoice == "spock") {
    document.getElementById("choise-computer").src = "/assets/img/spocke.svg";
    console.log(computerChoice);
  }

    if (userChoice === computerChoice) {
      let viewResult = document.getElementById("result");
      viewResult.innerHTML = "Égalité !"
    } else if (
      (userChoice === "rock" &&
        (computerChoice === "scissor" || computerChoice === "lizard")) ||
      (userChoice === "paper" &&
        (computerChoice === "rock" || computerChoice === "spock")) ||
      (userChoice === "scissor" &&
        (computerChoice === "paper" || computerChoice === "lizard")) ||
      (userChoice === "lizard" &&
        (computerChoice === "paper" || computerChoice === "spock")) ||
      (userChoice === "spock" &&
        (computerChoice === "rock" || computerChoice === "scissor"))
    ) {
      audio3.play();
      let scoreUser = document.getElementById("userScore");
      scoreUser.innerHTML = "Votre Score: " + userScore++;

      let viewResult = document.getElementById("result");
      viewResult.innerHTML = "Victoire !"
      } else {
        audio2.play();
        let scoreIa = document.getElementById("computerScore");
        scoreIa.innerHTML = "Score IA: " + computerScore++;

        let viewResult = document.getElementById("result");
      viewResult.innerHTML = "Défaite !";
      }})