//TODO
// Create 16 x 16 div grid, set flexbox to wrap them
let size = 16;
const container = document.querySelector(".container");
function createGrid(size)
    // delete existing grid
    // size limited to screen
    {for (let i = 0; i < size * size; i++) {
        let box = document.createElement("div");
        box.classList.add("box");
        box.style.width = `${100/size}%`;
        container.appendChild(box);
    }}

createGrid(size);
// create container
// append 16 x 16 divs to it

// Set up hover effect

// Button on the top of the screen asking for the number of squares in the grid
// Remove existing grid; new one in the same space

// EXTRA: randomize squares RGB values
// EXTRA: progressive darkening