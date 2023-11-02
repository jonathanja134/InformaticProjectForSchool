const ethers = require("ethers");
const fs = require("fs-extra");

async function main() {
    const provider =  new ethers.JsonRpcProvider("HTTP://127.0.0.1:7545"); //connect to the blockchain
    const wallet = new ethers.Wallet("0xa39ed3dcd0ad9b04ccfd969ff3f1980fb976c0c3c2e3dbe9031fba34d265a6e1", provider);

    //get the abi and the binary
    const abi = fs.readFileSync("./square_sol_square.abi", "utf8");
    const binary = fs.readFileSync("./square_sol_square.bin", "utf8");
    
    //object use to deploy contract
    const contractFactory = new ethers.ContractFactory(abi,binary,wallet);
    console.log("Deploying, please wait...");
    //deploy the contract
    const contract = await contractFactory.deploy(); // await for wait until the contract is totally deploy
    console.log(contract);
    await contract.deploymentTransaction().wait(1);
    console.log(`Contract deployed to ${await contract.getAddress()}`)
    
}
main()


