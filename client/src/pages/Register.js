import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import {toast} from 'react-hot-toast';
import {useNavigate} from 'react-router-dom';
import './Styles.css'
import logo22 from './images/logo22.png'
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';

const Register = () => {
  const navigate = useNavigate()
    const[data,setData] = useState({
        name: '',
        email: '',
        password: '',

    })
    const registerUser = async(e)=>{
        e.preventDefault()
        const {name, email, password} = data
        try{
          const{data} = await axios.post('/register',{
            name, email, password
          })
          if(data.error){
            toast.error(data.error)
          }else{
            setData({})
            toast.success('Login Successful. Hey Welcome!!')
            navigate('/login')
          }


        }catch (error) {
          console.log(error)

        }
    }

  return (
    <div className="container">
    <div className="forms-container">
      <div className="signup-signin">
    <form action="#" onSubmit={registerUser} className="sign-up-form">
    <h2 className="title">Sign Up</h2>
    <div className="input-field">
     <PersonIcon style={{ fontSize: 30, color: 'grey', marginTop: '10px', marginLeft: '10px' ,opacity:'.4px'}}/>

            <input
            type='text'
            name="text"
            placeholder='Username' 
            value={data.name} 
            onChange={(e)=>setData({...data, name: e.target.value})}/>
    </div>
    <div className="input-field">
    <EmailIcon style={{ fontSize: 30, color: 'grey', marginTop: '10px', marginLeft: '10px' ,opacity:'.4px'}} />
            <input
            type='email'
            name="email"
            placeholder='Email' 
            value={data.email} 
            onChange={(e)=>setData({...data, email: e.target.value})}/>
 </div>
 <div className="input-field">
 <LockIcon style={{ fontSize: 30, color: 'grey', marginTop: '10px', marginLeft: '10px' ,opacity:'.3px'}} />
            <input
            type='password'
            name="password"
            placeholder='Password' 
            value={data.password} 
            onChange={(e)=>setData({...data, password: e.target.value})}/>
   </div>
   <input type="submit" className="btns" value="Sign up" />
        </form>
      
      </div>


</div>
    <div className="panels-container">
    <div className="panel left-panel">
    
          <div className="content">
            <h3>Welcome Aboard</h3>
             <p className='par'>Let's Make Every Day Count !!</p> 
            {/* <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            */}
          </div>
          <img src={logo22} className="image" alt="" />
        </div>
      </div>

    </div>
    
   
  )
}

export default Register
