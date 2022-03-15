import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Addgames.css'
import {useDispatch} from "react-redux"
import {addGame} from "../store/action"

const Addgames = () => {
  const dispatch = useDispatch
  const[Newgame,setNewGame] = useState([{
    image:"",
    title:"",
    date:"",
    description:"",
    trailer:""
  }]);
  const handleAddGame = (e) =>{
    console.log(e.target.value)
    setNewGame({...Newgame,[e.target.name]: e.target.value});
  }
  return (
    <div class="add-s1">
    <div class="title-s1">
<div class="login-page">
  <div class="form">
    <form class="login-form">
      <input type="text" placeholder=" LinkGameImage"
       value={Newgame.image}
       name="image"
       onChange={handleAddGame}/>
      <input type="text" placeholder="GameName"
      value={Newgame.title}
      name="title"
      onChange={handleAddGame}/>
      <input type="number" placeholder="GameDate"
      value={Newgame.date}
      name="date"
      onChange={handleAddGame}/>
      <input type="text" placeholder="GameDescription"
      value={Newgame.description}
      name="description"
      onChange={handleAddGame}/>
      <input type="text" placeholder="GameTrailer"
       value={Newgame.trailer}
       name="trailer"
       onChange={handleAddGame}
      />
       <input type="text" placeholder="GamePrice"
      value={Newgame.price}
      name="date"
      onChange={handleAddGame}/>
      <button onClick={async (e) => {
      e.preventDefault()
dispatch (await addGame(Newgame))
    }} >Add game</button>
      <p class="message">Not Admin <Link to="/Signup"><a >Create an account</a></Link></p>
    </form>
  </div>
</div>
    </div>
    </div>
  );
};

export default Addgames;