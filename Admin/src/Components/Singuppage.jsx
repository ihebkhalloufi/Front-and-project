import react from "react";
import reactDom from "react-dom";
import './Singuppage.css';
import { useState } from "react";
import {useDispatch} from "react-redux"
import {addadmin} from "../store/action"

function Singuppage(){
  const dispatch = useDispatch
  const[addAdmin,setAddAdmin] = useState([{
    
    Username:"",
    Email:"",
    Age:"",
    Password:""
  }]);
  const handleimput = (e) =>{
    console.log(e.target.value)
    setAddAdmin({...addAdmin,[e.target.name]: e.target.value});
  }
    return (  
      <div className=".center-sign">
  <div class="center-sign">
  <div class="login-box">
  <h2>Signup</h2>
  <form>
    <div class="user-box">
      <input type="text" name="username" required=""
      value={addAdmin.Username}
      onChange={handleimput}/>
      <label>Username</label>
      
    </div>
	<div class="user-box">
      <input type="text" name="email" required=""
       value={addAdmin.Email}
       onChange={handleimput}/>
      <label>E-Mail</label>
    </div>
	<div class="user-box">
      <input type="Number" name="Age" required=""
       value={addAdmin.Age}
       onChange={handleimput}/>
      <label>Age</label>
    </div>
    <div class="user-box">
      <input type="password" name="password" required=""
       value={addAdmin.Password}
       onChange={handleimput}/>
      <label>Password</label>
    </div>
    <button onClick={async (e) => {
      e.preventDefault()
dispatch (await addadmin(addAdmin))
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