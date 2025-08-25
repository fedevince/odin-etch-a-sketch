let size = 16;
const container = document.querySelector(".container");
let boxes = document.querySelectorAll(".box");

// named handler function for the event handler
function colorBox(e) {
    e.target.classList.add("colored")
}

function createGrid(size){
    for (let i = document.querySelectorAll(".box").length; i > 0; i--) {
        container.removeChild(container.childNodes[i]);
    }
    {for (let i = 0; i < size * size; i++) {
        let box = document.createElement("div");
        box.classList.add("box");
        box.style.width = `${100/size}%`;
        container.appendChild(box);
        box.addEventListener("mouseenter", colorBox)
        boxes = document.querySelectorAll(".box");
    }}}



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

// figure out how to toggle off a listener
let eraser = document.querySelector("#eraser");

function erase(){
    boxes.forEach(box => box.addEventListener("mouseenter", ()=>box.classList.remove('colored')));
}

eraser.addEventListener("click", erase);

let pen = document.querySelector("#pen");

function color(){
    boxes.forEach(box => box.addEventListener("mouseenter", ()=> box.classList.add("colored")))
}

pen.addEventListener("click", color)
// EXTRA: randomize squares RGB values
// EXTRA: progressive darkening 
// rubber function with command click?

createGrid(size);
