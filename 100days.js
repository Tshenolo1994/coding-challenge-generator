const challengeArray = [
    "Guess the color game.",
    "Build a responsive landing page.",
    "Build a Javascript Login authentication.",
    "Make a navigation bar with animated active links.",
    "Build a restaurant tip calculator.",
    "Create a quiz.",
    "Build an event countdown.",
    "Change background color with a button.",
    "Build a slider with animation.",

    "Build a 'daily quote' generator"
];
  var randomChallenge = Math.floor(Math.random() * challengeArray.length);
  var challenge = challengeArray[randomChallenge];
  
  $(".go-button").on("click", start);
  $(".decline-button").on("click", newChallenge);
  $(".accept-button").on("click", chooseChallenge);
  $(".previous").on("click", back);
  
  function start() {
    const displayChallenge = document.querySelector("#challengeDescription");
    displayChallenge.textContent = challenge;
    const intro = document.querySelector(".introduction");
    intro.style.display = "none";
    const heading = document.querySelector("#greeting");
    heading.textContent = "Challenge: ";
    const startButton = document.querySelector(".go-button");
    startButton.style.display = "none";
    const sourceCode = document.querySelector(".link");
    if(challenge === challengeArray[0]) {
        sourceCode.href = "https://codepen.io/pa_patki/full/dmqPyd";
      } else if(challenge === challengeArray[1]) {
        sourceCode.href = "https://codepen.io/alexdevero/full/Vpozxq";
      } else if(challenge === challengeArray[2]) {
        sourceCode.href = "https://codepen.io/ehermanson/pen/KwKWEv";
      } else if(challenge === challengeArray[3]) {
        sourceCode.href = "https://codepen.io/hayzey/full/LNzwVO";
      } else if(challenge === challengeArray[4]) {
        sourceCode.href = "https://codepen.io/cphemm/pen/reNwWd";
      } else if(challenge === challengeArray[5]) {
        sourceCode.href = "https://codepen.io/rashidnaushad/pen/VaKMBJ";
      } else if(challenge === challengeArray[6]) {
        sourceCode.href = "https://codepen.io/AndrewSuckling/full/eQOyZq";
      } else if (challenge === challengeArray[7]) {
        sourceCode.href =
          "https://github.com/romeojeremiah/hex-color-background-project";
      } 
      else if(challenge === challengeArray[8]) {
        sourceCode.href = "https://codepen.io/zuraizm/pen/vGDHl";
      } 
      else if(challenge === challengeArray[9]) {
        sourceCode.href = "https://codepen.io/zuraizm/full/vGDHl";
      }
      else {
        sourceCode.href = "https://codepen.io/kkoutoup/pen/zxmGLE";
      }
  }
  
  function newChallenge() {
    randomChallenge = Math.floor(Math.random() * challengeArray.length);
    challenge = challengeArray[randomChallenge];
    const displayChallenge = document.querySelector("#challengeDescription");
    displayChallenge.textContent = challenge;
    start();
  }
  
   function chooseChallenge() {
   
    const buttons = document.querySelectorAll("button");
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].style.display = "none";
    }
     const sourceCode = document.querySelector(".link");
   sourceCode.style.display = "block";
     const heading = document.querySelector("#greeting");
    heading.textContent = "Your chosen challenge is: ";
    document.getElementById("challengeDescription").style.fontWeight = "700";
    document.getElementById("challengeDescription").style.fontSize = "x-large";
    const goBack = document.querySelector(".previous");
     goBack.style.display = "block";
   
  };
  
  function back() {
    const goBack = (document.getElementById("arrow").style.display = "none");
    const buttons = document.querySelectorAll("button");
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].style.display = "block";
    }
    const sourceCode = document.querySelector(".link");
   sourceCode.style.display = "none";
    document.getElementById("challengeDescription").style.fontWeight = "normal";
    document.getElementById("challengeDescription").style.fontSize = "initial";
    start();
  }
  