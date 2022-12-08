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
reindeerTagBtn.innerHTML = "<p></p><button id='button2'>GENERATE</button>";

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
archivedTagShowBtn.innerHTML = "<p></p><button id='button1'>VIEW ALL</button>";
archivedTagClearBtn.innerHTML = "<p></p><button id='button1'>CLEAR ALL</button>";
archivedTagH.innerHTML = `<h2>View Archived Reindeer Tags</h2>`;
archivedTagP.innerHTML = `<p>1. View console when generating new tags.</p><h3>OR</><p>2. Inspect > Application > Local Storage to access archive</p>`;

// show all reindeers saved in localStorage
archivedTagShowBtn.addEventListener("click", function() {
    console.log("Nothing to show right now.");
});

// clears localStorage
archivedTagClearBtn.addEventListener("click", function(){
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

boxBtn.innerHTML = "<p></p><button>BUY THIS BOX!</button>"; // L16
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



/* FOOTER. Tepper, 06NOV2022 *******************************************/
const today = new Date();
let footerEl = document.getElementById("footer-el");

function footer() {
    // local variables
    let studentName = "tepper-d, ";
    let whatisToday = today.toDateString() + ".";
    
    const footerStr = studentName + whatisToday;
    footerEl.textContent = footerStr;
}
footer();