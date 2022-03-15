import { useState } from "react";
import reactDom from "react-dom";
import './Loginpage.css';
import { useDispatch,useSelector } from "react-redux";


function Loginpage(){
  const dispatch = useDispatch();
  const admin = useSelector((state) => state.GetAdminReducers);
  const [Email,setemail] = useState("");
  const [Password,setpassword] = useState("");
    return (  
      <div className="center-login" >
  <div class="center-login">
  <div class="login-box">
  <h2>Login</h2>
  <form>
    <div class="user-box">
      <input type="text" name="Email" 
      required="true"
      value={Email}
      onChange={(e) => setemail(e.target.value)}/>
      <label>Email</label>
    </div>
    <div class="user-box">
      <input type="password" name="Password"
       required="true" 
      value={Password}
      onChange={(e) => setpassword(e.target.value)}/>
      <label>Password</label>
    </div>
<button>
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
  
  export default Loginpage