const { ethers } = require("hardhat");

async function main() {
    const tokenAddress = "0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6";
    const amount = ethers.utils.parseEther("5");

    const Token = await ethers.getContractAt("GenesisToken", tokenAddress);
    const [caller] = await ethers.getSigners();

    console.log(`Burning ${ethers.utils.formatEther(amount)} tokens from ${caller.address}`);
    await Token.connect(caller).burn(amount);

    console.log("Burning Done");
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
