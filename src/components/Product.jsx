import React from 'react'
import Button from './Button'

const Product = ({data}) => {
  return (
    <div className='w-full py-20 text-white'>
        <div className='max-w-screen-xl mx-auto flex items-center  justify-between'>
            <h1 className='text-6xl font-medium capitalize ml-4'>{data.title}</h1>
            <div className='dets w-1/3'>
            <p className='mb-10'>{data.desc}</p>
            <div className='flex items-center  gap-5'>
            
            {data.live && <Button title='Live Project'/>}
            {data.casestudy && <Button title='Case Study'/>}

           
            </div>  

    


            </div>


        </div>
        






    </div>
  )
}

export default Product