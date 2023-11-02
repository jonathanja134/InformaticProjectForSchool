export const contractAddress = "0x2bD586DEE4fe5Fb4384bFC86F1F0b10c3369a9EB"


export const abi = 
[
    { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" },
    {
      "inputs": [
        { "internalType": "uint256", "name": "_money", "type": "uint256" }
      ],
      "name": "store",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "uint256", "name": "takenMoney", "type": "uint256" }
      ],
      "name": "take",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "watch",
      "outputs": [
        { "internalType": "uint256", "name": "_money", "type": "uint256" }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ]
  