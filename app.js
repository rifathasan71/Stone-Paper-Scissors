let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const  uScore=document.querySelector("#userScore")
const  cScore=document.querySelector("#compScore")
const vs=document.querySelector("#action")
const vs2=document.querySelector("#action2")
const btn=document.querySelector("#btn")



const genChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const i = Math.floor(Math.random() * 3);
  return options[i];
};

const drawGame = () => {
  msg.innerText = "It's a Draw!";
  msg.style.backgroundColor = "#5D5F71";

};

const showWinner = (userWin) => {
  if (userWin === true) {
    msg.innerText = "Congratulations, you won!";
    msg.style.backgroundColor = "#D81E5B";
    userScore++;
    uScore.innerText=userScore;
  } else {
    msg.innerText = "You lose!";
    msg.style.backgroundColor = "red";
    compScore++;
    cScore.innerText=compScore;

  }
};

const playGame = (userChoice) => {
  const compChoice = genChoice();
  vs.innerHTML=`<b>${userChoice}</b>`
  vs2.innerHTML=`<b>${compChoice}</b>`
  if (compChoice === userChoice) {
    drawGame();
  }
  else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    }
    else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    }
    else {
      vs.style.color="sky blue";

      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice=choice.getAttribute("id")
    playGame(userChoice);
  });
});

const reset=()=>{
  userScore=0;
  compScore=0;
  uScore.innerText=userScore;
  cScore.innerText=compScore;


  }

btn.addEventListener("click",reset);

