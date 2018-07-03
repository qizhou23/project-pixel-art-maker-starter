// Select color input
let color = '';
// Select size input
const gridHeight = document.getElementById('inputHeight').value;
const gridWidth = document.getElementById('inputWidth').value ;
// When size is submitted by the user, call makeGrid()


function makeGrid() {
    let i;
    let j;
    const table = document.getElementById('pixelCanvas');
    for(i=0;i<gridHeight;i++) {
        addTr(table);
        for(j=0;j<gridWidth;j++) {
            addTh();
        }
    }
}

//增加表格行
function addTr(table){
    const newTr = document.createElement("tr"); 
    table.appendChild(newTr); 
}

//增加表格列
function addTr(table){
    const newTh = document.createElement("th"); 
    tr.appendChild(newTh); 
}