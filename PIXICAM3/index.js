//---- 1/ Definition Secton ----//

const canvasEl = document.querySelector("canvas");
const ctx = canvasEl.getContext("2d");
const gridCtx = canvasEl.getContext('2d');
// Define the dimensions of the canvas and pixel size
const canvasWidth = 1600;
const canvasHeight = 1600;
const pixelSize = 10;
const colMax = canvasWidth / pixelSize;
const rowMax = canvasHeight / pixelSize;

//Creation of the list that will be use to generate the color choice section
const colorList = [
  'black', 'white', 'red', 'orange', 'yellow', '#cb6e00', '#0cd78d', 'lightgreen', 'cyan', '#052be6', '#690be4', '#ce0ee0', '#c75884'];
let currentColorChoice = 0;

//---- 3/ creation of the color Toolbar ----//
colorList.forEach(color => {
  let i = 0;
  //Using the ColorList we generate the <div>
  const colorItem = document.createElement('div');
  colorItem.style.backgroundColor = color;
  colorItem.setAttribute('class', 'resizeToolBlock');
  i++;
  colorChoice.appendChild(colorItem);

  colorItem.addEventListener('click', () => {
    currentColorChoice = color;
    ctx.fillStyle = currentColorChoice; // Update the drawing color

    colorChoice.querySelectorAll('div').forEach(item => {
      item.innerHTML = ""; // Clear the innerHTML of each color item
    });
    colorItem.innerHTML = '<i id="pen" class="fa-solid fa-pen"></i>' // active the innerHTML for the selected color
    if (colorItem.style.backgroundColor === "black" || colorItem[3] === 'red' || colorItem.style.backgroundColor === "#690be4") {
      pen.setAttribute("class", " fa-solid fa-pen whitePen");
    };
  });
});

//---- 4/ creation of the Canva Support ----//

const firstDrawCanva = () => {
  canvasEl.width = canvasWidth;
  canvasEl.height = canvasHeight;
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);//Draw the whole canva 
  drawPixel();
};

//---- 5/ creation of the Grid ----//

function drawGrids(ctx, canvasWidth, canvasHeight, pixelSize) {
  ctx.beginPath();
  ctx.strokeStyle = "#c9cdcf";
  //loop for height grid line
  for (let i = 0; i < colMax; i++) {
    ctx.moveTo(i * pixelSize, 0);
    ctx.lineTo(i * pixelSize, canvasHeight);
  };
  //loop for Width grid line
  for (let i = 0; i < rowMax; i++) {
    ctx.moveTo(0, i * pixelSize);
    ctx.lineTo(canvasWidth, i * pixelSize);
  };
  ctx.stroke();
};

//---- 6/ creation of the Pixel Board with the real Pixel----//
async function drawPixel () {
  for(let index=0; index<16; index++){
    let result = await getSubArrayPixel(index);
    for (let rowIndex = 0; rowIndex < 40; rowIndex++) {
      for (let colIndex = 0; colIndex < 40; colIndex++) {
        // Generate the color background for the canvas (you can use any color representation)
        let colorPixel = 'white';
        // Assign the color to all the pixel
        let caseColorCanvas = result[rowIndex][colIndex];
        //console.log(caseColorCanvas);
        switch (parseInt(caseColorCanvas, 16)) {
          case 1:
            colorPixel = 'black';
            console.log("B!")
            break;
          case 2:
            colorPixel = 'red';
            console.log("R!")
            break;
          case 3:
            colorPixel = 'orange';
            console.log("O!")
            break;
          case 4:
            colorPixel = 'yellow';
            console.log("Y!")
            break;
          case 5:
            colorPixel = '#cb6e00';
            console.log("SDFG!")
            break;
          case 6:
            colorPixel = '#0cd78d';
            console.log("cvn!")
            break;
          case 7:
            colorPixel = 'lightgreen';
            console.log("LG!")
            break;
          case 8:
            colorPixel = 'cyan';
            console.log("C!")
            break;
          case 9:
            colorPixel = '#052be6';
            console.log("1!")
            break;
          case 10:
            colorPixel = '#690be4';
            console.log("2!")
            break;
          case 11:
            colorPixel = '#ce0ee0';
            console.log("3!")
            break;
          case 12:
            colorPixel = '#c75884';
            console.log("4!")
            break;
          default:
            break;
        };
        if (caseColorCanvas !== null) {
          ctx.fillStyle = colorPixel;
          if(index<4){
            ctx.fillRect((colIndex+index*40) * pixelSize, rowIndex * pixelSize, pixelSize, pixelSize);
            createPixel(rowIndex, (colIndex+index*40), colorPixel);
          }
          else if(index<8){
            ctx.fillRect((colIndex+(index-4)*40) * pixelSize, (rowIndex+40)* pixelSize, pixelSize, pixelSize);
            createPixel((rowIndex+40), (colIndex+(index-4)*40), colorPixel);
          }
          else if(index<12){
            ctx.fillRect((colIndex+(index-8)*40) * pixelSize, (rowIndex+80)* pixelSize, pixelSize, pixelSize);
            createPixel((rowIndex+80), (colIndex+(index-8)*40), colorPixel);
          }
          else if(index<16){
            ctx.fillRect((colIndex+(index-12)*40) * pixelSize, (rowIndex+120)* pixelSize, pixelSize, pixelSize);
            createPixel((rowIndex+120), (colIndex+(index-12)*40), colorPixel);
          };
        };
      };
    };
  };
};

