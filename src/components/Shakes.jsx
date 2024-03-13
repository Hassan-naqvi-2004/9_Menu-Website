import React from 'react'
import {data} from '../Data'

const Shakes = () => {
  return (
    <div>
          <div className='main'>
        {data.filter((el)=>el.category === 'shakes').map((menu)=>{
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

export default Shakes
