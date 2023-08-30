import React, { useEffect, useState } from 'react';
import './Form.css';

function Form(){

    const data ={name:'',email:'',password:''};
    const [inputData,setInputData]=useState(data);
    const [flag,setFlag]=useState(false);

    useEffect(()=>{
        console.log('Registered')
    },[flag]);

    function handleData(e){   //key : value pair
        setInputData({...inputData,[e.target.name]:e.target.value})
     console.log(inputData);
    }

   function handleSubmit(e){
    e.preventDefault();
    if(!inputData.name || !inputData.email || !inputData.password){
        alert('All fields are Mandatory')
    }
    else{
       setFlag(true)
    }
   }

    return(
        <div className='' >
        <pre>{(flag)?<h2>Hello{inputData.name},you have Registered</h2>:" nothing here to show"}</pre>
        <form className='container' onSubmit={handleSubmit}>
            <div className='header'>
                <h1>Registration form</h1>

            </div>
            <div>
                <input type='text' placeholder='Enter your name' name='name' value={inputData.name} onChange={handleData}></input>
            </div>
            <div>
                <input type='text' placeholder='Enter your email' name='email' value={inputData.email} onChange={handleData}></input>
            </div>
            <div>
                <input type='text' placeholder='Enter your password' name='password' value={inputData.password} onChange={handleData}></input>
            </div>
            <div>
                <button type='submit' >Submit</button>
            </div>

        </form>
        </div>
    )
}

export default Form;
