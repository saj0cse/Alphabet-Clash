// hidden section 
function hiddenSection(getId){
    const getunHiddenSection = document.getElementById(getId);
    return getunHiddenSection.classList.add('hidden');
}

// unhidden section 
function unHiddenSection(getId){
    const getHideSection = document.getElementById(getId);
   return getHideSection.classList.remove('hidden');
}

// get string or create string 
function getRandomAlphabet(){
    const alphabetList = 'abcdefghijklmnopqrstuvwxyz';
    const alphabetArrary = alphabetList.split('');

    // create random number 
    const randomNumber = Math.random() *25;
    const randomIndex = Math.round(randomNumber);

    const randomAlphabet = alphabetArrary[randomIndex];
    return randomAlphabet;
}


// set kbd bg 
function setKbdBg(elementId){
    const kbdBg = document.getElementById(elementId);
    kbdBg.classList.add('bg-orange-400');
}
    



// button function 
function playNow(){
    hiddenSection('play_now');
    unHiddenSection('continue_game');

    const alphabetRandom = getRandomAlphabet();
    const displayAlphabet = document.getElementById('display_alphabet');
    displayAlphabet.innerText = alphabetRandom;
    setKbdBg(alphabetRandom);
}