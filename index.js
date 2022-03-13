// element class and array
elementClasses = [];
class Element {
    constructor(number, name, symbol, mass, period, group, type) {
        this.number = number;
        this.name = name;
        this.symbol = symbol;
        this.mass = mass;
        this.period = period;
        this.group = group;
        this.type = type;
        elementClasses.push(this);
    }
}

// list of individual elements
H = new Element('1', 'Hydrogen', 'H', '1.007', '1', '1', 'Nonmetal');
He = new Element('2', 'Helium', 'He', '4.002', '1', '18', 'Noble Gas');
Li = new Element('3', 'Lithium', 'Li', '6.941', '2', '1', 'Alkali Metal');
Be = new Element('4', 'Beryllium', 'Be', '9.012', '2', '2', 'Alkaline Earth Metal');
B = new Element('5', 'Boron', 'B', '10.811', '2', '13', 'Metalloid');
C = new Element('6', 'Carbon', 'C', '12.011', '2', '14', 'Nonmetal');
N = new Element('7', 'Nitrogen', 'N', '14.007', '2', '15', 'Nonmetal');
O = new Element('8', 'Oxygen', 'O', '15.999', '2', '16', 'Nonmetal');
F = new Element('9', 'Fluorine', 'F', '18.998', '2', '17', 'Halogen');
Ne = new Element('10', 'Neon', 'Ne', '20.18', '2', '18', 'Noble Gas');
Na = new Element('11', 'Sodium', 'Na', '22.99', '3', '1', 'Alkali Metal');
Mg = new Element('12', 'Magnesium', 'Mg', '24.305', '3', '2', 'Alkaline Earth Metal');
Al = new Element('13', 'Aluminum', 'Al', '26.982', '3', '13', 'Metal');
Si = new Element('14', 'Silicon', 'Si', '28.086', '3', '14', 'Metalloid');
P = new Element('15', 'Phosphorus', 'P', '30.974', '3', '15', 'Nonmetal');
S = new Element('16', 'Sulfur', 'S', '32.065', '3', '16', 'Nonmetal');
Cl = new Element('17', 'Chlorine', 'Cl', '35.453', '3', '17', 'Halogen');
Ar = new Element('18', 'Argon', 'Ar', '39.948', '3', '18', 'Noble Gas');
K = new Element('19', 'Potassium', 'K', '39.098', '4', '1', 'Alkali Metal');
Ca = new Element('20', 'Calcium', 'Ca', '40.078', '4', '2', 'Alkaline Earth Metal');
Sc = new Element('21', 'Scandium', 'Sc', '44.956', '4', '3', 'Transition Metal');
Ti = new Element('22', 'Titanium', 'Ti', '47.867', '4', '4', 'Transition Metal');
V = new Element('23', 'Vanadium', 'V', '50.942', '4', '5', 'Transition Metal');
Cr = new Element('24', 'Chromium', 'Cr', '51.996', '4', '6', 'Transition Metal');
Mn = new Element('25', 'Manganese', 'Mn', '54.938', '4', '7', 'Transition Metal');
Fe = new Element('26', 'Iron', 'Fe', '55.845', '4', '8', 'Transition Metal');
Co = new Element('27', 'Cobalt', 'Co', '58.933', '4', '9', 'Transition Metal');
Ni = new Element('28', 'Nickel', 'Ni', '58.693', '4', '10', 'Transition Metal');
Cu = new Element('29', 'Copper', 'Cu', '63.546', '4', '11', 'Transition Metal');
Zn = new Element('30', 'Zinc', 'Zn', '65.38', '4', '12', 'Transition Metal');
Ga = new Element('31', 'Gallium', 'Ga', '69.723', '4', '13', 'Metal');
Ge = new Element('32', 'Germanium', 'Ge', '72.64', '4', '14', 'Metalloid');
As = new Element('33', 'Arsenic', 'As', '74.922', '4', '15', 'Metalloid');
Se = new Element('34', 'Selenium', 'Se', '78.96', '4', '16', 'Nonmetal');
Br = new Element('35', 'Bromine', 'Br', '79.904', '4', '17', 'Halogen');
Kr = new Element('36', 'Krypton', 'Kr', '83.798', '4', '18', 'Noble Gas');
Rb = new Element('37', 'Rubidium', 'Rb', '85.468', '5', '1', 'Alkali Metal');
Sr = new Element('38', 'Strontium', 'Sr', '87.62', '5', '2', 'Alkaline Earth Metal');
Y = new Element('39', 'Yttrium', 'Y', '88.906', '5', '3', 'Transition Metal');
Zr = new Element('40', 'Zirconium', 'Zr', '91.224', '5', '4', 'Transition Metal');
Nb = new Element('41', 'Niobium', 'Nb', '92.906', '5', '5', 'Transition Metal');
Mo = new Element('42', 'Molybdenum', 'Mo', '95.96', '5', '6', 'Transition Metal');
Tc = new Element('43', 'Technetium', 'Tc', '98', '5', '7', 'Transition Metal');
Ru = new Element('44', 'Ruthenium', 'Ru', '101.07', '5', '8', 'Transition Metal');
Rh = new Element('45', 'Rhodium', 'Rh', '102.906', '5', '9', 'Transition Metal');
Pd = new Element('46', 'Palladium', 'Pd', '106.42', '5', '10', 'Transition Metal');
Ag = new Element('47', 'Silver', 'Ag', '107.868', '5', '11', 'Transition Metal');
Cd = new Element('48', 'Cadmium', 'Cd', '112.411', '5', '12', 'Transition Metal');
In = new Element('49', 'Indium', 'In', '114.818', '5', '13', 'Metal');
Sn = new Element('50', 'Tin', 'Sn', '118.71', '5', '14', 'Metal');
Sb = new Element('51', 'Antimony', 'Sb', '121.76', '5', '15', 'Metalloid');
Te = new Element('52', 'Tellurium', 'Te', '127.6', '5', '16', 'Metalloid');
I = new Element('53', 'Iodine', 'I', '126.904', '5', '17', 'Halogen');
Xe = new Element('54', 'Xenon', 'Xe', '131.293', '5', '18', 'Noble Gas');
Cs = new Element('55', 'Cesium', 'Cs', '132.905', '6', '1', 'Alkali Metal');
Ba = new Element('56', 'Barium', 'Ba', '137.327', '6', '2', 'Alkaline Earth Metal');
La = new Element('57', 'Lanthanum', 'La', '138.905', '6', '3', 'Lanthanide');
// bottom row lanthanides given inaccurate period & group numbers purely for distance calculation
Ce = new Element('58', 'Cerium', 'Ce', '140.116', '8', '3', 'Lanthanide');
Pr = new Element('59', 'Praseodymium', 'Pr', '140.908', '8', '4', 'Lanthanide');
Nd = new Element('60', 'Neodymium', 'Nd', '144.242', '8', '5', 'Lanthanide');
Pm = new Element('61', 'Promethium', 'Pm', '145', '8', '6', 'Lanthanide');
Sm = new Element('62', 'Samarium', 'Sm', '150.36', '8', '7', 'Lanthanide');
Eu = new Element('63', 'Europium', 'Eu', '151.964', '8', '8', 'Lanthanide');
Gd = new Element('64', 'Gadolinium', 'Gd', '157.25', '8', '9', 'Lanthanide');
Tb = new Element('65', 'Terbium', 'Tb', '158.925', '8', '10', 'Lanthanide');
Dy = new Element('66', 'Dysprosium', 'Dy', '162.5', '8', '11', 'Lanthanide');
Ho = new Element('67', 'Holmium', 'Ho', '164.93', '8', '12', 'Lanthanide');
Er = new Element('68', 'Erbium', 'Er', '167.259', '8', '13', 'Lanthanide');
Tm = new Element('69', 'Thulium', 'Tm', '168.934', '8', '14', 'Lanthanide');
Yb = new Element('70', 'Ytterbium', 'Yb', '173.054', '8', '15', 'Lanthanide');
Lu = new Element('71', 'Lutetium', 'Lu', '174.967', '8', '16', 'Lanthanide');
Hf = new Element('72', 'Hafnium', 'Hf', '178.49', '6', '4', 'Transition Metal');
Ta = new Element('73', 'Tantalum', 'Ta', '180.948', '6', '5', 'Transition Metal');
W = new Element('74', 'Tungsten', 'W', '183.84', '6', '6', 'Transition Metal');
Re = new Element('75', 'Rhenium', 'Re', '186.207', '6', '7', 'Transition Metal');
Os = new Element('76', 'Osmium', 'Os', '190.23', '6', '8', 'Transition Metal');
Ir = new Element('77', 'Iridium', 'Ir', '192.217', '6', '9', 'Transition Metal');
Pt = new Element('78', 'Platinum', 'Pt', '195.084', '6', '10', 'Transition Metal');
Au = new Element('79', 'Gold', 'Au', '196.967', '6', '11', 'Transition Metal');
Hg = new Element('80', 'Mercury', 'Hg', '200.59', '6', '12', 'Transition Metal');
Tl = new Element('81', 'Thallium', 'Tl', '204.383', '6', '13', 'Metal');
Pb = new Element('82', 'Lead', 'Pb', '207.2', '6', '14', 'Metal');
Bi = new Element('83', 'Bismuth', 'Bi', '208.98', '6', '15', 'Metal');
Po = new Element('84', 'Polonium', 'Po', '210', '6', '16', 'Metalloid');
At = new Element('85', 'Astatine', 'At', '210', '6', '17', 'Noble Gas');
Rn = new Element('86', 'Radon', 'Rn', '222', '6', '18', 'Alkali Metal');
Fr = new Element('87', 'Francium', 'Fr', '223', '7', '1', 'Alkaline Earth Metal');
Ra = new Element('88', 'Radium', 'Ra', '226', '7', '2', 'Actinide');
Ac = new Element('89', 'Actinium', 'Ac', '227', '7', '3', 'Actinide');
// bottom row actinides given inaccurate period & group numbers purely for distance calculation
Th = new Element('90', 'Thorium', 'Th', '232.038', '9', '3', 'Actinide');
Pa = new Element('91', 'Protactinium', 'Pa', '231.036', '9', '4', 'Actinide');
U = new Element('92', 'Uranium', 'U', '238.029', '9', '5', 'Actinide');
Np = new Element('93', 'Neptunium', 'Np', '237', '9', '6', 'Actinide');
Pu = new Element('94', 'Plutonium', 'Pu', '244', '9', '7', 'Actinide');
Am = new Element('95', 'Americium', 'Am', '243', '9', '8', 'Actinide');
Cm = new Element('96', 'Curium', 'Cm', '247', '9', '9', 'Actinide');
Bk = new Element('97', 'Berkelium', 'Bk', '247', '9', '10', 'Actinide');
Cf = new Element('98', 'Californium', 'Cf', '251', '9', '11', 'Actinide');
Es = new Element('99', 'Einsteinium', 'Es', '252', '9', '12', 'Actinide');
Fm = new Element('100', 'Fermium', 'Fm', '257', '9', '13', 'Actinide');
Md = new Element('101', 'Mendelevium', 'Md', '258', '9', '14', 'Actinide');
No = new Element('102', 'Nobelium', 'No', '259', '9', '15', 'Actinide');
Lr = new Element('103', 'Lawrencium', 'Lr', '262', '9', '16', 'Actinide');
Rf = new Element('104', 'Rutherfordium', 'Rf', '261', '7', '4', 'Transactinide');
Db = new Element('105', 'Dubnium', 'Db', '262', '7', '5', 'Transactinide');
Sg = new Element('106', 'Seaborgium', 'Sg', '266', '7', '6', 'Transactinide');
Bh = new Element('107', 'Bohrium', 'Bh', '264', '7', '7', 'Transactinide');
Hs = new Element('108', 'Hassium', 'Hs', '267', '7', '8', 'Transactinide');
Ds  = new Element('110', 'Darmstadtium ', 'Ds', '271', '7', '10', 'Transactinide');
Mt = new Element('109', 'Meitnerium', 'Mt', '268', '7', '9', 'Transactinide');
Rg  = new Element('111', 'Roentgenium ', 'Rg', '272', '7', '11', 'Transactinide');
Cn  = new Element('112', 'Copernicium ', 'Cn', '285', '7', '12', 'Transactinide');
Nh = new Element('113', 'Nihonium', 'Nh', '284', '7', '13', '');
Fl = new Element('114', 'Flerovium', 'Fl', '289', '7', '14', 'Transactinide');
Mc = new Element('115', 'Moscovium', 'Mc', '288', '7', '15', '');
Lv = new Element('116', 'Livermorium', 'Lv', '292', '7', '16', 'Transactinide');
Ts = new Element('117', 'Tennessine', 'Ts', '295', '7', '17', '');
Og = new Element('118', 'Oganesson', 'Og', '294', '7', '18', 'Noble Gas');

