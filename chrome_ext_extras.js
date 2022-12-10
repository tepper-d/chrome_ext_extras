"use strict";

/* 
CIS 124: Introduction to JavaScript
Module 6: Scrimba Exercises Part 2
Build a Chrome Extension, https://scrimba.com/playlist/pPD7Kt4
Practice Part 3, https://scrimba.com/playlist/pQgXphg
- - - C H A L L E N G E   E X E R C I S E S - - -
Dominique Tepper, 06DEC2022 */

/*
LESSON 25. WRITE YOUR FIRST TEMPLATE STRING
    Convert a concatenated string into a template literal
LESSON 26. MAKE THE TEMPLATE STRING EVEN MORE DYNAMIC
    Create a new variable and use it
LESSON 27. TEMPLATE STRING ON MULTIPLE LINES
    Break the template string into multiple lines.
LESSON 43. WRITE YOUR FIRST FUNCTION PARAMETER
LESSON 44. FUNCTIONS WITH MULTIPLE PARAMETEERS
Tepper, 06DEC2022 */

// DOM - GENERATE REINDEER
const reindeerTagH= document.getElementById("reindeerTag-h");
const reindeerTagP = document.getElementById("reindeerTag-p");
const reindeerTagBtn = document.getElementById("reindeerTag-btn");
const greetingEl = document.getElementById("greeting-el"); // 43a

// ARRAYS
let tagNum = [];
let reindeerKey = `[]`;
const reindeerNames = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Dunder", "Blixem", "Flossie", "Glossie", "Racer", "Pacer", "Reckless", "Speckless", "Fearless", "Peerless", "Ready", "Steady"];
const serverRegions = ["NAE", "NAW", "EU", "OCE", "BR", "ASIA", "ME"]; // 26

// RANDOMIZERS. TO BE USED ONLY WITH 43 & 44. 
const x = Math.floor(Math.random() * reindeerNames.length); // greeting
const y = Math.floor(Math.random() * reindeerNames.length); // new tag
const z = Math.floor(Math.random() * serverRegions.length); // server

// OTHER VARS
let currentReindeer = "";
let newReindeer = "";

reindeerTagH.innerHTML = `<h2>Generate Your Reindeer Tag</h2>`;
reindeerTagP.textContent = `Which reindeer will you be?`;
reindeerTagBtn.innerHTML = "<p></p><button id='button1'>GENERATE</button>";

greetingEl.textContent = "Hey there, stranger..."; // default welcome greeting for 43, 44

/* function greetUser (reindeer) {
    greetingEl.textContent = "Welcome back, " + reindeer + "!";
}
greetUser(reindeerNames[x]); */

greetingEl.addEventListener("mouseover", function() {
    const greetUser = (reindeer, server) => {
        greetingEl.textContent = "Oh, it's you. Welcome back, " + reindeer + "! Any latency issues in " + server + " region?";
    }
    console.log("greeting mouseover detected.");
    greetUser(reindeerNames[x], serverRegions[z]);
})

// generates random nums for numeric tag
const tagGenerator = () => {
    tagNum = [];

    for (let i = 0; i < 4; i++) {
        let generateTagNumber = Math.floor(Math.random() * 10);
        tagNum.push(generateTagNumber);
        console.log(tagNum);
    }
}

