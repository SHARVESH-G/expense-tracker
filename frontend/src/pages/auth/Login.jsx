import React, { useState } from 'react'
import AuthLayout from '../../components/layouts/AuthLayout'
import {Link, useNavigate} from 'react-router-dom'
import Input from '../../components/inputs/Input';
import { validateEmail } from '../../utils/helper';

const Login = () => {

  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");
  const [error , setError] = useState(null);

  const navigate = useNavigate();

  const handlelogin = async (e)=>{
    e.preventDefault();

    if(!validateEmail(email)){
      setError("Please Enter a valid Email Address");
      return;
    }
    if(!password){
      setError("Please enter the Password");
      return;
    }
    setError("");
  }

  return (
    <AuthLayout>
        <div className='lg:w-{70%} h-3/4 md:h-full flex flex-col justify-center'>
            <h3 className='text-[35px] font-semibold text-black'>Welcome Back User</h3>
            <p className='text-[15px] text-slate-700 mt-[5px] mb-6'>Please your Details to Login to your <strong>Account</strong></p>

            <form onSubmit={handlelogin}>
              <Input
                value={email}
                onChange={({target})=>setEmail(target.value)}
                text="Email Address"
                placeholder="example@example.com"
                type="text"
              />
              <Input
                value={password}
                onChange={({target})=>setPassword(target.value)}
                text="Password"
                placeholder="Your password"
                type="password"
              />

              {error && <p className='text-red-500 text-xs pb-2.5'>{error}</p>}

              <button type="submit" className='btn-primary'>LOGIN</button>

              <p className='text-[13px] text-slate-800 mt-3'>Don't have an Acoount? <Link className='font-medium underline' style={{color:`var(--color-primary)`}} to="/signup">Signup</Link></p>

            </form>
        </div>
    </AuthLayout>
  )
}

export default Login