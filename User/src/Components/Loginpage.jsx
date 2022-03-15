import react, { useState } from "react";
import reactDom from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import './Loginpage.css';



function Loginpage(){
  const users = useSelector((state) => state.userReducers);
  const dispatch = useDispatch();
  const[getUser,setGetUser] = useState([{
    Email:"",
    Password:""
  }]);
  const handleimput = (e) =>{
    console.log(e.target.value)
    setGetUser({...getUser,[e.target.name]: e.target.value});
  }
  
    return (  
      <div className="center-login" >
  <div class="center-login">
  <div class="login-box">
  <h2>Login</h2>
  <form>
    <div class="user-box">
      <input type="text" name="Email" required="true"
       value={getUser.Email}
       onChange={handleimput}/>
      <label>Email</label>
    </div>
    <div class="user-box">
      <input type="password" name="Password" required="true"
       value={getUser.Password}
       onChange={handleimput}/>
      <label>Password</label>
    </div>
    <button onClick={async (e) => {
      e.preventDefault()
dispatch (await users(getUser))
    }}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Submit
      </button>
  
    {users.map((user) => {
  <div key={user.id}>
    <h4> Username:{user.Username} </h4>
    <h4> Email:{user.Email} </h4>
    <h4>Age:{user.Age} </h4>
  </div>
})}
  </form>
</div>
	</div>
</div>
   
    );
  }
  
  export default Loginpage