export const contractAddress = "0x02ea0922e290f70c967973F03deced5e5dB56F89"


export const abi = 
[
  {
    "inputs": [
      { "internalType": "uint256", "name": "Xindex", "type": "uint256" },
      { "internalType": "uint256", "name": "Yindex", "type": "uint256" }
    ],
    "name": "getter",
    "outputs": [
      { "internalType": "uint256", "name": "value", "type": "uint256" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "Xindex", "type": "uint256" },
      { "internalType": "uint256", "name": "Yindex", "type": "uint256" },
      { "internalType": "uint256", "name": "valueC", "type": "uint256" }
    ],
    "name": "setter",
    "outputs": [
      { "internalType": "uint256", "name": "value", "type": "uint256" }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]
