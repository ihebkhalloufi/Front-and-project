import React from 'react'
import { useSelector } from 'react-redux'
import './Userlist.css'

const Userlist = () => {
const users = useSelector((state) => state.userlistReducers);
  return (
    <div>
  <div class="center-user">
    <div class="Games-user">  
    <div class="title-user"> 
   <h4>Welcome in user</h4>
{users.map((user) => {
  <div key={user.id}>
    <h4> Username:{user.Username} </h4>
    <h4> Email:{user.Email} </h4>
    <h4>Age:{user.Age} </h4>
    <button>DELETE</button>
  </div>
})}
    </div>
    </div>
  </div>
         
      </div>  
 
  )
}






export default Userlist