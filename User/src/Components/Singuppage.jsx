import react from "react";
import reactDom from "react-dom";
import './Singuppage.css';
import { useState } from "react";
import {useDispatch} from "react-redux"
import {adduser} from "../store/action"

function Singuppage(){
  const dispatch = useDispatch
  const[addUser,setAddUser] = useState([{
    
    Username:"",
    Email:"",
    Age:"",
    Password:""
  }]);
  const handleimput = (e) =>{
    console.log(e.target.value)
    setAddUser({...addUser,[e.target.name]: e.target.value});
  }
    return (  
      <div className=".center-sign">
  <div class="center-sign">
  <div class="login-box">
  <h2>Signup</h2>
  <form>
    <div class="user-box">
      <input type="text" name="username" required=""
      value={addUser.Username}
      onChange={handleimput}/>
      <label>Username</label>
      
    </div>
	<div class="user-box">
      <input type="text" name="email" required=""
     value={addUser.Email}
     onChange={handleimput}/>
      <label>E-Mail</label>
    </div>
	<div class="user-box">
      <input type="Number" name="Age" required=""
       value={addUser.Age}
       onChange={handleimput}/>
      <label>Age</label>
    </div>
    <div class="user-box">
      <input type="password" name="password" required=""
       value={addUser.Password  }
       onChange={handleimput}/>
      <label>Password</label>
    </div>
    <button onClick={async (e) => {
      e.preventDefault()
dispatch (await adduser(addUser))
    }}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Submit
   </button>
  </form>
</div>
	</div>
</div>
   
    );
  }
  
  export default Singuppage