import React from 'react'
import { BrowserRouter as Router , Routes , Route , Navigate } from 'react-router-dom'
import Login from './pages/auth/Login'
import SignUp from './pages/auth/SignUp'
import Home from './pages/Dashboard/Home'
import Income from './pages/Dashboard/Income'
import Expense from './pages/Dashboard/Expense'


const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Root/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/income' element={<Income/>}/>
          <Route path='/expense' element={<Expense/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App


const Root=()=>{
  const isAuthenticated = !!localStorage.getItem("token");

  return  isAuthenticated ?(
    <Navigate to="/dashboard"/>
  ):(
    <Navigate to="/login"/>
  )
}