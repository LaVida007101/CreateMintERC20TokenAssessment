const { ethers } = require("hardhat");

async function main() {
    const tokenAddress = "0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6";
    const recipient = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"; 
    const amount = ethers.utils.parseEther("10"); 

    const Token = await ethers.getContractAt("GenesisToken", tokenAddress);
    const [owner] = await ethers.getSigners();

    console.log(`Minting ${ethers.utils.formatEther(amount)} tokens to ${recipient}`);
    await Token.connect(owner).mint(recipient, amount);

    console.log("Minting Done");
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
