const ethers = require("ethers")
const fs = require("fs-extra")


async function main(){
    let provider = new ethers.JsonRpcProvider("https://goerli.infura.io/v3/c9c0ff0ece56443b94cad03424cbe637") 
    let wallet = new ethers.Wallet("828a889eae35c81734a750e114951aa706605dc30fe00c1e5ad3ca86524b7cc5", provider) 

    const abi = fs.readFileSync("./pixicam_sol_pixicam.abi", "utf8") 
    const binary = fs.readFileSync("./pixicam_sol_pixicam.bin","utf8")

    const contractFactory = new ethers.ContractFactory(abi, binary, wallet) 
    console.log("Deploying, please wait...")

    const contract = await contractFactory.deploy() 
    await contract.deploymentTransaction().wait(1); 
    console.log(`Contract deployed to ${await contract.getAddress()}`) 

}

main()
