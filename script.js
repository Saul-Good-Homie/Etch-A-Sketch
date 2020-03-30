const container = document.getElementById('container');
// const gridItem = document.createElement('div');
let size = 900;



createGrid();



function createGrid(){
    for (let i = 0; i < size; i++) {
        gridItem = document.createElement('div');
   
        gridItem.style.width = size + "fr";
        gridItem.style.height = size + "fr";
        gridItem.classList.add('gridBlock');
        gridItem.id = "gridBlock";
    container.appendChild(gridItem);
};

}


function testFunction(e){
    this.classList.toggle('hover'); 
  };

const hover = document.querySelectorAll('.gridBlock');
hover.forEach(gridblock => gridblock.addEventListener('mouseover', testFunction));




