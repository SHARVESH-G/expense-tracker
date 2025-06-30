import React, { useState } from 'react'
import { FaRegEye , FaRegEyeSlash } from "react-icons/fa";

const Input = ({value , text , type , placeholder , onChange}) => {

    const [displayPassword , setDisplayPassword] = useState(false);

    const toogleShowPassword =()=>{
        setDisplayPassword(!displayPassword);
    }

  return (
    <div>
        <label className='text-[17px] text-slate-800'>{text}</label>
        <div className='input-box'>
            <input
                type={type=='password' ? displayPassword ? 'text' : 'password' : type}
                placeholder={placeholder}
                className='w-full bg-transparent outline-none'
                value={value}
                onChange={(e)=>onChange(e)}
            />

            {type === 'password' &&(
                <>
                    {displayPassword ? (
                        <FaRegEye
                            size={22}
                            className='text-primary cursor-pointer'
                            onClick={()=>toogleShowPassword()}
                        />
                    ):(
                       <FaRegEyeSlash
                            size={22}
                            className='text-slate-400 cursor-pointer'
                            onClick={()=>toogleShowPassword()}
                        /> 
                    )}
                </>
            )}
        </div>
    </div>
  )
}

export default Input