// GET NEW REINDEER ASSIGNMENT
reindeerTagBtn.addEventListener("click", function(){
    // Picks a random reindeer name from array
    console.log("Generating new reindeer...");
    let w = Math.floor(Math.random() * reindeerNames.length); // new tag
    let assignedReindeer = reindeerNames[w];
    console.log(assignedReindeer);

    // generates random nums for numeric tag
    tagGenerator();

    // Picks random server region from array
    console.log("Selecting optimized region");
    let v = Math.floor(Math.random() * serverRegions.length); // server
    let assignedRegion = serverRegions[v];
    console.log(assignedRegion);

    // Reindeer tag concat
    let reindeerTag = `${assignedReindeer}#${tagNum[1]}${tagNum[2]}${tagNum[2]}${tagNum[3]}`;

    reindeerTagH.innerHTML = `<h2>${reindeerTag}</h2>`;
    reindeerTagP.innerHTML = `<br><p>Your reindeer is ${assignedReindeer}.</p><p></p>
                                <p>This option is optimized for the ${assignedRegion} region.</p>`;

    // 33a. Save generated reindeer to localStorage
    reindeerKey = JSON.parse(reindeerKey);              // 34a
    localStorage.setItem(reindeerTag, assignedRegion);  // 33a
    reindeerKey.push(reindeerTag);                      // 34b
    console.log("New reindeer saved to localStorage.")

    reindeerKey = JSON.stringify(reindeerKey);          // 34c
    console.log(typeof reindeerKey);                    // 34d
    console.log(reindeerKey);
});

/* 
LESSON 33. YOUR FIRST localStorage
    a. Save a key-value pair in localStorage                    // localStorage.setItem(key, value)
    b. Refresh the page, get the value, and log to console      // localStorage.getItem(key, value)
    c. Clear localStorage                                       // localStorage.clear()
LESSON 34. STORING ARRAYS IN localStorage
    a. Turn new array reindeerKey into a string
    b. Push var reindeerTag to new array reindeerKey every time a new reindeer tag is generated
    c. Turn reindeerKey array into string again
    d. Console.log string using typeof to verify that it is a string
Tepper, 06DEC2022 */

// DOM - ARCHIVED REINDEERS
const archivedTagShowBtn = document.getElementById("archivedTag-showBtn");
const archivedTagClearBtn = document.getElementById("archivedTag-clearBtn");
const archivedTagH = document.getElementById("archivedTag-h");
const archivedTagP = document.getElementById("archivedTag-p");

// VIEW ARCHIVED REINDEER ASSIGNMENTS
archivedTagShowBtn.innerHTML = "<p></p><button id='button2'>VIEW ALL</button>";
archivedTagClearBtn.innerHTML = "<p></p><button id='button1'>CLEAR ALL</button>";
archivedTagH.innerHTML = `<h2>View Archived Reindeer Tags</h2>`;
archivedTagP.innerHTML = `<p>1. View console when generating new tags.</p><h3>OR</h3><p>2. Inspect > Application > Local Storage to access archive</p>`;

// show all reindeers saved in localStorage
archivedTagShowBtn.addEventListener("click", function() {
    console.log("Nothing to show right now.");
});

// clears localStorage
archivedTagClearBtn.addEventListener("dblclick", function(){
    console.log("Storage cleared.");
    localStorage.clear();
});

/* LESSON 47. ARRAYS AS PARAMETERS
    a. create a function that returns the first item in the array
    b. call fxn with an array as an argument to verify that it works
Tepper, 07DEC2022 */
const get5th = (array) => {
    return array[4];
}
console.log("reindeerNames[4] is " + get5th(reindeerNames));
console.log("serverRegions[4] is " + get5th(serverRegions));

/* LESSON 45. NUMBERS AS FUNCTION PARAMETERS
    Create the add() function that adds two numbers together and returns the sum
    vars x, y, z are random numbers declared on lines 35-37
Tepper, 07DEC2022 */
const add = (a,b) => {
    return a + b;
}
console.log(`random nums are: x=${x}, y=${y}, z=${z}`);
console.log("x+y = " + add(x, y));
console.log("x+z = " + add(x, z));
console.log("y+z = " + add(y, z));

/* LESSON 6. WRITE YOUR FIRST addEventListener()
    1. Grab the box from the DOM and store it in a variable
    2. Add  click event listener to the box
    3. Log "I want to open the box"
LESSON 16. WRITE YOUR FIRST innerHTML
    Use .innerHTML to render a Buy! button inside a div
LESSON 17. MORE innerHTML PRACTICE
    When clicked, render a paragraph under the button (in the container)
Tepper, 04DEC2022 */

