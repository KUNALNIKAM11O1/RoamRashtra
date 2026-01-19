import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import {  toast } from 'react-toastify';



const EditPage = () => {

    const nav = useNavigate()


   const [data,setData] = useState({name:"", email:"",number:"",password:""})

   const {id} = useParams()

   const FetchData=async()=>{

    try{

    const result = await axios.get(`https://crud-app-task.onrender.com//register/${id}`)

    setData({name:result.data.name,email:result.data.email,number:result.data.number,password:result.data.result})

    

    } catch(err) {
        console.log(err)
    }

   }

   useEffect(()=>{

    FetchData()
   },[])

   const dataHandler=(e)=>{

    setData({...data,[e.target.name]:e.target.value})
   }

   const UpdateMe=async(e)=>{

    e.preventDefault()

    try{

        await axios.put(`https://crud-app-task.onrender.com//register/${id}`,data)

        toast.success("User data updated")

        nav('/admin/users')
      

    } catch(err) {
        console.log(err)
    }

   }


   

  return (
   <>

    <div className="container d-flex justify-content-center align-items-center my-5">
    
        <div className="card show p-4" style={{width: "420px",borderRadius:"12px"}}>
           
            <h3 className='text-center mb-4'>Update Your Info</h3>


            <form onSubmit={(e)=>UpdateMe(e)}>
                <div className='mb-4 text-center'>
                <input type="text" className='w-100'
                name='name' 
                id='name' 
                required placeholder='Enter Name' 
                value={data.name} 
                onChange={(e)=>dataHandler(e)}/>
                </div>

                <div className="mt-4  text-center">
                    <input type="email"  className='w-100'
                    name='email' 
                    id='email' 
                    required placeholder='Enter Email Address' 
                    value={data.email} 
                    onChange={(e)=>dataHandler(e)}/>
                </div>

                <div className="mt-4  text-center">
                    <input type="number"  className='w-100'
                     name='number' id='number'
                      required placeholder='Enter Mobile Number'
                       value={data.number} 
                       onChange={(e)=>dataHandler(e)}/>
                </div>

                <div className="mt-4  text-center">
                    <input type="password" className='w-100'
                    name='password' 
                    id='password' 
                    required placeholder='Enter Password' 
                    value={data.password} 
                    onChange={(e)=>dataHandler(e)}/>
                </div>
                 
                 <div className='mt-4 expand-lg  text-center'>
                <button type='submit' className='btn btn-sm w-100 ' style={{backgroundColor:"orange"}}>Update</button>
                </div>

               
            </form>
            </div>
        
     
   </div>

   
   </>
  )
}

export default EditPage