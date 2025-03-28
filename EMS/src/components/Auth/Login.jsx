import React, { useState } from 'react'

const Login = ({handleLogin}) => {
  
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  const submitHandler=(e)=>{
    e.preventDefault();
    handleLogin(Email,Password)
    // console.log(Email,Password)
    setEmail('')
    setPassword('')
  }
  return (
    <div className='flex  h-screen w-screen items-center justify-center'>
      <div className=" border-2 border-emerald-600">
        <form  
        onSubmit={(e)=>{submitHandler(e)}}
        className="flex flex-col items-center justify-center">
          <input 
          value={Email}
          onChange={(e)=>{
            setEmail(e.target.value)
          }}
          required
          type="email" 
          className='  border-2 border-emerald-600  
          text-xl rounded-full py-3 px-5 placeholder-gray-400 ' 
          placeholder='Enter Your Email'
          />
          <input 
          value={Password}
          onChange={(e)=>{
            setPassword(e.target.value)
          }}
          required
          type="password" 
          className=' border-2 border-emerald-600  
          text-xl rounded-full py-3 px-5 mt-4  placeholder-gray-400' 
          placeholder='Enter Your Password'
          />
          <button className="bg-emerald-600 rounded-full py-2 px-10 mt-5 ">Log In</button>
        </form>
      </div>
    </div>
  )
}

export default Login