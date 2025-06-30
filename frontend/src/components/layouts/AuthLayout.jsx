import React from 'react'
import LoginCard from '../../assets/images/LoginCard1.png'
import {LuTrendingUp , LuTrendingDown } from 'react-icons/lu'
import StatsInfoCard from '../Cards/StatsInfoCard'



const AuthLayout = ({children}) => {
  return (
    <div className='flex'>
      <div className='w-screen h-screen md:w-[60vw] px-12 pt-8 pb-12'>
        <h2 className='text-[25px] font-medium text-black'>Expense Tracker</h2>
        {children}
      </div>

      <div className='hidden md:block w-[40vw] h-screen bg-violet-50 bg-auth-bg-img bg-cover bg-cover bg-no-repeat bg-center overflow-hidden p-8 relative'>

        <div className='grid grid-cols-1 z-20 gap-5'>
          <StatsInfoCard
            icon={<LuTrendingUp/>}
            text="Track Your Income Here"
            amount="₹30,000"
            color="#66ff00"
            valueType="gain"
          />
          <StatsInfoCard
            icon={<LuTrendingDown/>}
            text="Track Your Expenses Here"
            amount="₹10,000"
            color="red"
            valueType="loss"
          />
        </div>
        <img src={LoginCard} className='w-64 lg:w-[90%] absolute bottom-10 shadow-lg shadow-blue-400/15'/>
      </div>

    </div>
  )
}

export default AuthLayout