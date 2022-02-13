import React, { useState } from 'react';
import sha256 from 'sha256';
import AuthValidation from './Authvalidation';
//import AuthValidation from './Authvalidation';
import Web3 from 'web3';

import {LoginAbi} from "../Authentication";
 const web3 = new Web3(Web3.givenProvider)
 const contractAddress = "0xcDa84ed4fC81363539Fdf0718BC61EFBE6389DD0"; 
 
 const authenticatecontract = new web3.eth.Contract (LoginAbi,contractAddress);
const Login=()=>{
    const[username,setUsername]=useState('');
    const[password,setPassword]=useState('');
    const[digicode,setDigicode]= useState('');
    const[error,setError]=useState(null);
    const[loading,setLoading]=useState(false);
    const[hashSignature,setHash]=useState('')
    const[loggedin,setLoggedIn]=useState(false)
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
    const handleSubmit= async()=>{

        const hash =sha256(username+password+digicode).toString();
         console.log(hash)
        setHash(hash)
        
       const accounts = await web3.eth.givenProvider.enable();

       const  account= accounts[0]
       let gas= await authenticatecontract.methods.getUserAddress().estimateGas();
        //let userAddress = await authenticatecontract.methods.getUserAddress()
                  //  .call({ from: account ,gas});
        let validate = AuthValidation(username,account,password,digicode,gas,web3,authenticatecontract)
        console.log(validate)
        if(!validate){
            setError('Invalid cardinals');
            setLoading(false);
            setLoggedIn(false);
            setUsername('')
            setPassword('')
            setDigicode('')
         return;
        }
        else{
            setError(null);
            setLoggedIn(false);
            setUsername('')
            setPassword('')
            setDigicode('')
            console.log('sujan')
            

        }
    }
    return (
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
export default Login;