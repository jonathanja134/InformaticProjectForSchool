//SPDX-License-Identifier: MIT
pragma solidity 0.8.7;

contract pixicam{
    // ----------------------------------- AFFICHAGE ----------------------------------- //

    // On définit la variable pixelArray qui est un array de 40 par 40
    uint8 constant length = 40;
    
    // On définit le nombre de sous tableaux
    uint8 constant SubArrayNum = 16;

    // On définit la structure qui inclura les sous tableaux
    struct SubArray {
    uint8[length][length] data;
    }

    // Création de 9 sous tableaux de 40 par 40
    SubArray[SubArrayNum] private pixelArray;

    // Fonction qui renvoit un des 9 sous tableaux de 40 par 40
    function getSubArray(uint8 index) public view returns (uint8[length][length] memory) {
        require(index < SubArrayNum, "Index out of bounds");
        return pixelArray[index].data;
    }

    // ----------------------------------- MODIFICATION ----------------------------------- //

    // Fonction pour changer la valeur d'un element du sous tableau "index" à l'index x; y
    function setValuePixel(uint8 index, uint8 row, uint8 col, uint8 value) public {
        require(index < SubArrayNum, "Index out of bounds");
        require(row < length, "Row index out of bounds");
        require(col < length, "Column index out of bounds");
        pixelArray[index].data[row][col] = value;
    }

    // ----------------------------------- MODERATION ----------------------------------- //

    // On map chaque adresse de modérateur à une bool
    mapping(address => bool) private isOwner;

    // Constructeur du contrat, appelé une seule fois lors du déploiement
    constructor(){
        isOwner[msg.sender] = true; // Ajoute le déployeur comme modérateur initial
    }

    // Modifier utilisé pour voir si la personne appelant la fonction est bien uns des modérateurs du contrat
    modifier OnlyOwner() {
        require(isOwner[msg.sender], "Error: Not an owner");
        _;
    }

    // Fonction pour ajouter une adresse à la liste des modérateurs
    function addOwner(address newOwner) public OnlyOwner {
        require(!isOwner[newOwner], "Error: Address is already an owner");
        isOwner[newOwner] = true;
    }
}