const boxEl = document.getElementById("box");
const boxBtn = document.getElementById("box-btn"); // L16
const boxP = document.getElementById("box-p"); // L17

boxBtn.innerHTML = "<p></p><button id='button2'>BUY THIS BOX!</button>"; // L16
boxP.innerHTML = "<p>Limited time offer!</p>"; // L17

// L6
boxEl.addEventListener("mouseover", function() {
    console.log("I want to open the box");
});

// 
boxBtn.addEventListener("click", function() {
    console.log("I added this box to my cart.");

    boxP.innerHTML = "<p></p>Added to cart!";
});


// . . . P R A C T I C E   P A R T   T H R E E . . .
/* LESSON 1. LET & CONST
    a. Go through the variables and decide if they should be let or const
    b. Change the console logs to use template strings instead of double quotes
LESSON 2. LOG ITEMS IN AN ARRAY
    a. create a function that takes a single parameter, an array
    b. log all the items of the array to the console
    c. call the function while passing array as an argument
Tepper, 07DEC2022 */

// CONSTANTS
const player = "Snoop";
const opponent = "Lily";
const game = "Roll For Treats";


// VARS
let lilyPoints = 0;
let snoopPoints = 0;
let lilyNum = 0;
let snoopNum = 0;
let totalTreats = 0;
let hasWon = false;

// ARRAY. For Lesson 2. Stores nums that Snoop and Lily rolled
let snoopRolledNums = [];
let lilyRolledNums = [];

let snoopRolls = localStorage.setItem("snoopRolls", JSON.stringify(snoopRolledNums));
let lilyRolls = localStorage.setItem("lilyRolls", JSON.stringify(lilyRolledNums));

// GAME
const rollTwenty = () => {
    return Math.floor(Math.random() * 20) + 1;
}

// VALIDATOR
const rollCompare = (a, b) => {
    if (a > b || a === b) {
        hasWon = true;
    }
    else if (a < b) {
        hasWon = false;
    }
}

// ARRAY FORMATTER. For Lesson 2. Tepper, 07DEC2022
const arrayFormatter = (arr) => {
    let arrayPrint = "";

    for (let i = 0; i < arr.length; i++) {
        arrayPrint += arr[i] + ", ";
    }

    return arrayPrint;
}

// DOM - LESSON 1
const treatsH = document.getElementById("treats-h");
const treatsP = document.getElementById("treats-p");
const treatsPP = document.getElementById("treats-p-p");
const treatsPPP = document.getElementById("treats-p-p-p");
const treatsBtn = document.getElementById("treats-btn");
const treatsClearBtn = document.getElementById("treatsClear-btn");

treatsH.innerHTML = `<h2>Roll for Treats</h2>`;
treatsP.innerHTML = `Snoop vs. Lily<br>`;
treatsPP.innerHTML = `High roller gets the treat. Doggywoo stars and celebrities, what will they roll? Will they roll low? Let's find out!<br>`;
treatsBtn.innerHTML = `<br><button id='button2'>GIVE TREAT</button>`;
treatsClearBtn.innerHTML = `<br><button id='button2'>RESET</button>`;
treatsPPP.innerHTML = `<br>${player}: ${snoopPoints} | ${opponent}: ${lilyPoints}<br>Total Treats Dispensed: ${totalTreats}`;

