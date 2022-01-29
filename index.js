let wordList = ["decade", "florid", "deride", "arcane", "arcade", "floral", "income", "alpaca"];
let word = wordList[Math.floor(Math.random() * wordList.length)].toUpperCase();
let wordChar = word.split("");
let wordState = [[wordChar[0], wordChar[1]].join(""), [wordChar[2], wordChar[3]].join(""), [wordChar[4], wordChar[5]].join("")];

simplemaps_usmap_mapdata.state_specific['GA'].id='red';


let nxtBox = 1;
function checkInput() {
    for (let i=0; i<inputWord.length; i++) {
        let noCharMatch = true;
        boxNum = i+nxtBox+'';
        if (inputWord[i] === wordChar[i]) {
            document.getElementById(boxNum).style.backgroundColor ="#6aaa64";
        } else {
            for (let j=0; j<wordChar.length; j++) {
                if (inputWord[i] === wordChar[j]) {
                    noCharMatch = false;
                    document.getElementById(boxNum).style.backgroundColor ="#c9b458";
                }
            }
            if (noCharMatch === true) {
                document.getElementById(boxNum).style.backgroundColor = "#787c7e";
            }
        } 
    }
    for (let i=0; i<inputStates.length; i++) {
        let noStateMatch = true;
        if (inputStates[i] === wordState[i]) {
            simplemaps_usmap_mapdata.state_specific[inputStates[i]].color ="#6aaa64";
            
        } else {
            for (let j=0; j<wordState.length; j++) {
                if (inputStates[i] === wordState[j]) {
                    noStateMatch = false;
                    simplemaps_usmap_mapdata.state_specific[inputStates[i]].color ="#c9b458";
                }
            }
            if (noStateMatch === true) {
                simplemaps_usmap_mapdata.state_specific[inputStates[i]].color="#787c7e";
            }
        }
    }
    nxtBox += 6;
    console.log(nxtBox);
    inputStates = [];
    inputWord = [];
    simplemaps_usmap.refresh();
}

let inputStates = [];
let inputWord = []
simplemaps_usmap.hooks.click_state = function(id){
    if (inputWord.length<6 && inputStates.length<3) {
        inputStates.push(id);
        let inputChar = id.split("");
        inputWord.push(inputChar[0], inputChar[1]);
        logInput(); 
    } 
}

function logInput() {
    for (let i = 0; i<6; i++) {
        document.getElementById(nxtBox+i).innerHTML = "";
    }
    for (let i = 0; i<inputWord.length; i++) {
        document.getElementById(nxtBox+i).innerHTML = inputWord[i];
    }
}

window.addEventListener("keyup", function(event) {
    if (event.key === "Backspace" && inputStates.length > 0) {
        inputWord = inputWord.slice(0, -2);
        inputStates = inputStates.slice(0, -1);
        logInput();
    }
})

window.addEventListener("keyup", function(event) {
    if (event.key === "Enter" && inputWord.length === 6) {
        event.preventDefault();
        checkInput();
    }
});
