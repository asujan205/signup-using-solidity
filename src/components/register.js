import sha256 from "sha256";
import Web3  from "web3";
import {LoginAbi} from "../Authentication";
 const web3 = new Web3(Web3.givenProvider)
 const contractAddress = "0xcDa84ed4fC81363539Fdf0718BC61EFBE6389DD0"; 
 const authenticatecontract = new web3.eth.Contract (LoginAbi, contractAddress);
 const Register = async(username,password,digicode)=>{
     const hash = sha256(username+password+digicode);
     const accounts = await web3.eth.givenProvider.enable();
     const account = accounts[0];
     const gas = await authenticatecontract.methods.register(hash).estimateGas();
     const result = await authenticatecontract.methods.register(hash).send({from:account,gas})
     console.log(result)

 }
 export default Register;