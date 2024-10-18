'use client';
import { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import UserContext from '../context/UserContext';
import './page.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Hdr from '../component/hdr';

const SignUp = () => {
  const router = useRouter();

  const { userData, setUserData } = useContext(UserContext);

  // State to manage form inputs
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  // Function to handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send signup request to the server
      await axios.post('http://localhost:8082/api/users/signup', {
        first_name: formData.first_name,
        last_name: formData.last_name,
        phone: formData.phone,
        email: formData.email,
        password: formData.password,
        confirmPassword: formData.confirmPassword
    });

      // After signup, send a login request to the server
      const loginRes = await axios.post('http://localhost:8082/api/users/login', {
        email: formData.email,
        password: formData.password
      });

      // Update user data upon successful signup
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });

      // Store the authentication token in local storage
      localStorage.setItem("auth-token", loginRes.data.token);

      
      router.push('../dash'); 
    } catch (error) {
      console.error('Signup failed:', error);
      // Handle signup error
      alert(error.response.data.msg);
    }
  };

    return (
      <div >
        <Hdr />
        <div className='signupBox'>
          <div className='createAccount'>
            <h2 className='createAccounth2'>Create Account</h2>
            <hr className='lineSignup' />
            <form >

            <div className='inputCreate'>
                <label htmlFor="first_name">First Name*</label>
                <input 
                type="string" 
                id="first_name" 
                name="first_name" // Add name attribute to match with formData
                value={formData.first_name} // Add value attribute for controlled input
                onChange={handleChange} // Add onChange event handler
                required 
                 />
              </div>

              <div className='inputCreate'>
                <label htmlFor="last_name">Last Name*</label>
                <input 
                type="string" 
                id="last_name" 
                name="last_name" // Add name attribute to match with formData
                value={formData.last_name} // Add value attribute for controlled input
                onChange={handleChange} // Add onChange event handler
                required 
                 />
              </div>

              <div className='inputCreate'>
                <label htmlFor="phone">Phone Number*</label>
                <input 
                type="phone" 
                id="phone" 
                name="phone" // Add name attribute to match with formData
                value={formData.phone} // Add value attribute for controlled input
                onChange={handleChange} // Add onChange event handler
                required 
                 />
              </div>

              <div className='inputCreate'>
                <label htmlFor="email">Email*</label>
                <input 
                type="email" 
                id="email" 
                name="email" // Add name attribute to match with formData
                value={formData.email} // Add value attribute for controlled input
                onChange={handleChange} // Add onChange event handler
                required 
                 />
              </div>
              
              <div className='inputCreate'>
                <label htmlFor="password">Password*</label>
                <input 
                type="password" 
                id="password" 
                name="password" // Add name attribute to match with formData
                value={formData.password} // Add value attribute for controlled input
                onChange={handleChange} // Add onChange event handler
                required 
                />
              </div>

              <div className='inputCreate'>
                <label htmlFor="confirmPassword">Confirm Password*</label>
                <input 
                type="password" 
                id="confirmPassword" 
                name="confirmPassword" // Add name attribute to match with formData
                value={formData.confirmPassword} // Add value attribute for controlled input
                onChange={handleChange} // Add onChange event handler
                required 
                />
              </div>
             
             
              <button className='buttonCreate' type="submit" onClick={handleSubmit}>Create Account</button>
            </form>
            <div className='alreadyBut'>
              Already have an account? <a className='LoginBut' href="/login">Login</a>
            </div>
          </div>
          <nav>
          <div className='logocontainer' >
            <img src="/taskify.png" atl="User Pfp"></img>
          </div>            
          </nav>
        </div>
      </div>
    );
  };
  
  export default SignUp;