//---- 7/ Creation of the OnClick function that change the pixel color ----//

const onClickPixel = (canvasEl, pixelSize) => {
  canvasEl.addEventListener("click", (event) => {
    event.preventDefault();
    const colIndex = Math.floor(event.offsetX / pixelSize);// get the Y axis index
    const rowIndex = Math.floor(event.offsetY / pixelSize);// get the X axis index
    let varPixel = 0;
    switch (currentColorChoice) {
      case 'black':
        varPixel = 1;
        console.log("B!")
        break;
      case 'red':
        varPixel = 2;
        console.log("R!")
        break;
      case 'orange':
        varPixel = 3;
        console.log("O!")
        break;
      case 'yellow':
        varPixel = 4;
        console.log("Y!")
        break;
      case '#cb6e00':
        varPixel = 5;
        console.log("SDFG!")
        break;
      case '#0cd78d':
        varPixel = 6;
        console.log("cvn!")
        break;
      case 'lightgreen':
        varPixel = 7;
        console.log("LG!")
        break;
      case 'cyan':
        varPixel = 8;
        console.log("C!")
        break;
      case '#052be6':
        varPixel = 9;
        console.log("1!")
        break;
      case '#690be4':
        varPixel = 10;
        console.log("2!")
        break;
      case '#ce0ee0':
        varPixel = 11;
        console.log("3!")
        break;
      case '#c75884':
        varPixel = 12;
        console.log("4!")
        break;
      default:
        break;
    };
    createPixel(rowIndex, colIndex, currentColorChoice)
    if(rowIndex<40){
      if(colIndex<40){
        setPixel(0, colIndex, rowIndex, varPixel);
      }
      else if(colIndex<80){
        setPixel(1, colIndex-40, rowIndex, varPixel);
      }
      else if(colIndex<120){
        setPixel(2, colIndex-80, rowIndex, varPixel);
      }
      else if(colIndex<160){
        setPixel(3, colIndex-120, rowIndex, varPixel);
      }
    }
    else if(rowIndex<80){
      if(colIndex<40){
        setPixel(4, colIndex, rowIndex-40, varPixel);
      }
      else if(colIndex<80){
        setPixel(5, colIndex-40, rowIndex-40, varPixel);
      }
      else if(colIndex<120){
        setPixel(6, colIndex-80, rowIndex-40, varPixel);
      }
      else if(colIndex<160){
        setPixel(7, colIndex-120, rowIndex-40, varPixel);
      }
    }
    else if(rowIndex<120){
      if(colIndex<40){
        setPixel(8, colIndex, rowIndex-80, varPixel);
      }
      else if(colIndex<80){
        setPixel(9, colIndex-40, rowIndex-80, varPixel);
      }
      else if(colIndex<120){
        setPixel(10, colIndex-80, rowIndex-80, varPixel);
      }
      else if(colIndex<160){
        setPixel(11, colIndex-120, rowIndex-80, varPixel);
      }
    }
    else if(rowIndex<160){
      if(colIndex<40){
        setPixel(12, colIndex, rowIndex-120, varPixel);
      }
      else if(colIndex<80){
        setPixel(13, colIndex-40, rowIndex-120, varPixel);
      }
      else if(colIndex<120){
        setPixel(14, colIndex-80, rowIndex-120, varPixel);
      }
      else if(colIndex<160){
        setPixel(15, colIndex-120, rowIndex-120, varPixel);
      }
    }
    else{
      console.log(error);
    }
  });
};

