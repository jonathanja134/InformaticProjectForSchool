const game = document.querySelector('#game'); // Creating the pixel war space
const colorChoice = document.querySelector('#colorChoice');
const colorSelector = document.getElementById('colorSelector')
const cursor = document.querySelector('#cursor')
const gridCellSize = 10


game.width = 1200; // sizing the pixel war space
game.height = 600;

colorSelector.backgroundColor = colorSelector.value

let currentColorChoice = '#faf3e6'; // Default color set to the color of the background

const ctx = game.getContext('2d'); 
const gridCtx = game.getContext('2d');
ctx.fillStyle = currentColorChoice; // Set the initial color

const colorList = [
  'red', 'orange', 'yellow', '#cb6e00', '#0cd78d', 'cyan', '#052be6', '#690be4', '#ce0ee0', '#c75884'
];

colorList.forEach(color => {
  const colorItem = document.createElement('div');
  colorItem.style.backgroundColor = color;
  colorChoice.appendChild(colorItem);
  
  colorItem.addEventListener('click', () => {
        currentColorChoice = color;
        ctx.fillStyle = currentColorChoice; // Update the drawing color

    colorChoice.querySelectorAll('div').forEach(item => {
        item.innerHTML = ""; // Clear the innerHTML of each color item
      });
    colorItem.innerHTML = '<i class="fa-solid fa-pen"></i>'

  });
});

colorSelector.addEventListener('input', () => { // Use 'input' event for color inputs
    currentColorChoice = colorSelector.value;
    ctx.fillStyle = currentColorChoice;

    colorSelector.style.backgroundColor = currentColorChoice;

    colorChoice.querySelectorAll('div').forEach(item => {
        item.innerHTML = ''; // Clear the innerHTML of each color item
        });
        colorSelector.innerHTML = '<i class="fa-solid fa-pen"></i>'
    });

function createPixel(x,y,color){

  ctx.beginPath();
  ctx.fillStyle = color; 
  ctx.fillRect(x, y, gridCellSize, gridCellSize);

}

function drawGrids(ctx,width, height, cellWidth, cellHeight){
  ctx.beginPath()
  ctx.strokeStyle ="#ccc"

  for(let i = 0;i< width;i++){
    ctx.moveTo(i* cellWidth,0)
    ctx.lineTo(i * cellWidth, height)
  }
  for(let i = 0;i< height;i++){
    ctx.moveTo(0 , i* cellHeight)
    ctx.lineTo(width ,i * cellHeight)
  }
  ctx.stroke()
}
drawGrids(gridCtx, game.width,game.height,gridCellSize,gridCellSize)

game.addEventListener('mousemove',function(event){

  const cursorLeft = event.pageX -(cursor.offsetWidth/2)
  const cursorTop = event.pageY -(cursor.offsetHeight/2) 

  console.log(cursorLeft)
  console.log(cursorTop)

  cursor.style.left = Math.floor(cursorLeft / gridCellSize) * gridCellSize + "px";
  cursor.style.top = Math.floor(cursorTop / gridCellSize) * gridCellSize + "px";
})

//1 - Jaune
//2 - Bleu
//3 - Rouge
//4 - Vert
//5 - Rose
//6 - Orange
//7 - Violet
//8 - Gris
//9 - Marron
//10 - Noir
//11 - Blanc
//12 - Turquoise
//13 - Beige
//14 - Cyan
//15 - Magenta
//16 - Argent
//17 - Or
//18 - Olive
//19 - Indigo
//20 - Lavande






