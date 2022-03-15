import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';
import { ShoppingCartOutlined, } from '@material-ui/icons';
import { Badge, } from '@material-ui/core';
const Navbar = () => {
  
  return (
    <div>  
        <nav>
    <div class="menu">
      <div class="logo">
      <Link to="/">  <a className='ga-4'>Game<span className="stop">Stop</span></a></Link> 
      </div>
      <input
           
          />
      <ul>
        <Link className='b1-a1' to="/Signup"><li><a>Signup</a></li></Link>
        <Link className='b1-a1' to="/Login"><li><a>Login</a></li></Link>
         <div class="dropdown">
         <Link className='b1-a1'><li><a>Settings</a></li></Link>
  <div class="dropdown-content">
    <Link to="/My Profile"><a>My Profile</a></Link>
    <Link><a href="#">Logout</a></Link>
     </div>
  </div>
  <Link to="/Shopingcard" ><div className='shoppingcard'>
      <Badge badgeContent={0  } color="primary">
      <ShoppingCartOutlined/> 
    </Badge>
</div></Link>
      </ul>
    </div>
  </nav></div>
  )
}

export default Navbar