// give treats button
treatsBtn.addEventListener("click", function(){
    // running total of clicks
    totalTreats++

    // snoop and lily roll for treats
    snoopNum = rollTwenty();
    lilyNum = rollTwenty();

    // Lesson 2. push snoop and lily's rolled nums into their respective arrays
    snoopRolledNums.push(snoopNum);
    lilyRolledNums.push(lilyNum);

    // Lesson 3. save to localStorage
    snoopRolls = localStorage.setItem("snoopRolls", JSON.stringify(snoopRolledNums));
    lilyRolls = localStorage.setItem("lilyRolls", JSON.stringify(lilyRolledNums));

    // rolls are compared to determine outcome
    rollCompare(snoopNum, lilyNum);

    if (hasWon) {
        if (snoopNum > lilyNum){
            snoopPoints++;
            treatsP.innerHTML = `Snoop ${snoopNum} > Lily ${lilyNum}!<br>`;
            treatsPP.innerHTML = `<br>${player} got more points than Lily and won this round of ${game}!<br>`;
        }
        else if (snoopNum === lilyNum) {
            snoopPoints++;
            lilyPoints++;
            treatsP.innerHTML = `We have a tie!<br>`;
            treatsPP.innerHTML = `<br><br>${player} and ${opponent} both rolled ${snoopNum}. So, they both get treats!<br>`;
        }
    }
    else {
        lilyPoints++;
        treatsP.innerHTML = `Snoop ${snoopNum} < Lily ${lilyNum}!<br>`;
        treatsPP.innerHTML = `<br><br>The winner is ${opponent}! Good try, ${player}.<br>`;
    }
    treatsPPP.innerHTML = `<br>${player}: ${snoopPoints} | ${opponent}: ${lilyPoints}<br>Total Treats Dispensed: ${totalTreats}`;

});

// reset game button
treatsClearBtn.addEventListener("dblclick", function(){
    lilyPoints = 0;
    snoopPoints = 0;
    lilyNum = 0;
    snoopNum = 0;
    totalTreats = 0;
    hasWon = false;

    treatsP.innerHTML = `Aaaaand we're going again!<br>`;
    treatsPP.innerHTML = `Who will win this round?<br>`;
    treatsPPP.innerHTML = `<br>${player}: ${snoopPoints} | ${opponent}: ${lilyPoints}<br>Total Treats Dispensed: ${totalTreats}`;
    allRollsP1.innerHTML = `<br><h3>Snoop:</h3><br>`;
    allRollsP2.innerHTML = `<br><br><h3>Lily:</h3><br>`;


});

// LESSON 3
// set item in local storage
// console.log("added to local storage");
// localStorage.setItem("snoop", "Snooper Dooper Party Pooper");

// get item from local storage
// console.log(localStorage.getItem("snoop"));

/* LESSON 4. addEventListener AND OBJECT IN ARRAY
    a. Fetch the button from the DOM, store it in a var
    b. Use addEventListener() to listen for button clicks
    c. Log items when the button is clicked
Tepper, 10DEC2022 */
let items = [
    {
        location: "river",
        fish: "large-mouth bass",
        price: 8
    },
    {
        location: "ocean",
        fish: "eel",
        price: 15
    }
];

// button stored in var
const logBtn = document.getElementById("log-btn");

/* LESSON 5. GENERATE SENTENCES
    a. generateSentence(desc, arr) returns a string that grabs elements from 2 arrays
    b. Use a for loop and template string
Tepper, 10DEC2022 */

const generateSentence = (desc, arr) => {
    let baseString = `The ${arr.length} ${desc} are `;
    const lastIndex = arr.length - 1;

    for (let i = 0; i < arr.length; i++) {
        if (i < lastIndex) {
            baseString += arr[i] + ", ";
        }
        else {
            baseString += arr[i];
        } 
    }
    return baseString;
}

// var for lesson 5
const sentence = generateSentence("fish in the ocean", ["sardine","anchovy"]);


/* LESSON 6. RENDER IMAGES
    a. create a loop function that renders 3 images
    b. use for loop, template string
    c. use innerHTML
Tepper, 10DEC2022 */

const container = document.getElementById("container");
const imgs = [
    "coffee1.jpg",
    "coffee2.jpg",
    "scooter.jpg"
];

const renderImages = () => {
    let imgsDOM = "";
    for (let i = 0; i < imgs.length; i++) {
        imgsDOM += `<img class="coffee-img" src="${imgs[i]}">`
    }
    container.innerHTML = imgsDOM;
}
// button click event listener
logBtn.addEventListener("click", function(){
    console.log(items); // 4
    console.log(sentence); // 5
    renderImages();
});

