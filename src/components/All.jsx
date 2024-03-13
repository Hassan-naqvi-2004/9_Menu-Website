import React from 'react'
import {data} from '../Data'

const All = () => {
  return (
    <div>
          <div className='main'>
        {data.map((menu)=>{
            return(
                <>
                <div className='image'>
                <img src={menu.img} alt="" />
                <div className='text'>
                <h1><b>{menu.title}</b>${menu.price}</h1>
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

export default All
