// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

// npx hardhat run scripts/balance.js --network localhost
// npx hardhat run scripts/mint.js --network localhost
// npx hardhat run scripts/transfer.js --network localhost
// npx hardhat run scripts/burn.js --network localhost

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract GenesisToken is ERC20 {
    address private _owner;

    constructor(string memory name, string memory symbol) ERC20(name, symbol) {
        _owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == _owner, "Caller is not the owner");
        _;
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    function burn(uint256 amount) public {
        _burn(msg.sender, amount);
    }

    function owner() public view returns (address) {
        return _owner;
    }

    function transferTokens(address to, uint256 amount) public {
        require(to != address(0), "Invalid recipient address");
        require(balanceOf(msg.sender) >= amount, "Insufficient balance");

        _transfer(msg.sender, to, amount);
    }
}
