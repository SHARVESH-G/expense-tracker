const StatsInfoCard = ({icon , text  , amount , color , valueType})=>{
  return(
    <div className='flex gap-6 bg-white p-4 rounded-xl shadow-md shadow-puple-400/10 border border-gray-200/50 z-10 '>
      <div className={`w-12 h-12 flex items-center justify-center text-[26px] rounded-full drop-shadow-xl bg-gray-100`} style={{color:color}}>
        {icon}
      </div>
      <div>
        <h6 className='text-xl text-gray-500 mb-1'>{text}</h6>
        <span className="text-[20px]" style={{ color: `var(--color-${valueType})` }}>{amount}</span>
      </div>
    </div>
  )
}

export default StatsInfoCard