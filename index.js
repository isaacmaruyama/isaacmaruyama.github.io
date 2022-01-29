let wordList = ["decade", "florid", "deride", "arcane", "arcade", "floral", "income", "alpaca", "paired", "parade", "scalds"];
let word = wordList[Math.floor(Math.random() * wordList.length)].toUpperCase();
let wordChar = word.split("");
let wordState = [[wordChar[0], wordChar[1]].join(""), [wordChar[2], wordChar[3]].join(""), [wordChar[4], wordChar[5]].join("")];

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
let inputReverse = false;
simplemaps_usmap.hooks.click_state = function(id){
    if (inputWord.length<6 && inputStates.length<3) {
        inputStates.push(id);
        let inputChar = id.split("");
        if (inputReverse == false) {
            inputWord.push(inputChar[0], inputChar[1]);
        } else {
            inputWord.push(inputChar[1], inputChar[0]);
        }
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

document.addEventListener("keyup", function(event) {
    if (event.key === "r" && inputReverse === false) {
        console.log("r");
        inputReverse = true;
        simplemaps_usmap_mapdata.main_settings.state_color = "#1a1a1b";
        simplemaps_usmap_mapdata.main_settings.label_color = "#ffffff";
        for (let i in simplemaps_usmap_mapdata.labels) {
            let labelChar = i.split("");
            let labelReverseChar = [];
            labelReverseChar.push(labelChar[1], labelChar[0]);
            let labelReverse = labelReverseChar.join("");
            simplemaps_usmap_mapdata.labels[i].name = labelReverse;
        }
    } else if (event.key === "r") {
        inputReverse = false;
        simplemaps_usmap_mapdata.main_settings.state_color = "#d3d6da";
        simplemaps_usmap_mapdata.main_settings.label_color = "#1a1a1b";
        for (let i in simplemaps_usmap_mapdata.labels) {
            simplemaps_usmap_mapdata.labels[i].name = simplemaps_usmap_mapdata.labels[i].parent_id;
        }
    }
    simplemaps_usmap.refresh();
})


window.addEventListener("keyup", function(event) {
    if (event.key === "Enter" && inputWord.length === 6) {
        event.preventDefault();
        checkInput();
    }
});
