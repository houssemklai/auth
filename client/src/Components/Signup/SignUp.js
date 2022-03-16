import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signup } from '../../redux/action/authActions';
import './SignUp.css'

function SignUp() {
  const [email,setEmail]=useState('')
  const [password, setPassword]=useState('')
  const dispatch= useDispatch()
  const navigate= useNavigate()
  const errors= useSelector(state=>state.authReducer.errors)
  useEffect(()=>{
    errors && errors.map(el=> alert(el.msg))

  },[errors])
  
  return <div>
<div>
        <div className="bold-line" />
        <div className="container">
          <div className="window">
            <div className="overlay" />
            <div className="content">
              <div className="welcome">Hello There!</div>
              <div className="subtitle">We're almost done. Before using our services you need to create an account.</div>
              <div className="input-fields">
                {/* <input type="text" placeholder="Username" className="input-line full-width" /> */}
                <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Email" className="input-line full-width" />
                <input value={password}  onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" className="input-line full-width" />
              </div>
              <div className="spacing">already have an account <span className="highlight">Sign In</span></div>
              <div><button className="ghost-round full-width" onClick={()=>dispatch(signup({email,password},navigate))}
              >Create Account</button></div>
            </div>
          </div>
        </div>
      </div>
</div>;
}

export default SignUp;