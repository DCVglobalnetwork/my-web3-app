document.addEventListener('DOMContentLoaded', () => {
    if (typeof window.ethereum !== 'undefined') {
        console.log('MetaMask is installed!');
    } else {
        alert('Please install MetaMask to use this dApp!');
    }

    const web3 = new Web3(window.ethereum);
    let account;

    const contractABI = [/ * ABI Please place your ABI here */];
    const contractAddress = '0x00 Place your contract address here';
    const myContract = new web3.eth.Contract(contractABI, contractAddress);

    const connectButton = document.getElementById('connectButton');
    const accountSpan = document.getElementById('account');
    const readButton = document.getElementById('readButton');
    const valueSpan = document.getElementById('value');
    const writeButton = document.getElementById('writeButton');
    const newValueInput = document.getElementById('newValue');

    connectButton.addEventListener('click', async () => {
        try {
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            account = accounts[0];
            accountSpan.textContent = account;
        } catch (error) {
            console.error('User rejected connection request', error);
        }
    });

    readButton.addEventListener('click', async () => {
        try {
            const value = await myContract.methods.getValue().call();
            valueSpan.textContent = value;
        } catch (error) {
            console.error('Error reading value', error);
        }
    });

    writeButton.addEventListener('click', async () => {
        const newValue = newValueInput.value;
        if (!newValue) {
            alert('Please enter a new value');
            return;
        }

        try {
            await myContract.methods.setValue(newValue).send({ from: account });
            alert('Value set successfully!');
        } catch (error) {
            console.error('Error writing value', error);
        }
    });
});


