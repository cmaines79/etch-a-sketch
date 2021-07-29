const sectionEl = document.querySelector('.container');

// testing adding divs with the proper class name
const newDiv = document.createElement('h3');
newDiv.className = 'draw';
newDiv.innerText = 'help!';
sectionEl.appendChild(newDiv);
console.log("added");
sectionEl.appendChild(newDiv);
console.log("added");
sectionEl.appendChild(newDiv);
console.log("added");



// change this later to get user input for size of grid.  Do this on a slider or something to avoid the sqrt issues
// var gridSize = 16;

function drawGrid() {
    const gridSize = 16;
    const sqrt = Math.sqrt(gridSize);
    let idCounter = 1;

    if (gridSize < 65) {

        // const newDiv = document.createElement('p');
        // newDiv.className = 'draw';
        // newDiv.innerText = "test";

        // for(let i = 0; i < sqrt; i++){
        //     for(let j = 0; j < sqrt; j++){
        //         newDiv.id = idCounter;
        //         sectionEl.append(newDiv);
        //         idCounter += 1;
        //         console.log('new div created');
        //     }
            
        // }
    
    } 
    else {
        alert('please enter a smaller size');
        // return;
    }
}

drawGrid();