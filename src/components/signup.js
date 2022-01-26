import React, {useState} from "react";
import Keccak256 from 'keccak256'
import sha256 from "sha256";
import Web3  from "web3";
import {LoginAbi} from "../Authentication";
 const web3 = new Web3(Web3.givenProvider)
 const contractAddress = "0x505b95565f4103817a4B031aBD615514451B7767"; 
 const authenticatecontract = new web3.eth.Contract (LoginAbi, contractAddress);
const Signup = () =>{
    const[username,setUsername]=useState('sujan');
    const[password,setPassword]=useState('sujan');
    const[digicode,setDigicode]=useState('1233');
    const[hashSignature,setHash]=useState('')
    const handleChange=(e)=>{
        e.preventDefault();
        setUsername(e.target.name);
        setPassword(e.target.pwd);
        setDigicode(e.target.digicode);
    }
    console.log(username)
    
   
    const handleSubmit = async() =>{
      
        const hash =sha256(JSON.stringify(username+password+digicode)).toString();
    
        setHash(hash)
        console.log(hash)
        const accounts = await web3.eth.givenProvider.enable();
    const account = accounts[0];
    const gas = await authenticatecontract.methods.register(hashSignature).estimateGas();
    const result = await authenticatecontract.methods
      .register(hash)
      .send({ from: account, gas });
      console.log(result)

    }
    return(
        <div>
            <form>
         <span > username: <input type="text" className="username" id="username" name="name" onChange={handleChange} /></span><br/>
         <span>password:<input type="password" className="password" id="password" name="pwd" onChange={handleChange}  /></span><br/>
         <span>digicode:<input type="text" className="digicode" id="digicode" name="digicode" onChange={handleChange}   /></span>
         <br/>
         <input type='submit' onClick={handleSubmit}/>
         </form>

        </div>
    )
}
export default Signup;