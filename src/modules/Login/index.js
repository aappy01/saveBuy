import React, { useState } from 'react'
import LogoVid from '../Register/ShoppingLogo.mp4'

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("login form submitted: ", email, password)
  }
  return (
    <section className="text-gray-600 body-font">
      <div className="flex flex-wrap items-center w-screen h-screen">
        <div className="lg:w-[40%] w-full h-full md:w-1/2 md:pr-16 lg:pr-0 pr-0 relative">
          <div className='w-full h-full absolute bg-orange-500 opacity-10'></div>
          <video className='h-full object-cover' autoPlay loop muted>
            <source
              src={LogoVid}
              type='video/mp4'
              alt='saveBuy logo'
            />
          </video>
        </div>
        <form onSubmit={handleSubmit} className="lg:w-[45%] md:w-1/2 glass-container bg-opacity-30 backdrop-blur-md backdrop-filter bg-gray-100 p-8 rounded-lg shadow-lg px-10 mx-auto flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <div className='flex items-center pb-8'>
          <p>Don't have an account? Register here</p>
          <button onClick={()=>props.onFormSwitch('register')} className="text-orange-700 w-[150px] hover:bg-orange-500 hover:text-white border border-solid border-orange-500 ml-auto py-2 px-8 focus:outline-none rounded text-lg transition duration-100">Sign Up</button>
          </div>

          <h2 className="text-gray-900 text-2xl font-medium title-font mb-5">Sign In</h2>
          <div className="relative mb-10 ">
            <input type="email" 
            placeholder='Email' 
            value={email} 
            onChange={(e)=> setEmail(e.target.value)} 
            id="email" 
            name="email" 
            className="w-full bg-transparent border-b-2 border-solid rounded border-orange-500 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>

          <div className="relative mb-10">
            <input 
            type="password" 
            placeholder='Password' 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            id="password" 
            name="password" 
            className="w-full bg-transparent border-b-2 border-solid rounded border-orange-500 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <button className="text-white w-[250px] bg-orange-500 border-0 py-2 px-8 focus:outline-none hover:bg-orange-600 rounded text-lg transition duration-100" type='submit'>Sign In</button>

        </form>
      </div>
    </section>
  )
}

export default Login
