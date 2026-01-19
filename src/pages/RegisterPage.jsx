import React from 'react'
import { useState } from 'react'
import  '../styling/Register.css'
import axios from 'axios'
import { NavLink, useNavigate } from 'react-router-dom'

const RegisterPage = () => {

    const nav = useNavigate()

   const [formdata,setFormData] = useState({name:"", email:"",number:"",password:"",role:""});

   

   const dataHandler=(e)=>{
      
    setFormData({...formdata,[e.target.name]:e.target.value})

   }

   const SubmitMe=async(e)=>{
    e.preventDefault()

    try{

       const result = await axios.post('https://crud-app-task.onrender.com//register',formdata)

        setFormData(result.data)

        nav('/loginpage')
        

        alert("User Registration Successful")

    } catch(err){
        alert("User Registration Failed...",err);
    }



   }

  return (
   <>

   <div className="container d-flex justify-content-center align-items-center my-5">
    
        <div className="card show p-4" style={{width: "420px",borderRadius:"12px"}}>
           
            <h3 className='text-center mb-4'>Create your account</h3>


            <form onSubmit={(e)=>SubmitMe(e)}>
                <div className='mb-4 text-center'>
                <input type="text" className='w-100'
                name='name' 
                id='name' 
                required placeholder='Enter Name' 
                value={formdata.name} 
                onChange={(e)=>dataHandler(e)}/>
                </div>

                <div className="mt-4  text-center">
                    <input type="email"  className='w-100'
                    name='email' 
                    id='email' 
                    required placeholder='Enter Email Address' 
                    value={formdata.email} 
                    onChange={(e)=>dataHandler(e)}/>
                </div>

                <div className="mt-4  text-center">
                    <input type="number"  className='w-100'
                     name='number' id='number'
                      required placeholder='Enter Mobile Number'
                       value={formdata.number} 
                       onChange={(e)=>dataHandler(e)}/>
                </div>

                <div className="mt-4  text-center">
                    <input type="password" className='w-100'
                    name='password' 
                    id='password' 
                    required placeholder='Enter Password' 
                    value={formdata.password} 
                    onChange={(e)=>dataHandler(e)}/>
                </div>

                
                 
                 <div className='mt-4 expand-lg  text-center'>
                <button type='submit' className='btn   btn-sm btn-success w-100 '>Register</button>
                </div>

                <p className='text-center mt-3'>
                    Already have an account? <span className='text-primary'><NavLink to='/loginpage'>Login</NavLink></span>
                </p>
            </form>
            </div>
        
     
   </div>

   </>
  )
}

export default RegisterPage