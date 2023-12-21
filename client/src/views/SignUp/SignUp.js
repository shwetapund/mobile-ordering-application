import React, { useState, useEffect } from 'react';
import axios from 'axios';
import signupimg from "./../../assets/signupImg.svg";
import Navbar from "./../../components/Navbar/Navbar";
import "./SignUp.css";
import { Link } from 'react-router-dom';

function SignUp() {
  const [name, setName] = useState('')
  const [mobileNo, setMobileNo] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [address, setAddress] = useState('')
  const [gender, setGender] = useState('female')

  const signup = async () => {
    if (!name) {
      alert("Name is require");
      return;
    }
    if (!mobileNo) {
      alert("Mobile is required");
      return;
    }
    if (!email) {
      alert("Email is required");
      return;
    }
    if (!password) {
      alert("Password is required");
      return;
    }
    if (!gender) {
      alert("gender is required");
      return;
    }

    const response = await axios.post('/api/v1/signup', {
      name: name,
      mobileNo: mobileNo,
      address: address,
      email: email,
      password: password,
      gender: gender

    })

    if (response?.data?.success) {
      alert(response?.data?.message);
      window.location.href = "/login";
    } else {
      alert(response?.data?.message);
    }
  }
  useEffect(() => {
    const storageUser = JSON.parse(localStorage.getItem("user") || '{}');

    if (storageUser?.email) {
      alert("You are already logged in!");
      window.location.href = "/";
    }
  }, [])

  return (<>
  <div className='bg-gray-100'>
    <Navbar />
    <div className='signup-container ' >
      <div>
        <img src={signupimg} className='signup-img' />
      </div>

      <form className='form-conatainer'>

        <h1 className='text-center title'>SignUp</h1>
        <div className='form-sub-container'>
          <div>
            <div>
              <label htmlFor='name'  >Name : </label>
              <input
                type='text'
                id='name'
                className='form-control'
                placeholder='enter your Name'
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>

            <div>
              <label htmlFor='mobile'>Mobile : </label>
              <input
                type='text'
                id='mobile'
                className='form-control'
                placeholder='enter your Mobile'
                value={mobileNo}
                onChange={(e) => {
                  setMobileNo(e.target.value);
                }}
              />
            </div>

            <div>
              <label htmlFor='email'>Email : </label>
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
          </div>

          <div>
            <div>
              <label htmlFor='password'>Password : </label>
              <input
                type='text'
                id='password'
                className='form-control'
                placeholder='enter your Password'
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>

            <div>
              <label htmlFor='address'>Address : </label>
              <input
                type='text'
                id='address'
                className='form-control'
                placeholder='enter your Address'
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
            </div>

            <div>
              <label>Gender: </label><br/><br/>
              <input
                type='radio'
                id='male'
                name='gender'
                className='gender'
                checked={gender === "male"}
                onClick={() => {
                  setGender('male')
                }}
              />
              <label htmlFor='male'> Male</label>

              <input
                type='radio'
                id='female'
                name='gender'
                className='gender'
                checked={gender === "female"}
                onClick={() => {
                  setGender('female')
                }}
              />
              <label htmlFor='female'> Female</label>
            </div>

          
          </div>
          
        </div>
        <button type="button" className='btn signup-btn'
              onClick={signup}>sign up</button>

            <p className='text-center'>
              <Link to="/login">You have already account ?</Link></p>
      </form>

    </div>
    </div>
  </>
  )
}

export default SignUp
