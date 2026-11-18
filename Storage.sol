
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract Addition {

    uint256 public result;

    // Function to add two numbers
    function addNumbers(uint256 a, uint256 b) public {
        result = a + b;
    }

    // Function to get the result
    function getResult() public view returns (uint256) {
        return result;
    }
}
