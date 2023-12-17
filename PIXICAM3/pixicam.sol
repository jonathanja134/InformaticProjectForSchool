//SPDX-License-Identifier: MIT
pragma solidity 0.8.7;

contract pixicam {
    uint8 constant length = 40;
    uint8 constant SubArrayNum = 16;

    struct SubArray {
        uint8[length][length] data;
    }

    SubArray[SubArrayNum] private pixelArray;

    function getSubArray(
        uint8 index
    ) public view returns (uint8[length][length] memory) {
        require(index < SubArrayNum, "Index out of bounds");
        return pixelArray[index].data;
    }

    function setValuePixel(
        uint8 index,
        uint8 row,
        uint8 col,
        uint8 value
    ) public {
        require(index < SubArrayNum, "Index out of bounds");
        require(row < length, "Row index out of bounds");
        require(col < length, "Column index out of bounds");
        pixelArray[index].data[row][col] = value;
    }

    //mapping(address => bool) private isOwner;

    //constructor() {
    //isOwner[msg.sender] = true;
    //}

    //modifier OnlyOwner() {
    //require(isOwner[msg.sender], "Error: Not an owner");
    //_;
    //}

    //function addOwner(address newOwner) public OnlyOwner {
    //require(!isOwner[newOwner], "Error: Address is already an owner");
    //isOwner[newOwner] = true;
    //}
}
