var container = document.getElementById("container")
var bt = document.getElementById("btn")

bt.onclick = function(){

    var col = document.createElement("div")
    col.classList.add("col")
    container.appendChild(col)
}
function getRandomHexColor() {
    
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    
    return '#' + ('000000' + randomColor).slice(-6);
}




// Set the background color of the color box to a random hexadecimal color

function generateColor(event){
    if (event.keyCode === 32) {
        var colorBox = document.querySelectorAll('.col');
        for(i in colorBox){

            colorBox[i].style.backgroundColor = getRandomHexColor();
        }
    }
}
document.addEventListener('keydown', generateColor)