// global variables and game start
let maxDistance = 0;
let gameActive = true;
let targetElement;
let proportionalDistance;
let clickedElement;
let clickedElements = [0];
let repeatElement = false;
let guessesNumber = 0;
let guessesNumberList = [];
let correctGuesses = 0;
let correctGuessesList = [];
let averageGuesses = 0;
let elementDivs = document.querySelectorAll(".element");
if (gameActive) {
    generateTargetElement();
}

// randomly generate and display target element
function generateTargetElement() {
    targetElement = elementClasses[Math.floor((Math.random() * 118) + 1)];
    document.getElementById("target").innerHTML = "Target Element: " + String(targetElement.name);
    findMaxDistance(targetElement.symbol);
}
// calculates maximum distance from target element
function findMaxDistance(target) {
    elementDivs.forEach(function(div) {
        let xMaxDistance = Math.abs(window[div.id].group - window[target].group);
        let yMaxDistance = Math.abs(window[div.id].period - window[target].period);
        let testDistance = Math.sqrt(xMaxDistance ** 2 + yMaxDistance ** 2);
        if (testDistance >= maxDistance) {
            maxDistance = testDistance;
        }   
    });
}

// add element click event
elementDivs.forEach(function(div) {
    div.addEventListener("click", function() {
        repeatElement = false;
        clickedElements.forEach(function(element) {
            if (element === div.id) {
                repeatElement = true;
            }
        });

        if (repeatElement === false) {
            clickedElements.push(div.id);
        }

        let sym = String(div.id) + "-symbol";
        if (gameActive === true && repeatElement === false) {
            guessesNumber++;
            document.getElementById("guesses").innerHTML = "Guesses: " + guessesNumber;
            let sym = String(div.id) + "-symbol";
            window[sym].innerHTML = div.id;
            if (div.id === targetElement.symbol) {
                correctGuess(div);
            } else {
                checkTargetDistance(div.id);
                incorrectGuess(div);
            }
        }
    });
});