function createPixel(rowIndex, colIndex, color) {
  ctx.beginPath();
  ctx.fillStyle = color;
  ctx.fillRect(colIndex * pixelSize, rowIndex * pixelSize, pixelSize, pixelSize);
}

//---- 8/ We Run all Function ----// 
connectToMetaMask();
firstDrawCanva();
onClickPixel(canvasEl, pixelSize);
drawGrids(gridCtx, canvasEl.width, canvasEl.height, pixelSize, pixelSize);

//---- 9/ Get already placed pixel  ----// 
/*
db.collection('pixel').onSnapshot(function (querySnapshot) {
  querySnapshot.docChanges().forEach(function (change) {
    console.log(change.doc.data())
    const { rowIndex, colIndex, color } = change.doc.data()
    createPixel(rowIndex, colIndex, color)
  })
})
*/
window.addEventListener('resize', adjustDivSize);
window.addEventListener('load', adjustDivSize);

function adjustDivSize() {
  const resizeTool = document.getElementsByClassName('resizeToolBlock');
  const windowHeight = window.innerHeight;
  const newHeight = windowHeight * 0.06; // Ajustez selon vos besoins
  for (let i = 0; i < resizeTool.length; i++) {
    resizeTool[i].style.height = newHeight + 'px';
    resizeTool[i].style.width = newHeight + 'px';
  }
  const colorChoice = document.getElementById('colorChoice');
  const newRadius = (windowHeight * 0.035); // Ajustez selon vos besoins
  colorChoice.style.borderRadius = newRadius + 'px';
}

// ---------------------- SMART CONTRACT -------------------- //

// Importer les fonctions de notre modules ethers.js
import { ethers } from "./ethers-5.1.esm.min.js"
// Importer l'abi et l'adresse du contrat
import { abi, contractAddress } from "./constant.js"

// Association de chaque élément du html à des variable JavaScript
let ownerBtn = document.getElementById("ownerBtn");
let ownerInp = document.getElementById("ownerInp");

// Executer les fonctions en fontion du bouton clické
ownerBtn.onclick = addOwner;

// Fonction qui permet de se connecter à MetaMask
async function connectToMetaMask() {
  // Vérifie si MetaMask est installé
  if (typeof window.ethereum !== "undefined") {
    // Demande de se connecter si MetaMask est déjà installé
    window.ethereum.request({ method: "eth_requestAccounts" });
    console.log("Connected");
  } else {
    console.log("Please install MetaMask");
  }
}

// Fonction qui permet d'ajouter une address en tant qu'owner
async function addOwner() {
  // Création une variable "address" qui contindra la valeur mit dans l'input html
  const address = ownerInp.value;
  console.log(`Adding the adress: ${address} as an owner...`);
  if (typeof window.ethereum !== "undefined") {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, abi, signer);
    try {
      // Execute la fonction "addOwner" de notre smart contract
      let transactionResponse = await contract.addOwner(address);
      await listenForTransactionMine(transactionResponse, provider);
      console.log("Done !")
    }
    catch (error) {
      console.log(error);
    }
  }
}

// Fonction qui permet de définir la valeur d'un pixel en fonction de son indexage
async function setPixel(index, X, Y, value) {
  console.log(`Setting pixel of array ${index} at ${X};${Y} as ${value}...`);
  if (typeof window.ethereum !== "undefined") {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, abi, signer);
    try {
      let transactionResponse = await contract.setValuePixel(index, Y, X, value);
      await listenForTransactionMine(transactionResponse, provider);
      console.log("Done !")
    }
    catch (error) {
      console.log(error);
    }
  }
}

async function getSubArrayPixel(index) {
  if (typeof window.ethereum !== "undefined") {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, abi, signer);
    try {
      let SubArray = await contract.getSubArray(index);
      return SubArray;
    }
    catch (error) {
      console.log(error);
    }
  }
}

// Attends que les blocs soit bien minés pour executer les fonctions
function listenForTransactionMine(transactionResponse, provider) {
  console.log(`Mining ${transactionResponse.hash}...`);
  return new Promise((resolve, reject) => {
    provider.once(transactionResponse.hash, (transactionReceipt) => {
      console.log(`Completed width ${transactionReceipt.confirmations} confirmations`);
      resolve();
    });
  })
}
