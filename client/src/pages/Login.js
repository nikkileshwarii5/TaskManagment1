import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import {toast} from 'react-hot-toast';
import {useNavigate} from 'react-router-dom';
import './Style.css';
import logo23 from './images/logo23.png';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';

const Login = () => {
    const navigate = useNavigate()
    const[data,setData] =useState({
        email: '',
        password: '',
    })
    const loginUser = async(e)=>{

        e.preventDefault()
        const{email, password} = data
        try{
            const{data} = await axios.post('/login',{
               email, 
               password
        })
        if(data.error){
            toast.error(data.error)
          }else{
            setData({})
           
            navigate('/dashboard')
          }


        }catch(error){
            console.log(error)

        }

    }
  return (
    <div className="container">
       <div className="forms-container">
          <div className="signin">
            <form action='#' onSubmit={loginUser} className="sign-in-form">
            <h2 className="title">Sign In</h2>
            <div className="input-field">
              <EmailIcon style={{ fontSize: 30, color: 'grey', marginTop: '10px', marginLeft: '10px' ,opacity:'.4px'}} />
                <input 
                type='email'
                name="email"
                placeholder='Email' value={data.email} onChange={(e)=>setData({...data, email: e.target.value})}/>
            </div>
            <div className="input-field">
             <LockIcon style={{ fontSize: 30, color: 'grey', marginTop: '10px', marginLeft: '10px' ,opacity:'.3px'}} />
              <input 
              type='password' 
              name="password"
              placeholder='Password' value={data.password} onChange={(e)=>setData({...data, password: e.target.value})}/>
            </div>
            <input type="submit" value="Login" className="btn solid" />
   
            </form>
            </div>
</div>


        
        <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
          <h3>Great to See You Again!</h3>
          <p>Let's Turn Plans into Achievements</p>
            {/* <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p> */}
            {/* <button className="btn transparent" id="sign-up-btn">
              Sign up
            </button> */}
          </div>
          <img src={logo23} className="image" alt="" />
          </div>



    </div>
    </div>




    





    
  )
}

export default Login
