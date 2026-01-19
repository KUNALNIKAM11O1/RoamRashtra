import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, NavLink, useParams } from 'react-router-dom'


const LoginPage = () => {
  

    const nav = useNavigate()

    const [data,setData] = useState([])

   const [email,setEmail] = useState()

   const [password,setPassword] = useState()

   const DataSet=async()=>{
         
    try{

      const result = await axios.get('https://crud-app-task.onrender.com//register')

      setData(result.data)

    } catch(err) {

    }
   }


   useEffect(()=>{
      DataSet()
   },[])

   const emailHandler=(e)=>{
    setEmail(e.target.value)
   }

   const passwordHandler=(e)=>{
    setPassword(e.target.value)
   }

   const handleLogin = async (e) => {
  e.preventDefault()

  try {
    const result = await axios.get('https://crud-app-task.onrender.com//register', {
      params: { email, password }
    })

    if (result.data.length > 0) {
      const user = result.data[0]

      localStorage.setItem("user", JSON.stringify(user))
      JSON.parse(localStorage.getItem("user"))

      const email = user?.email;
      const id = user?.id;

      alert("Valid Credentials")

     
      if (user.role === "admin") {
        nav('/admin/users',{state:{email:user.email,id:user.id}})
      } else {
        nav('/',{state:{email:user.email,id:user.id}})   
      }

    } else {
      alert("Invalid Credentials")
    }

  } catch (err) {
    console.log(err)
  }
}
   

  return (
  
    <>

    <div className="container d-flex justify-content-center align-items-center my-5" onSubmit={(e)=>handleLogin(e)}>
        <div className="card shadow p-4" style={{width: "420px",borderRadius:"12px"}}>
            <h3 className='text-center mb-4'>Login Account</h3>

            <form action="">
               <div className="mb-4">
                <label htmlFor="form-label">Email Address</label>
                <input type="email" className='form-control' placeholder='example@gmail.com' value={email} onChange={(e)=>emailHandler(e)}/>
               </div>

               <div className="mb-4">
                <label htmlFor="form-label">Password</label>
                <input type="password" className='form-control' placeholder='enter password' value={password} onChange={(e)=>passwordHandler(e)} />
               </div>


               <div className="d-grid">
                <button type='submit' className='btn btn-primary'>Login</button>
               </div>
               
               
                <p className='text-center mt-3'>
                    Don't have an account? <span className='text-primary'><NavLink to='/registerpage'>Sign up</NavLink></span>
                </p>

            </form>
        </div>
    </div>
    
    
    
    
    </>
    

     

  )
}

export default LoginPage