/* LESSON 7. ROUNDING NUMBERS 
    Round the price in the button down to 2 decimal places
Tepper, 10DEC2022 */

const pi = 3.141592653589793238462643383279502884197169399375105820974944592307816406286208;
const piBtn = document.getElementById("pi-btn");
piBtn.textContent = `pi = ${pi.toFixed(2)}`;


// LESSON 8. CONVERT STRING TO NUMBER CHALLENGE
const pi2 = "3.141592653589793238462643383279502884197169399375105820974944592307816406286208";
const pi2Btn = document.getElementById("pi2-btn");

let pi2Num = parseFloat(pi2);
pi2Btn.textContent = `pi2 = ${pi2Num.toFixed(2)}`;

/* SOLO PROJECT: UNIT CONVERTER
    1 meter = 3.281 feet
    1 liter = 0.264 gallon
    1 kilogram = 2.204 pound
Tepper, 10DEC2022 */

const msgEl = document.getElementById("msg-el");
const lengthEl = document.getElementById("length-el");
const volumeEl = document.getElementById("volume-el");
const massEl = document.getElementById("mass-el");
const convertBtn = document.getElementById("convert-btn");

const ft = 3.281;
const gal = 0.264;
const lb = 2.204;

// let userInput = document.getElementById("userInput").value;
lengthEl.textContent = `meters = feet | feet = meters`;
volumeEl.textContent = `liters = gallon | gallon = liters`;
massEl.textContent = `kilograms = pounds | pounds = kilograms`;

const toFt = (a) => {
    let convertToFt = a * ft;
    return convertToFt.toFixed(3);
}

const toGal = (a) => {
    let convertToGal = a * gal;
    return convertToGal.toFixed(3);
}

const toLb = (a) => {
    let convertToLb = a * lb;
    return convertToLb.toFixed(3);
}

const toM = (a) => {
    let convertToM = a / ft;
    return convertToM.toFixed(3);
}

const toL = (a) => {
    let convertToL = a / gal;
    return convertToL.toFixed(3);
}

const toKg = (a) => {
    let convertToKg= a / lb;
    return convertToKg.toFixed(3);
}



// convert btn event listener
convertBtn.addEventListener ("click", function() {
    let input = parseFloat(document.getElementById("userInput").value);

    if (isNaN(input)) {
        alert("Please enter a numeric value.");
        userInput.value = "";
        userInput.focus();
    }
    else {
        lengthEl.textContent = `${input} meters = ${toFt(input)} feet | ${input} feet = ${toM(input)} meters`;
        volumeEl.textContent = `${input} liters = ${toGal(input)} gallon | ${input} gallon = ${toL(input)} liters`;
        massEl.textContent = `${input} kilograms = ${toLb(input)} pounds | ${input} pounds = ${toKg(input)} kilograms`;
    }
    userInput.focus();
});

// enter key event listener
userInput.addEventListener ("keypress", function(event) {
    let input = parseFloat(document.getElementById("userInput").value);

    if (event.key === "Enter"){
        if (isNaN(input)) {
            alert("Please enter a numeric value.");
            userInput.value = "";
            userInput.focus();
        }
        else {
            lengthEl.textContent = `${input} meters = ${toFt(input)} feet | ${input} feet = ${toM(input)} meters`;
            volumeEl.textContent = `${input} liters = ${toGal(input)} gallon | ${input} gallon = ${toL(input)} liters`;
            massEl.textContent = `${input} kilograms = ${toLb(input)} pounds | ${input} pounds = ${toKg(input)} kilograms`;
        }
    }
    userInput.focus();
});

/* FOOTER. Tepper, 06NOV2022 *******************************************/
const today = new Date();
const footerEl = document.getElementById("footer-el");
function footer() {
    // local variables
    let studentName = "tepper-d, ";
    let whatisToday = today.toDateString() + ".";
    
    const footerStr = studentName + whatisToday;
    footerEl.textContent = footerStr;
}
footer();