# CreateMintERC20TokenAssessment
A smart contract for a custom ERC20 Token in requirements of the Metacrafters Project: Create and Mint Token Assessment

# Description
The smart contract inherits from the ERC20 contract for creating a contract for a custom Token creation with Minting, Transferring and Burning functionalities.

## Functionalities

### Minting the custom token
The smart contract allows for minting of the token. <br/>
This feature is only accessible to the contract owner. <br/>

### Transferring 
The smart contract allows for transferring tokens to other accounts. <br/>
This requires to parameters, ***adress*** to where to transfer to and the ***amount***, make sure the account transferring has enough balance for the amount being transfered. <br/>

### Burning
The smart contract allows for burning tokens. <br/>
This burns tokens from the caller's account.

## Getting Started
### Requirements
**Node.js**: Download and install from [here](https://nodejs.org/en). <br/>
All other requirements should be set up with **npm i** once running the program.

### Running the program
Inside the project directory, in the terminal type: npm i <br/>
type: npx hardhat compile <br/>
type: npx hardhat node <br/>
type: npx hardhat run --network localhost scripts/deploy.js <br/>
type the JS scripts commented out on the contract depending on what you need

## Authors
Genesis Dumallay<br/>
[202111019@fit.edu.ph](mailto:202111019@fit.edu.ph)

## License
This project is licensed under the MIT License - see the LICENSE file for details

