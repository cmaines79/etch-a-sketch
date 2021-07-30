// Etch-A-Sketch Game
// This project is a project directed by The Odin Project - Fundimentals
// Created by Cordell Maines - MainesIndustries@gmail.com 
// Created 7/30/2021

// Global DOM Variables
const sectionEl = document.querySelector('.container');
let sectionElHeight = sectionEl.offsetHeight;
let sectionElWidth = sectionEl.offsetWidth;

// Global Variables
let gridSize = 20;                  // setting default grid size
let gridColor = 'black';            // setting default grid color
let randomColor = 0;                // setting randomColor to false by default


// clearing the game grid
function clearGrid(){
    // while loop to remove .firstChild until there are no more firstChildren
    while (sectionEl.firstChild){
        sectionEl.removeChild(sectionEl.firstChild);
    }
}

// drawing the game grid
function drawGrid(size) {
    // create a variable to hold the value of the id for each newDiv
    let divId = 1;

    // nested for loop to create the grid
    for(let i = 1; i <= size; i++){
        for(let j = 1; j <= size; j++){
            // create the new div element
            const newDiv = document.createElement('div');

            // assign class and id
            newDiv.className = 'draw';
            newDiv.setAttribute('id', "div" + divId);
            divId += 1;

            // assign height and width of each div based upon the grid size and sectionEl size
            var newDivHeight = sectionElHeight / size + 'px';
            var newDivWidth = sectionElWidth / size + 'px';
            newDiv.style.height = newDivHeight;
            newDiv.style.width = newDivWidth;

            // append to DOM tree 
            sectionEl.appendChild(newDiv);
        }
    }
}

// getting a random color
function getRandomColor(){
    let characters = '0123456789ABCDEF';
    let color = "#";
    for(let i = 0; i < 6; i++) {
        color += characters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// using a listener to find the div that is being hovered over and changing the background color
const hoverListener = document.querySelector('.container').addEventListener('mouseover', (e) => {
    // assign a variable to the targeted div
    let targetDivEl = document.getElementById(e.target.id);

    // change the background color (consistant or random color)
    if(randomColor == 0){
        targetDivEl.style.backgroundColor = gridColor;
    } else {
        targetDivEl.style.backgroundColor = getRandomColor();
    }

});

// using a listener on the .userInput div to identify specific buttons based on their class and updating classLists to show active and inactive states
const btnListener = document.querySelector('.userInput').addEventListener('click', (e) =>{
    // We have two segments of buttons.  The round buttons and the retangular buttons
    // if/else statement to segregate the round and square buttons and update them accordingly
    if(e.target.id == '10' || e.target.id == '20' || e.target.id == '30'){
        btnActiveEl = document.querySelectorAll('.roundBtn');

        // remove all other instances of .active classes
        for(let i = 0; i < btnActiveEl.length; i++){
            btnActiveEl[i].classList.remove('active')
        }

        // add .active class to the button that was just clicked
        e.target.classList.add('active');
    } else {
        
        btnActiveEl = document.querySelectorAll('.btn');

        // remove all other instances of .active classes
        for(let i = 0; i < btnActiveEl.length; i++){
            btnActiveEl[i].classList.remove('active');
        }
        
        // add .active class to the button that was just clicked
        e.target.classList.add('active');
    }
});



// using a listener to determine which button is being clicked and take the appropriate action.
const buttonListener = document.querySelector('.userInput').addEventListener('click', function(e){
    
    // checking to see if click was on a button or not
    const isButton = e.target.nodeName === 'BUTTON';
    if (isButton) {
        // create a variable to hold the button ID value.
        userChoice = e.target.id;
        console.log(userChoice);

        if(userChoice == '10' || userChoice == '20' || userChoice == '30'){
            clearGrid();
            gridSize = parseInt(userChoice);
            drawGrid(gridSize);
        } else if(userChoice == 'clear'){
            clearGrid();
            drawGrid(gridSize);
        } else if(userChoice == 'color'){
            randomColor = 1;
        } else if(userChoice == 'black'){
            randomColor = 0;
            gridColor  = 'black'
        } else if(userChoice = 'erase') {
            randomColor = 0;
            gridColor = 'white';
        }
    } else {
        console.log("ERROR!");
    }
});

drawGrid(gridSize);