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
        pen.classList.add('on')
    }}}



let btn = document.querySelector('button')

btn.addEventListener('click', () => {
    size = Number(prompt("Enter size of the grid:"))
    if (!size) size = 16;
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
    eraser.classList.add("on")
    pen.classList.remove('on')
}

eraser.addEventListener("click", erase);

let pen = document.querySelector("#pen");

function color(){
    boxes.forEach(box => box.addEventListener("mouseenter", ()=> box.classList.add("colored")))
    eraser.classList.remove("on")
    pen.classList.add('on')
}

pen.addEventListener("click", color)
// EXTRA: randomize squares RGB values

function randomRGB() {
    return Math.floor(Math.random() * 255);
}

function colorRandom(e){
    e.target.style.backgroundColor = `rgb(${randomRGB()},${randomRGB()}, ${randomRGB})`
}
// EXTRA: progressive darkening 

createGrid(size);
