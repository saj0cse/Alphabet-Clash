// hidden section
function hiddenSection(getId) {
  const getUnHiddenSection = document.getElementById(getId);
  return getUnHiddenSection.classList.add("hidden");
}

// unhidden section
function unHiddenSection(getId) {
  const getHideSection = document.getElementById(getId);
  return getHideSection.classList.remove("hidden");
}

// get string or create string
function getRandomAlphabet() {
  const alphabetList = "abcdefghijklmnopqrstuvwxyz";
  const alphabetArray = alphabetList.split("");

  // create random number
  const randomNumber = Math.random() * 25;
  const randomIndex = Math.round(randomNumber);

  const randomAlphabet = alphabetArray[randomIndex];
  return randomAlphabet;
}

// set kbd bg
function setKbdBg(elementId) {
  const kbdBg = document.getElementById(elementId);
  kbdBg.classList.add("bg-orange-400");
}
// remove kbd bg
function removeKbdBg(elementId) {
  const kbdBg = document.getElementById(elementId);
  kbdBg.classList.remove("bg-orange-400");
}

// current display alphabet
function currentDisplayAlphabet() {
  const displayAlphabet = document.getElementById("display_alphabet");
  return displayAlphabet;
}

// set random alphabet display
function continueGame() {
  const alphabetRandom = getRandomAlphabet();
  currentDisplayAlphabet().innerText = alphabetRandom;
  setKbdBg(alphabetRandom);
}

// getTextElementByID
function getTextElementByID(elementId) {
  const getTextElement = document.getElementById(elementId);
  const getTextElementStringValue = getTextElement.innerText;
  const getTextElementValue = parseInt(getTextElementStringValue);
  return getTextElementValue;
}

// setScore or life
function setValueById(elementId, value) {
  const getTextElement = document.getElementById(elementId);
  getTextElement.innerText = value;
}

// get kbd press key get function
function getKbdPressKey(event) {
  const kbdPressKey = event.key;

  // expected key from display
  const currentAlphabet = currentDisplayAlphabet().innerText.toLowerCase();
  if (kbdPressKey === "Escape") {
    gameOVer();
  }

  // condition check kbdPressKey VS currentAlphabet
  if (kbdPressKey === currentAlphabet) {
    removeKbdBg(kbdPressKey); // change kbd bg
    // update score
    const updateScore = getTextElementByID("score-id") + 1;
    setValueById("score-id", updateScore);

    continueGame(); // game continue looping
  } else {
    // update life
    const updateLife = getTextElementByID("life-id") - 1;
    setValueById("life-id", updateLife);

    // check condition
    if (updateLife === 0) {
        gameOVer();
    }
  }
}
document.addEventListener("keyup", getKbdPressKey);

// Play Now button function
function playNow() {
  hiddenSection("play_now");
  unHiddenSection("play_ground");
  continueGame();
}

function gameOVer() {
  hiddenSection("play_ground");
  //   update final score
  const lastScore = getTextElementByID("score-id");
  console.log(lastScore);
  setValueById("score_result", lastScore);
  unHiddenSection("game_over_score");
}

function playAgain() {
  hiddenSection("play_now");
  hiddenSection("game_over_score");
  setValueById("life-id", 5);
  setValueById("score-id", 0);
  unHiddenSection("play_ground");
}
