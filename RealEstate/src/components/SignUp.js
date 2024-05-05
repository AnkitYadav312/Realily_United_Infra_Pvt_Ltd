
import React, { useState } from 'react';
import axios from 'axios'; // Import Axios
import Tilt from 'react-parallax-tilt';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    const handleSumit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/register', { name, email, password })
            .then(result => {console.log(result)

                 navigate('/login')
            })
            .catch(err => console.log(err));
    }
  // const [email, setEmail] = useState('');
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  // const [error, setError] = useState('');
  // const navigate = useNavigate();

  // const handleSignup = async (e) => {
  //   e.preventDefault();
  //   if (!email || !username || !password) {
  //     setError('Please fill in all fields');
  //     return;
  //   }
  //   try {
  //     const response = await axios.post('http://localhost:3001/register', { email, username, password }); // Make POST request to signup endpoint
  //     console.log('Signup successful:', response.data);
  //      navigate()
  //     // Optionally, you can redirect the user to another page upon successful signup
  //   } catch (error) {
  //     console.error('Error signing up:', error);
  //     setError('Failed to sign up. Please try again later.');
  //   }
  // };

  return (
    <div className='bg-black min-h-screen min-w-screen relative overflow-hidden flex justify-center items-center'>
      <div className="h-40-r w-40-r bg-gradient-to-r from-[#5cb270] to-[#f4f269] rounded-full absolute left-2/3 -top-96 transform rotate-160 animate-pulse"></div>
      <div className='h-35-r w-35-r bg-gradient-to-r from-[#f24389] to-[#f4e784] rounded-full absolute top-96 -left+72 transform rotate-180 animate-pulse'></div>
      <Tilt>
        <div className='container h-96 w-96 bg-white bg-opacity-20 rounded-2xl shadow-5xl relative z-2 backdrop-filter backdrop-blur-sm'>
          <form className='h-full flex flex-col justify-evenly items-center' onSubmit={handleSumit}>
            <div className='text-white font-poppins text-3xl font-bold tracking-widest'>Sign Up Here</div>
            <input
              type='email'
              placeholder='Email'
              className='font-poppins bg-transparent border border-t-0 border-l-0 border-r-0 focus:outline-none text-white tracking-wide'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type='text'
              placeholder='name'
              className='font-poppins bg-transparent border border-t-0 border-l-0 border-r-0 focus:outline-none text-white tracking-wide'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type='password'
              placeholder='Password'
              className='font-poppins bg-transparent border border-t-0 border-l-0 border-r-0 focus:outline-none text-white tracking-wide'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type='submit'
              className='cursor-pointer font-bold text-white hover:text-gray-900 font-poppins rounded-full px-5 py-1 bg-white bg-opacity-50 hover:bg-white hover:bg-opacity-80'
              value='Sign Up'
            />
            <button
              className='cursor-pointer font-bold text-white hover:text-gray-900 font-poppins rounded-full px-5 py-1 bg-white bg-opacity-50 hover:bg-white hover:bg-opacity-80'
            >
              Sign Up with Google
            </button>
            <div className='cursor-pointer font-bold text-xs  hover:text-gray-900 text-gray-400'>
              Already have an account? <Link to="/login">Login</Link>
            </div>
            {/* {error && <div className="text-red-500">{error}</div>} */}
          </form>
        </div>
      </Tilt>
    </div>
  );
};

export default Signup;