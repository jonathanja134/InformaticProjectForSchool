const ethers = require("ethers");
const fs = require("fs-extra");

async function main() {
    const provider =  new ethers.JsonRpcProvider("HTTP://127.0.0.1:7545"); //connect to the blockchain
    const wallet = new ethers.Wallet("0xa73ef875694c2c770fdfaa7cc083064464b230b4b15d1423885fc3ac6c4292f8", provider);

    //get the abi and the binary
    const abi = fs.readFileSync("./wallet_sol_wallet.abi", "utf8");
    const binary = fs.readFileSync("./wallet_sol_wallet.bin", "utf8");
    
    //object use to deploy contract
    const contractFactory = new ethers.ContractFactory(abi,binary,wallet);
    console.log("Deploying, please wait...");
    //deploy the contract
    const contract = await contractFactory.deploy(); // await for wait until the contract is totally deploy
    //console.log(contract);
    await contract.deploymentTransaction().wait(1);
    console.log(`Contract deployed to ${await contract.getAddress()}`)



    //let pending_nonce = await wallet.getNonce(); // for ethers version 6.2.+
    //let currentWallet = await contract.watch({nonce: pending_nonce});
    //console.log(`Current money in my wallet: ${currentWallet}`);
    

    //console.log("Adding money in my wallet ...");
    //pending_nonce = await wallet.getNonce();
    //let transactionResponse = await contract.store(10, {nonce: pending_nonce});
    //let transactionReceipt = await transactionResponse.wait(1);

    //pending_nonce = await wallet.getNonce();
    //currentWallet = await contract.watch({nonce: pending_nonce});
    //console.log(`Current money in my wallet: ${currentWallet}`);

    //console.log("Taking money in my wallet ...");
    //pending_nonce = await wallet.getNonce();
    //transactionResponse = await contract.take(8, {nonce: pending_nonce});
    //transactionReceipt = await transactionResponse.wait(1);

    //pending_nonce = await wallet.getNonce();
    //currentWallet = await contract.watch({nonce: pending_nonce});
    //console.log(`Current money in my wallet: ${currentWallet}`);
   
 

    
   
    

}
main()