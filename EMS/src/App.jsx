import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLoacalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'


const App = () => {
  const [user, setUser] = useState(null)
  const authData =useContext(AuthContext)
 

  useEffect(() => {
    if(authData){
      const loggedInUser=localStorage.getItem('loggedInUser')
      if (loggedInUser){
        setUser(loggedInUser.role)
      }
    }

  
  }, [authData])

  const handleLogin=(email,password)=>{
    // console.log(email,password)
    if(email=="admin@example.com" && password=='123'){
      setUser('admin')
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
      
    }
    else if( authData && authData.employees.find((e)=> email==e.email && password==e.password) ){
        setUser('user')
        localStorage.setItem('loggedInUser',JSON.stringify({role:'employee'}))
        
        
    }
    else{
      alert("Invalid Credentials")
    }
  }
  // handleLogin()
 
  return (
    <>
    {!user ? <Login handleLogin={handleLogin}/> :' '}
    {user=='admin' ?<AdminDashboard/>: <EmployeeDashboard/>}
   
    </>
  )
}

export default App