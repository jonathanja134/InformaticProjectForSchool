const ethers = require("ethers")
const fs = require("fs-extra")


async function main(){
    let provider = new ethers.JsonRpcProvider("HTTP://127.0.0.1:7545") 
    let wallet = new ethers.Wallet("0x11a651499e1ce3cfbeaee217b189381e1ff1006a53b1224277e70eb6fbfa2389", provider) 

    const abi = fs.readFileSync("./pixicam_sol_pixicam.abi", "utf8") 
    const binary = fs.readFileSync("./pixicam_sol_pixicam.bin","utf8")

    const contractFactory = new ethers.ContractFactory(abi, binary, wallet) 
    console.log("Deploying, please wait...")

    const contract = await contractFactory.deploy() 
    await contract.deploymentTransaction().wait(1); 
    console.log(`Contract deployed to ${await contract.getAddress()}`) 

}

main()
