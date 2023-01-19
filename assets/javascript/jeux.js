var userChoice;
var radioButtons = document.getElementsByName("choice");
var i = 0;
let victoryStat;
let allGameStat;
console.log(radioButtons);
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


playButtonPaper = document.getElementById("paper");

playButtonPaper.addEventListener("click", function() {
  audioPaper = new Audio("/assets/song/paper-song-effect.mp3");
  audioPaper.play()
});

playButtonRock = document.getElementById("rock");

playButtonRock.addEventListener("click", function() {
  audioRock = new Audio("/assets/song/stone-song-effect.mp3");
  audioRock.play()
});

playButtonScissor = document.getElementById("scissor");

playButtonScissor.addEventListener("click", function() {
  audioScissors = new Audio("/assets/song/scissors-song-effect.mp3");
  audioScissors.play()
});

playButtonLizard = document.getElementById("lizard");

playButtonLizard.addEventListener("click", function() {
  audioLizard = new Audio("/assets/song/lizard-song-effect.mp3");
  audioLizard.play()
});


playButtonSpocke = document.getElementById("spocke");

playButtonSpocke.addEventListener("click", function() {
  audioSpocke = new Audio("/assets/song/spoke-song-effect.mp3");
  audioSpocke.play()
});


// --Save

saveScore = localStorage.setItem('User Score', userScore);
console.log(saveScore)

// let saveScoreJoueur = localStorage.setItem('ScoreJoueur', UserScore);
// let saveScoreComputer = localStorage.setItem('ScoreOrdinateur', ComputerScore);

// let getScoreJoueur = localStorage.getItem('ScoreJoueur');
// let getScoreComputer = localStorage.getItem('ScoreOrdinateur');

// let cleanScore = localStorage.clear();



userScore = 1;
computerScore = 1;
roundNumber = 2;

document.getElementById("rock").addEventListener("click", function () {
  userChoice = "rock";
  document.getElementById("choise-user").src = "/assets/img/stone.svg";
  console.log(userChoice);
});

document.getElementById("paper").addEventListener("click", function () {
  userChoice = "paper";
  document.getElementById("choise-user").src = "/assets/img/paper.svg";
  console.log(userChoice);
});

document.getElementById("scissor").addEventListener("click", function () {
  userChoice = "scissor";
  document.getElementById("choise-user").src = "/assets/img/scissors.svg";
  console.log(userChoice);
});

document.getElementById("lizard").addEventListener("click", function () {
  userChoice = "lizard";
  document.getElementById("choise-user").src = "/assets/img/lizard.svg";
  console.log(userChoice);
});

document.getElementById("spocke").addEventListener("click", function () {
  userChoice = "spocke";
  document.getElementById("choise-user").src = "/assets/img/spocke.svg";
  console.log(userChoice);
});


  let nbRound = document.getElementById("nb-game");
  nbRound.innerHTML = "Manche n°" + roundNumber++;

var button = document
  .getElementById("launch")
  .addEventListener("click", function startGame() {
    let computerChoice = options[Math.floor(Math.random() * options.length)];
      console.log(userChoice + "vs" + computerChoice);
      if (computerChoice == "paper") {
        document.getElementById("choise-computer").src = "/assets/img/paper.svg";
        console.log(computerChoice);
      } else if (computerChoice == "rock") {
        document.getElementById("choise-computer").src = "/assets/img/stone.svg";
        console.log(computerChoice);
      } else if (computerChoice == "scissor") {
        document.getElementById("choise-computer").src =
          "/assets/img/scissors.svg";
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
        viewResult.innerHTML = "Égalité !";
      } else if (
        (userChoice === "rock" &&
          (computerChoice === "scissor" || computerChoice === "lizard")) ||
        (userChoice === "paper" &&
          (computerChoice === "rock" || computerChoice === "spock")) ||
        (userChoice === "scissor" &&
          (computerChoice === "paper" || computerChoice === "lizard")) ||
        (userChoice === "lizard" &&
          (computerChoice === "paper" || computerChoice === "spock")) ||
        (userChoice === "spocke" &&
          (computerChoice === "rock" || computerChoice === "scissor"))
      ) {
        audio3.play();
      let scoreUser = document.getElementById("userScore");
        scoreUser.innerHTML = "Votre Score: " + userScore++;
        i = i++;

        let viewResult = document.getElementById("result");
        viewResult.innerHTML = "Victoire !";
        i = i++;
      } else {
        audio2.play();
        let scoreIa = document.getElementById("computerScore");
        scoreIa.innerHTML = "Score IA: " + computerScore++;

        let viewResult = document.getElementById("result");
        viewResult.innerHTML = "Défaite !";
        i = i++;;
      }
  });

var button = document
  .getElementById("restart")
  .addEventListener("click", function restartGame() {
    victoryStat = victoryStat + userScore;
    allGameStat = allGameStat + userScore + computerScore;

    userScore = 0;
    let scoreUser = document.getElementById("userScore");
    scoreUser.innerHTML = "Votre Score: 0";

    computerScore = 0;
    let scoreIa = document.getElementById("computerScore");
    scoreIa.innerHTML = "Score IA: 0";

    document.getElementById("choise-computer").src="/assets/img/placeholder.svg";
    document.getElementById("choise-user").src="/assets/img/placeholder.svg";
  });