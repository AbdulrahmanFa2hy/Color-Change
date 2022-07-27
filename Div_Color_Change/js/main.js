// Get element from HTML
let myBtn = document.querySelector(".btn");
let myDiv = document.querySelector(".box");

// Event

let colors = ["#00a8ff", "#9c88ff", "#fbc531", "#4cd137", "#487eb0"];
let i = 0;

myBtn.onclick = function(){
  myDiv.style.backgroundColor = colors[i];
  i++;
  if(i === colors.length){
    i = 0;
  }
}
