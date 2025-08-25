let size = 16;
const container = document.querySelector(".container");

// named handler function for the event handler
function colorBox(e) {
    e.target.classList.add("colored")
}

function createGrid(size){
    // delete existing grid
    for (let i = document.querySelectorAll(".box").length; i > 0; i--) {
        container.removeChild(container.childNodes[i]);
    }
    // TODO fix size when larger than 17
    // figure out why chldnodelist has an extra text item
    {for (let i = 0; i < size * size; i++) {
        let box = document.createElement("div");
        box.classList.add("box");
        box.style.width = `${100/size}%`;
        container.appendChild(box);
        box.addEventListener("mouseenter", colorBox)
    }}}

createGrid(size);
// create container
// append 16 x 16 divs to it

// Set up hover effect
let boxes = document.querySelectorAll(".box");
// for (box of boxes) {
//     box.addEventListener("mouseenter", () => box.classList.add("colored"));
// }
// Button on the top of the screen asking for the number of squares in the grid
// Remove existing grid; new one in the same space

let btn = document.querySelector('button')

btn.addEventListener('click', () => {
    size = Number(prompt("Enter size of the grid:"))
    while (true) {
        if (size <= 100 && size > 1) {
            break
        }
        size = Number(prompt("Enter a number between 1 and 100!"));
    } 
    createGrid(size);
})

// EXTRA: randomize squares RGB values
// EXTRA: progressive darkening 
// rubber function with command click?