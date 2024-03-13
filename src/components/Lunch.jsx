import React from 'react'
import {data} from '../Data'

const Lunch = () => {
  return (
    <div>
          <div className='main'>
        {data.filter((e)=> e.category === 'lunch').map((menu)=>{
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

export default Lunch
