// SPDX-License-Identifier: MIT
pragma solidity "0.8.7";

contract wallet {
    uint256 private money;
    address private owner;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Error it is not your wallet");
        _;
    }

    function store(uint256 _money) public onlyOwner {
        money = _money;
    }

    function take(uint256 takenMoney) public onlyOwner {
        require(
            takenMoney <= money,
            "Error you don't have enough money in your wallet"
        );
        money = money - takenMoney;
    }

    function watch() public view onlyOwner returns (uint256 _money) {
        _money = money;
    }
}
