import { ethers } from "./ethers-5.1.esm.min.js"
import { abi,contractAddress } from "./constants.js"

let connectBtn = document.getElementById("connectBtn")
let setBtn = document.getElementById("setBtn")
let setXInp = document.getElementById("setXInp")
let setYInp = document.getElementById("setYInp")
let setVinp = document.getElementById("setVInp")
let a = document.getElementById("a")
let b = document.getElementById("b")
let c = document.getElementById("c")
let d = document.getElementById("d")



connectBtn.onclick = connectToMetaMask
setBtn.onclick = setter
getter()


async function connectToMetaMask(){
    if (typeof window.ethereum !== "undefined") {
        window.ethereum.request({method: "eth_requestAccounts"});
        connectBtn.innerHTML = "Connected";
    }else {
        connectBtn.innerHTML = "Please install MetaMask";
    }
}

async function setter(){
    let x = setXInp.value
    let y = setYInp.value
    let value = setVinp.value
    
    console.log(`Setting ${x} ${y} case a value of ${value} ...`);
    if (typeof window.ethereum !== "undefined") {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, abi, signer);
        try{ 
            let transactionResponse = await contract.setter(x,y,value);
            await listenForTransactionMine(transactionResponse, provider);
            console.log("Done !")
        }        
        catch(error){
            console.log(error);
        } 
    }
}




async function getter(){
    
    console.log("Watching value of the place ...");
    if (typeof window.ethereum !== "undefined") {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, abi, signer);
    try {
        let Va = await contract.getter(0,0)
        let Vb = await contract.getter(1,0)
        let Vc = await contract.getter(0,1)
        let Vd = await contract.getter(1,1)

        a.innerText = `${Va}`
        b.innerText = `${Vb}`
        c.innerText = `${Vc}`
        d.innerText = `${Vd}`
    }
    catch(error){
        console.log(error);
    } 
}
}
 
 
 
function listenForTransactionMine(transactionResponse, provider){
     console.log(`Mining ${transactionResponse.hash}...`);
     return new Promise((resolve, reject) => {
         provider.once(transactionResponse.hash, (transactionReceipt) => {
         console.log(`Completed width ${transactionReceipt.confirmations} confirmations`);
         resolve();
     });
     })
 
}




