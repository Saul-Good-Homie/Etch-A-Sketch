const container = document.getElementById('container');

let size = 25;

createGrid();

function createGrid(){
    for (let i = 0; i < size*size; i++) {
        gridItem = document.createElement('div');
        gridItem.style.width = size + "fr";
        gridItem.style.height = size + "fr";
        gridItem.classList.add('gridBlock');
        gridItem.id = "gridBlock";
        container.appendChild(gridItem);
    };
    container.addEventListener('mouseover', hoverGrid);
}

//function to change grid size
const changeSize = document.getElementById('size');
changeSize.addEventListener('click', promptSize);

function promptSize(){
    newSize = prompt("How many squares would you like in each Row and Column?");
    container.innerHTML = '';

    if (newSize > 100 || newSize == 0) {
        alert("Please enter a number between 1 and 100.")
      }
else{
    for (let i = 0; i < newSize*newSize; i++) {
        newGridItem = document.createElement('div');
        newGridItem.style.width = newSize + "fr";
        newGridItem.style.height = newSize + "fr";
        newGridItem.classList.add('gridBlock');
        newGridItem.id = "gridBlock";
        container.appendChild(newGridItem);  
    };
    container.style['grid-template-columns'] = `repeat(${newSize}, 1fr)`;
    container.style['grid-template-rows'] = `repeat(${newSize}, 1fr)`;
    container.addEventListener('mouseover', hoverGrid);
}
}

//function to change to Black
function hoverGrid(e){
    if (e.target.className === "gridBlock") {
        e.target.style.background = "#000";
      }
      console.log(e.target.className)
    };

  //function to change to random RGM
  function hoverRGB(e){
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    
    if (e.target.className === "gridBlock"){
        e.target.style.background = bgColor;
    }
    } 

const menu = document.getElementById('buttons');

menu.addEventListener("click", function(e){
    resetGrid();
    if (e.target.id == "rgb") {
    container.removeEventListener("mouseover", hoverGrid);
    container.addEventListener("mouseover", hoverRGB);
    }
    else if (e.target.id == "reset") {
        container.removeEventListener("mouseover", hoverRGB);
        container.addEventListener("mouseover", hoverGrid);
    }
})

// reset grid to black and white
function resetGrid(){
    const gridTile = document.getElementsByClassName('gridBlock');
      for (i=0; i < gridTile.length; i++){
          gridTile[i].style.background = "white";
          } 
      }
