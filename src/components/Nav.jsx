import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='mainheader'>
          <header>
            <h1>Our Menu</h1>
        </header>
        <nav>
            <div className='navbar'>
               <Link to='/' style={{textDecoration:'none',color:'white'}}><p>All</p></Link> 
               <Link to='/breakfast' style={{textDecoration:'none',color:'white'}}><p>Breakfast</p></Link>
               <Link to='/lunch' style={{textDecoration:'none',color:'white'}}><p>Lunch</p></Link> 
               <Link to='/shakes' style={{textDecoration:'none',color:'white'}}><p>Shakes</p></Link> 
            </div>
        </nav>
      
    </div>
  )
}

export default Nav
