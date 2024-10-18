'use client';
import { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import UserContext from '../context/UserContext';
import './page.css';
import { useRouter } from 'next/navigation';
import Hdr from '../component/hdr';

const Login = () => {
  const router = useRouter();

  const { userData, setUserData } = useContext(UserContext);

  // Redirect if user is already logged in
  useEffect(() => {
    if (userData.token) {
      router.push('../dash'); // redirect
    }
  }, [userData.token, router]);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      // Send login request to the server
      const response = await axios.post('http://localhost:8082/api/users/login', {
        email: formData.email,
        password: formData.password
      });
      setUserData({
        token: response.data.token,
        user: response.data.user,
      });
      console.log(response.data.user);
      // Store the authentication token in local storage
      localStorage.setItem('auth-token', response.data.token);
      router.push('../home2');
    } catch (error) {
      console.error('Login failed:', error);
      alert(error.response.data.msg);
      // Handle login error
    }
  };

  return (
    <div >
      <Hdr />
      <div className='bodyLogin'>
        <div >
          <h2 className='LoginHeader'>Login</h2>
          <hr className='lineLogin' />
          <form type = "submit">
            <div className='loginInput'>
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
            <div className='loginInput'>
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
            <button 
            className='loginCreate' 
            type="submit" // Change type to submit for form submission
            onClick={handleLogin} // Correct the onClick handler to call the function
          >
            Login
          </button>
          </form>
          <div className='SignupLink'>
            Don't have an account? <a className='SignupBut' href="/signup">Sign Up</a>
          </div>
        </div>
        <nav >
          <div >
            <img src="/taskify.png" atl="User Pfp"></img>
          </div>          
          
            
          </nav>
      </div>
    </div>
  );
};

export default Login;