// check distance from target element
function checkTargetDistance(id) {
    let xDistance = Math.abs(window[id].group - targetElement.group);
    let yDistance = Math.abs(window[id].period - targetElement.period);
    let distance = Math.sqrt(xDistance ** 2 + yDistance ** 2);
    proportionalDistance = distance / maxDistance;
}

// incorrect guess
function incorrectGuess(incorrectDiv) {
    incorrectDiv.style.backgroundColor = "rgb(" + String(1 - proportionalDistance) * 255 + ", 0, " + String(proportionalDistance) * 255 + ")";
}

// correct guess
function correctGuess(correctDiv) {
    correctDiv.style.backgroundColor = "rgb(0, 200, 0)";
    correctGuesses++;
    correctGuessesList.push(window[correctDiv.id].name);
    guessesNumberList.push(guessesNumber);
    findAverageGuesses();
    updateGuessesList(correctDiv);    
    openStats();
    gameActive = false;
}

// find average guesses
function findAverageGuesses() {
    let totalGuesses = 0;
    guessesNumberList.forEach(function(number) {
        totalGuesses += number;
    });
    averageGuesses = totalGuesses/guessesNumberList.length;
}

// update guesses list after correct guess
function updateGuessesList(element) {
    let listNode = document.createElement("li");
    let textNode;
    if (guessesNumber === 1) {
        textNode = document.createTextNode("You got " + window[element.id].name + " in " + guessesNumber + " guess!");
    } else {
        console.log("yes");
        textNode = document.createTextNode("You got " + window[element.id].name + " in " + guessesNumber + " guesses.");
    }
    listNode.appendChild(textNode);
    document.getElementById("stats-popup-guesses-list").appendChild(listNode);

    if (correctGuesses === 1) {
        document.getElementById("stats-popup-total-guesses").innerHTML = "You've guessed the ELEMENTLE " + correctGuesses + " time.";
    } else {
        document.getElementById("stats-popup-total-guesses").innerHTML = "You've guessed the ELEMENTLE " + correctGuesses + " times.";
    }

    if (averageGuesses === 1) {
        document.getElementById("stats-popup-average-guesses").innerHTML = "It takes you an average of " + averageGuesses + " guess to find the ELEMENTLE.";
    } else {
        document.getElementById("stats-popup-average-guesses").innerHTML = "It takes you an average of " + averageGuesses + " guesses to find the ELEMENTLE.";
    }
}

// open help popup
function openHelp() {document.getElementById("help-popup").style.display = "block";}
document.getElementById("help").onclick = function() {
    openHelp();
}

// close help popup
document.getElementById("help-close").onclick = function() {
    document.getElementById("help-popup").style.display = "none";
}

// open stats popup
function openStats() {document.getElementById("stats-popup").style.display = "block";}
document.getElementById("stats").onclick = function() {
    openStats();
}

// close stats popup
document.getElementById("stats-close").onclick = function() {
    document.getElementById("stats-popup").style.display = "none";
}

// reset game when refresh button is clicked
document.getElementById("refresh").onclick = function() {
    gameActive = true;
    guessesNumber = 0;
    document.getElementById("guesses").innerHTML = "Guesses: " + guessesNumber;
    maxDistance = 0;
    generateTargetElement();
    elementDivs.forEach(function(div) {
        let sym = div.id + "-symbol";
        console.log(window[sym]);
        window[sym].innerHTML = "?";
        div.style.backgroundColor = "#121213";
    });
}