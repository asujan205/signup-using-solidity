//import SignData from "./SignData";
const AuthValidation = async (username, accountAddress, password, digiCode, gas,web3, contract) => {

    let userAddress = await contract.methods.getUserAddress().call({ from: accountAddress ,gas});

    if (userAddress.toLowerCase() !== accountAddress.toLowerCase()) {
        return false;
    } else {
       // let signedData = await SignData(username, accountAddress, web3);
        let hash = await web3.eth.accounts.hashMessage(username+password + digiCode);

        //let hash = await web3.eth.accounts.hashMessage(username + passwordDigiCodeHash);

        // get hash from the contract
        let hashFromContract = await contract.methods.getSignatureHash().call({ from: accountAddress });

        if (hash === hashFromContract) {
            return true;
        } else {
            return false;
        }
    }
}

export default AuthValidation;