import React from 'react'

const Markeee = ({data}) => {
  return (
    <div className=' w-full py-8  flex items-center  whitespace-nowrap  overflow-hidden justify-between gap-10'>
    {data.map((items , index ) =>(
        <img className='w-[6vw] flex-shrink-0 ' src={items} key={index} />
    ))}
    {data.map((items , index ) =>(
        <img className='w-[6vw] flex-shrink-0 ' src={items} key={index} />
    ))}


    </div>
  )
}

export default Markeee