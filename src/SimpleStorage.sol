// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract SimpleStorage {
    string private storedValue;

    event ValueChanged(string newValue);

    // Function to set the value
    function setValue(string calldata newValue) external {
        storedValue = newValue;
        emit ValueChanged(newValue);
    }

    // Function to get the value
    function getValue() external view returns (string memory) {
        return storedValue;
    }
}
