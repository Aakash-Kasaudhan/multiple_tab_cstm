
function changeColor(buttonId) {
const mainDiv = document.querySelector(".main_div");
const allBtn = document.getElementById(buttonId);

var colorMap = {
    button1: "#FF5733",
    button2: "#33FF57",
    button3: "#5733FF",
    button4: "#33FFFF",
  };  
  mainDiv.style.backgroundColor = colorMap[buttonId];
  allBtn.style.color = colorMap[buttonId];
}