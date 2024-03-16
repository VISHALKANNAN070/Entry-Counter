//

let count = 0;
let tot = 0;
let savedEl = document.getElementById("saved-v");
let countEl = document.getElementById("count-el");
let totalEl = document.getElementById("total-el");

function increment() {
  count = count + 1;
  countEl.innerText = count;
}
function saving() {
let countStr = count + "-";
savedEl.innerText+=countStr;
tot +=count;
totalEl.innerText = "Total: " + tot;
countEl.textContent = 0;
count=0;
}

function reset(){
  countStr = " ";
  savedEl.innerText= countStr;
  tot=0;
}
