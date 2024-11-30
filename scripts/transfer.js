const { ethers } = require("hardhat");

async function main() {
    const tokenAddress = "0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6";
    const recipient = "0xBcd4042DE499D14e55001CcbB24a551F3b954096";
    const amount = ethers.utils.parseEther("2");

    const Token = await ethers.getContractAt("GenesisToken", tokenAddress);
    const [caller] = await ethers.getSigners();

    console.log(`Caller address: ${caller.address}`);
    console.log(`Transferring ${ethers.utils.formatEther(amount)} tokens to ${recipient}...`);

    await Token.connect(caller).transferTokens(recipient, amount);

    console.log("Transfer Done");
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
