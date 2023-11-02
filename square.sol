// SPDX-License-Identifier: MIT
pragma solidity "0.8.7";

contract square {
    uint256[2][2] private t;

    function getter(
        uint256 Xindex,
        uint256 Yindex
    ) public view returns (uint256 value) {
        value = t[Xindex][Yindex];
    }

    function setter(
        uint256 Xindex,
        uint256 Yindex,
        uint256 valueC
    ) public returns (uint256 value) {
        t[Xindex][Yindex] = valueC;
        value = getter(Xindex, Yindex);
    }
}
