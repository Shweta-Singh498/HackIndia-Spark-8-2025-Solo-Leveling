import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from "../../components/Landing/Navbar";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/login', { email, password })
      .then(result => {
        console.log(result);
        if (result.data === "Success") {
          navigate('/home');
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <>
    <Navbar/>
    <div className='flex justify-center items-center bg-gray-200 min-h-screen'>
      
      <div className='bg-white p-8 rounded-lg shadow-md w-80'>
        <h2 className='text-2xl font-bold mb-6 text-center'>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label htmlFor="email" className='block text-gray-700 font-semibold mb-2'>
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder='Enter Email'
              autoComplete='off'
              name='email'
              className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='mb-6'>
            <label htmlFor="password" className='block text-gray-700 font-semibold mb-2'>
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder='Enter Password'
              name='password'
              className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button 
            type='submit' 
            className='w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition duration-300'
          >
            Login
          </button>
        </form>
        <p className='text-sm text-center mt-4'>
          Don't have an account?
        </p>
        <Link 
          to='/register' 
          className='block text-center mt-2 text-purple-600 hover:underline'
        >
          Register
        </Link>
      </div>
    </div>
    </>
  );
}

export default Login;
