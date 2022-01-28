import React, { useState } from 'react';
import sha256 from 'sha256';
const Login=()=>{
    const[username,setUsername]=useState('');
    const[password,setPassword]=useState('');
    const[digicode,setDigicode]= useState('');
    const[error,setError]=useState(null);
    const[loading,setLoading]=useState(false);
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
    const handleSubmit=()=>{
        const hash =sha256(username+password+digicode).toString();
         console.log(hash)
        setHash(hash)
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