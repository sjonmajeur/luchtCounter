let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0
let savedCounts = [];
let index = 0;

function increment() {
    count += 1
    countEl.textContent = count
}

function aftrekken() {
    count -= 1
    countEl.textContent = count
}
function herstart() {
    let countStr = count
    savedCounts[index] = count;
    index += 1;
    saveEl.textContent = countStr
    countEl.textContent = 0
    count = 0;
}
