import { ethers } from "./ethers-5.1.esm.min.js"
import { abi,contractAddress } from "./constants.js"

let connectBtn = document.getElementById("connectBtn");
let storeBtn = document.getElementById("storeBtn");
let watchBtn = document.getElementById("watchBtn");
let storeInp = document.getElementById("storeInp");
let takeBtn = document.getElementById("takeBtn");
let takeInp = document.getElementById("takeInp");

connectBtn.onclick = connectToMetaMask;
storeBtn.onclick = store;
watchBtn.onclick = watch;
takeBtn.onclick = take;

async function connectToMetaMask(){
    if (typeof window.ethereum !== "undefined") {
        window.ethereum.request({method: "eth_requestAccounts"});
        connectBtn.innerHTML = "Connected";
    }else {
        connectBtn.innerHTML = "Please install MetaMask";
    }
}

async function store(){
    const amount = storeInp.value;
    console.log(`Adding ${amount} money in my wallet...`);
    if (typeof window.ethereum !== "undefined") {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, abi, signer);
        try{ 
            let transactionResponse = await contract.store(amount);
            await listenForTransactionMine(transactionResponse, provider);
            console.log("Done !")
        }        
        catch(error){
            console.log(error);
        } 
    }
}

async function take(){
    const amount = takeInp.value;
    console.log(`Taking ${amount} money in my wallet...`);
    if (typeof window.ethereum !== "undefined") {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, abi, signer);
        try{ 
            let transactionResponse = await contract.take(amount);
            await listenForTransactionMine(transactionResponse, provider);
            console.log("Done !")
        }        
        catch(error){
            console.log(error);
        } 
    }
}

async function watch(){
   console.log("Watching how many money there is in my wallet...");
   if (typeof window.ethereum !== "undefined") {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, abi, signer);
    try {
       let currentWallet = await contract.watch();
       console.log(`Current money in my wallet: ${currentWallet}`);
        
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