import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';

// import React from 'react';

//     This code was taken from this very first sign up sheet "https://web3templates.com/components/forms".
//=======================================================================
//     Name    :   Simple Sign In
//     Author  :   Surjith S M
//     Twitter :   @surjithctly

//     Get more components here 👉 https://web3templates.com/components

//     Copyright © 2021
//     =======================================================================
 
// This is our function that creates the login structure.
function Login () {
    return (
        <div className="flex items-center min-h-screen bg-white dark:bg-gray-900">
            <div className="container mx-auto">
                <div className="max-w-md mx-auto my-10">
                    <div className="text-center">
                        <h1 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">Sign in</h1>
                        <p className="text-gray-500 dark:text-gray-400">Sign in to access your account</p>
                    </div>
                        <div className="m-7">
                            <div className="mb-6">
                               <label for="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Email Address</label>
                                <input type="email" name="email" id="email" placeholder="you@company.com" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                        </div>
                             <div className="mb-6">
                                 <div className="flex justify-between mb-2">
                                     <label for="password" className="text-sm text-gray-600 dark:text-gray-400">Password</label>
                                 <a href="#!" className="text-sm text-gray-400 focus:outline-none focus:text-indigo-500 hover:text-indigo-500 dark:hover:text-indigo-300">Forgot password?</a>
                                </div>
                                <input type="password" name="password" id="password" placeholder="Your Password" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                            </div>
                            <div className="mb-6">
                                <button type="button" className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none">Sign in</button>
                            </div>
                            <p className="text-sm text-center text-gray-400">Don&#x27;t have an account yet? <a href="#!" className="text-indigo-400 focus:outline-none focus:underline focus:text-indigo-500 dark:focus:border-indigo-800">Sign up</a>.</p>
                    </div>
                </div>
            </div>
        </div>
    );
    }
 

export default Login;






//     return (
//       <div>
//         <h4 className="mv3">
//           {formState.login ? 'Login' : 'Sign Up'}
//         </h4>
//         <div className="flex flex-column">
//           {!formState.login && (
//             <input
//               value={formState.name}
//               onChange={(e) =>
//                 setFormState({
//                   ...formState,
//                   name: e.target.value
//                 })
//               }
//               type="text"
//               placeholder="Your name"
//             />
//           )}
//           <input
//             value={formState.email}
//             onChange={(e) =>
//               setFormState({
//                 ...formState,
//                 email: e.target.value
//               })
//             }
//             type="text"
//             placeholder="Your email address"
//           />
//           <input
//             value={formState.password}
//             onChange={(e) =>
//               setFormState({
//                 ...formState,
//                 password: e.target.value
//               })
//             }
//             type="password"
//             placeholder="Choose a safe password"
//           />
//         </div>
//         <div className="flex mt3">
//           <button
//             className="pointer mr2 button"
//             onClick={() => console.log('onClick')}
//           >
//             {formState.login ? 'login' : 'create account'}
//           </button>
//           <button
//             className="pointer button"
//             onClick={(e) =>
//               setFormState({
//                 ...formState,
//                 login: !formState.login
//               })
//             }
//           >
//             {formState.login
//               ? 'need to create an account?'
//               : 'already have an account?'}
//           </button>
//         </div>
//       </div>
//     );
//   };




   
   



  
