import React, {useState} from "react";
//import Keccak256 from 'keccak256'
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
    const handleSave =(e)=>{
        e.preventDefault()
      
        const names =e.target.name.value;
       // console.log(names)
        setUsername(names);
        const passd=e.target.pwd.value;
        
        setPassword(passd)
        const digi= e.target.digicode.value;
      
        setDigicode(digi);

    }
    /* const handlePassword =(e)=>{
        e.preventDefault()
        

    }
    const handleChange=(e)=>{
        e.preventDefault();
       
       
       
    }*/
   
   // console.log(username)
    const handleSubmit = async() =>{
      
        const hash =sha256(username+password+digicode).toString();
         console.log(hash)
        setHash(hash)
       
        const accounts = await web3.eth.givenProvider.enable();
       const account = accounts[0];
       const gas = await authenticatecontract.methods.register(hashSignature).estimateGas();
       const result = await authenticatecontract.methods
      .register(hashSignature)
      .send({ from: account, gas });
      console.log(result)

    }
    return(
        <div>
            <form onSubmit={handleSave}>
         <span > username: <input type="text" className="username" id="username" name="name"/></span><br/>
         <span>password:<input type="password"  className="password" id="password" name="pwd"  /></span><br/>
         <span>digicode:<input type="text"  className="digicode" id="digicode" name="digicode"  /></span>
         <br/>
         <input type='submit' onClick={handleSubmit}/>
         </form>
         

        </div>
    )
}
export default Signup;