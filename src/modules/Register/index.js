import React, { useState } from 'react'
import LogoVid from './ShoppingLogo.mp4'

const Register = (props) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  // const [gender, setGender] = useState("male");

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("register form submited", firstname, lastname, email, phone, password)
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
        <form onSubmit={handleSubmit} className="lg:w-[45%] md:w-1/2 glass-container bg-opacity-30 backdrop-blur-md backdrop-filter bg-gray-100 p-8 rounded-lg    shadow-lg px-10 mx-auto flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <div className='flex items-center pb-8'>
            <p>Already have an account? Sign In here</p>
            <button onClick={()=>props.onFormSwitch('login')}  className="text-orange-700 w-[150px] hover:bg-orange-500 hover:text-white border border-solid border-orange-500 ml-auto py-2 px-8 focus:outline-none rounded text-lg transition duration-100">Sign In</button>
          </div>
          <h2 className="text-gray-900 text-2xl font-medium title-font mb-5">Sign Up</h2>
          <div className='flex items-center justify-between'>
            <div className="relative mb-10  w-[45%]">
              <input 
              type="text" 
              placeholder='Firstname' 
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)} 
              id="firstname" 
              name="firstname" 
              className="w-full bg-transparent border-b-2 border-solid rounded border-orange-500 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="relative mb-10  w-[45%]">
              <input 
              type="text" 
              placeholder='Lastname' 
              value={lastname} 
              onChange={(e) => setLastname(e.target.value)} 
              id="lastname" 
              name="lastname" 
              className="w-full bg-transparent border-b-2 border-solid rounded border-orange-500 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          </div>
          <div className="relative mb-10 ">
            <input 
            type="email" 
            placeholder='Email' 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            id="email" 
            name="email" 
            className="w-full bg-transparent border-b-2 border-solid rounded border-orange-500 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div className='flex items-center justify-between'>
            <div className="relative mb-10 w-[45%]">
              <input 
              type="tel" 
              placeholder='Phone' 
              value={phone} 
              onChange={(e) => setPhone(e.target.value)} 
              id="phone" 
              name="phone" 
              className="w-full bg-transparent border-b-2 border-solid rounded border-orange-500 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="relative mb-10  w-[45%]">
              <input 
              type="password" 
              placeholder='Password' 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              id="password" 
              name="password" 
              className="w-full bg-transparent border-b-2 border-solid rounded border-orange-500 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          </div>

          <div className="relative mb-4">
            <select id="gender" className="w-full bg-transparent border-b-2 border-solid rounded border-orange-500 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
              <option value="">Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <p className="text-xs text-gray-500 my-3">By clicking Create Account, you acknowledge you have read and agreed to our Terms of Use and Privacy Policy.</p>
          <button 
          type='submit'
          className="text-white w-[250px] bg-orange-500 border-0 py-2 px-8 focus:outline-none hover:bg-orange-600 rounded text-lg transition duration-100">Create Account</button>

        </form>
      </div>
    </section>
  )
}

export default Register

















