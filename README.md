# My Web3 App

A basic web3 application that can connect to MetaMask, read data from a smart contract, and write data to it. Customize the ABI and contract address as needed for your specific smart contract.

## Prerequisites

Node.js and npm: Make sure you have Node.js and npm installed.

Text Editor: Use any text editor like VS Code, Sublime Text, or Atom.

Basic Knowledge: Familiarity with JavaScript, HTML, and CSS.

## Get Started

Node.js

Web3.js

http-server

### Installation

 Clone the repository:
    ```sh
    git clone https://github.com/DCVglobalnetwork/my-web3-app.git
    cd my-web3-app
    ```

#    Smart Contract

Ensure your smart contract is deployed on the Ethereum network you are connecting to
(e.g., Ropsten, Mainnet, or a local development network). Replace /* ABI array */ and 0xYourContractAddress in the app.js file with the actual ABI and address of your deployed contract.


Compile and Deploy the Contract

Use Remix, a popular web-based IDE for Solidity, to compile and deploy the contract:

Open Remix.
Create a new file SimpleStorage.sol and paste the above Solidity code.
Compile the contract.
Deploy the contract using the provided JavaScript VM or connect to an Ethereum test network using MetaMask.
# Get the Contract Address and ABI

# After deploying the contract, Remix will display the deployed contract's address and ABI (Application Binary Interface). You will need these for your web3 application.

# The ABI can be found in the "Compilation Details" or directly in Remix's sidebar after deploying the contract.
The contract address will be shown in the "Deployed Contracts" section.
Update the Web3 Application

# Replace /* ABI array */ and 0xYourContractAddress in the src/app.js file with the actual ABI and address from Remix.

See as an example below

A. Copy of your deployed contract
   
![image](https://github.com/DCVglobalnetwork/my-web3-app/assets/105791829/72074094-13a5-4902-a3f1-2877c7b6dbc4)


B. Copy of your ABI 

![image](https://github.com/DCVglobalnetwork/my-web3-app/assets/105791829/e5175655-b6a5-49ab-9307-62e9dbcb0a30)


 Install dependencies:
 
   
    npm init -y
    
  
    
Web3.js

    
    npm install web3

    
HTTP-SERVER

    
    npm install -g http-server
    

    
Start the server   


    
    http-server src
  
    
Open your browser and navigate to http://localhost:8080 (or the port provided by http-server).

## Interact with the Contract

Click the "Connect to MetaMask" button to connect your MetaMask wallet.
Use the "Read Value" button to fetch the stored value from the contract.
Enter a new value in the input field and click the "Write Value" button to update the stored value.


See as an example below

![image](https://github.com/DCVglobalnetwork/my-web3-app/assets/105791829/71ced7bb-a416-4e5d-9a65-0cdcafbaf6f8)


## Usage

- `setValue(string newValue)` - Set a new value.
- `getValue()` - Get the stored value.

## License

This project is licensed under the MIT License.

# Security Notice

**Important: Use Developer Accounts Only**
When interacting with this project, it is crucial to use only developer accounts in Metamask and never use real money or accounts containing valuable assets. This project is intended for development and testing purposes only, and it may not be secure enough for handling real funds.

## Recommendations:

 **Create a Separate Metamask Account for Development**:
 
## Set up a new Metamask account specifically for development and testing. This ensures that your real assets are not at risk.

**Use Local or Test Networks**: Deploy and test the smart contracts on local development networks (like Ganache) or public testnets (like Sepolia). These environments are designed for safe development and testing, and they use test Ether, which has no real-world value.


**Never Share Private Keys**: Ensure that you never share your private keys or seed phrases. Always keep them secure and confidential.

**Audit and Review Code**: Before deploying any smart contract to the main Ethereum network (mainnet), have the code thoroughly reviewed and audited by experienced developers and/or professional auditors.

**Stay Updated**: Keep your development tools, dependencies, and libraries updated to incorporate the latest security patches and improvements.







