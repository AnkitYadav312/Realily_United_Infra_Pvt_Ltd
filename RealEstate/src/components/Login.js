// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import {getAuth,signInWithEmailAndPassword} from "firebase/auth";
// import { app} from "../firebase";

// const auth = getAuth(app);
// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//    const SigninPage =() => {
//     signInWithEmailAndPassword(auth, username, password).then((value) => console.log("success")).catch((err) => console.log("err"));
//    };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Submitted:", { username, password });
//     // Here you can add logic to handle form submission, such as sending a request to a server for authentication
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full space-y-8">
//         <div>
//           <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
//             Sign in to your account
//           </h2>
//         </div>
//         <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//           <input type="hidden" name="remember" defaultValue="true" />
//           <div className="rounded-md shadow-sm -space-y-px">
//             <div>
//               <label htmlFor="username" className="sr-only">
//                 Username
//               </label>
//               <input
//                 id="username"
//                 name="username"
//                 type="text"
//                 autoComplete="username"
//                 required
//                 className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//                 placeholder="Username"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)} 
//               />
//             </div>
//             <div>
//               <label htmlFor="password" className="sr-only">
//                 Password
//               </label>
//               <input
//                 id="password"
//                 name="password"
//                 type="password"
//                 autoComplete="current-password"
//                 required
//                 className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </div>
//           </div>

//           <div className="flex items-center justify-between">
//             <div className="text-sm">
//               <Link
//                 to="/forgot-password"
//                 className="font-medium text-indigo-600 hover:text-indigo-500"
//               >
//                 Forgot your password?
//               </Link>
//             </div>
//           </div>

//           <div>
//             <button
//             onClick={SigninPage}
//               type="submit"
//               className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//             >
//               Sign in
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;







// import React, { useState } from 'react';
// import axios from 'axios';
// import Tilt from 'react-parallax-tilt';
// import { Link, useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   // const [error, setError] = useState('');
//   const navigate = useNavigate();


//   const handleSubmit = (e) => {
//      e.preventDefualt(); 
//      axios.post('http://localhost:3001/login', {email,password}).then(result => {
//         console.log(result)
//         if(result.data === "Success"){
//            navigate('/signup')
//         }
//      }).catch(err=> console.log(err))
//   }

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   if (!username || !password) {
//   //     setError('Please enter both username and password');
//   //     return;
//   //   }
//   //   try {
//   //     const response = await axios.post('/login', { username, password });
//   //     console.log('Login successful:', response.data);
//   //     // Optionally, you can redirect the user to another page upon successful login
//   //   } catch (error) {
//   //     console.error('Error logging in:', error);
//   //     setError('Failed to log in. Please try again later.');
//   //   }
//   // };

//   return (
//     <div className='bg-black min-h-screen min-w-screen relative overflow-hidden flex justify-center items-center'>
//       <div className="h-40-r w-40-r bg-gradient-to-r from-[#5cb270] to-[#f4f269] rounded-full absolute left-2/3 -top-96 transform rotate-160 animate-pulse"></div>
//       <div className='h-35-r w-35-r bg-gradient-to-r from-[#f24389] to-[#f4e784] rounded-full absolute top-96 -left+72 transform rotate-180 animate-pulse'></div>
//       <Tilt>
//         <div className='container h-96 w-96 bg-white bg-opacity-20 rounded-2xl shadow-5xl relative z-2 backdrop-filter backdrop-blur-sm'>
//           <form className='h-full flex flex-col justify-evenly items-center' onSubmit={handleSubmit}>
//             <div className='text-white font-poppins text-3xl font-bold tracking-widest'>Login Here</div>
//             <input
//               type='text'
//               placeholder='email'
//               className='font-poppins bg-transparent border border-t-0 border-l-0 border-r-0 focus:outline-none text-white tracking-wide'
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <input
//               type='password'
//               placeholder='Password'
//               className='font-poppins bg-transparent border border-t-0 border-l-0 border-r-0 focus:outline-none text-white tracking-wide'
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <button
//               type='submit'
//               className='cursor-pointer font-bold text-white hover:text-gray-900 font-poppins rounded-full px-5 py-1 bg-white bg-opacity-50 hover:bg-white hover:bg-opacity-80'
//             >
//               Sign in
//             </button>
//             <Link to="/forgot-password" className='cursor-pointer font-bold text-xs  hover:text-gray-900 text-gray-400'>Forgot Password?</Link>
//             {/* {error && <div className="text-red-500">{error}</div>} */}
//           </form>
//         </div>
//       </Tilt>
//     </div>
//   );
// };

// export default Login;




import React, { useState } from 'react';
import axios from 'axios';
import Tilt from 'react-parallax-tilt';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/login', { email, password })
      .then(result => {
        console.log(result);
        navigate('/'); // Redirect to the dashboard upon successful login
      })
      .catch(err => console.log(err));
  };

  return (
    <div className='bg-black min-h-screen min-w-screen relative overflow-hidden flex justify-center items-center'>
      <div className="h-40-r w-40-r bg-gradient-to-r from-[#5cb270] to-[#f4f269] rounded-full absolute left-2/3 -top-96 transform rotate-160 animate-pulse"></div>
      <div className='h-35-r w-35-r bg-gradient-to-r from-[#f24389] to-[#f4e784] rounded-full absolute top-96 -left+72 transform rotate-180 animate-pulse'></div>
      <Tilt>
        <div className='container h-96 w-96 bg-white bg-opacity-20 rounded-2xl shadow-5xl relative z-2 backdrop-filter backdrop-blur-sm'>
          <form className='h-full flex flex-col justify-evenly items-center' onSubmit={handleSubmit}>
            <div className='text-white font-poppins text-3xl font-bold tracking-widest'>Login</div>
            <input
              type='email'
              placeholder='Email'
              className='font-poppins bg-transparent border border-t-0 border-l-0 border-r-0 focus:outline-none text-white tracking-wide'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value='Login'
            />
            <button
              className='cursor-pointer font-bold text-white hover:text-gray-900 font-poppins rounded-full px-5 py-1 bg-white bg-opacity-50 hover:bg-white hover:bg-opacity-80'
            >
              Login with Google
            </button>
            <div className='cursor-pointer font-bold text-xs  hover:text-gray-900 text-gray-400'>
              Don't have an account? <Link to="/signup">Sign Up</Link>
            </div>
          </form>
        </div>
      </Tilt>
    </div>
  );
};

export default Login;