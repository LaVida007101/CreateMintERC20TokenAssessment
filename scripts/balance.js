const { ethers } = require("hardhat");

async function main() {
    const tokenAddress = "0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6";
    const targetAddress = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";

    const Token = await ethers.getContractAt("GenesisToken", tokenAddress);

    console.log(`Checking balance for address: ${targetAddress}`);
    const balance = await Token.balanceOf(targetAddress);

    console.log(`Balance: ${ethers.utils.formatEther(balance)} tokens`);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
