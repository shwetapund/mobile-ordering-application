import React, { useEffect, useState } from 'react'
import axios from "axios";
import './Login.css';
import Navbar from './../../components/Navbar/Navbar';
import { Link } from 'react-router-dom';
import loginImg from "./../../assets/loginImg.svg"

function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const login = async () => {
    try {
      const response = await axios.post('/api/v1/login', {
        email: email,
        password: password
      })

      alert(response?.data?.message);
      if (response?.data?.success) {
        localStorage.setItem('user', JSON.stringify(response?.data?.data))
        window.location.href = "/"
      }
    } catch (err) {
      console.log(err.message)
    }
  }



  return (
    <>
      <div className='bg-gray-100'>
        <Navbar />
        <div className='flex mt-5'>
          <div>
            <img src={loginImg} className='signup-img' />
          </div>
          <div>
            <form className='login-container'>
              <h1 className='text-center text-2xl font-bold'>Mobile Shoppy</h1>

              <div className='mt-5'>
                <label htmlFor='email' className='me-8'>Email : </label>

                <input
                  type='email'
                  id='email'
                  className='form-control'
                  placeholder='enter your Email'
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>

              <div >
                <label htmlFor='password' className='me-1'>Password : </label>
                <input
                  type='password'
                  id='password'
                  className='form-control'
                  placeholder='enter your Password'
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>

              <button
                type='button'
                className='btn login-btn'
                onClick={login}
              >Login</button>

              <p className='text-center'>
              create a new account ? 
                <Link to="/signup" className='link-text'>
                   SignUp
                 </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
