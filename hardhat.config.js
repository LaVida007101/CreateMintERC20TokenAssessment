require("@nomiclabs/hardhat-ethers");

module.exports = {
    solidity: "0.8.27",
    networks: {
        hardhat: {},
        localhost: {
            url: "http://127.0.0.1:8545",
        },
    },
};