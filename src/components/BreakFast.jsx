import React from 'react'
import {data} from '../Data'

const Breakfast = () => {
  return (
    <div>
          <div className='main'>
        {data.filter((fil)=> fil.category ==='breakfast').map((menu)=>{
            return(
                <>
                <div className='image'>
                <img src={menu.img} alt="" />
                <div className='text'>
                <h1><b>{menu.title}</b></h1>
                <small>{menu.category}</small>
                <p>{menu.desc}</p>
                </div>
                </div>
                </>
            )
            
        })}
        </div>
      
    </div>
  )
}

export default Breakfast 
