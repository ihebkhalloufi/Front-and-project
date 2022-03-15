import { Modal, Button } from "react-bootstrap";
import './Addgames.css'
const Addgames = ({handelModal, Newgame, handleAddGame }) => {
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
      <button onClick={handelModal}>Add game</button>
      <p class="message">Not Admin <a>Create an account</a></p>
    </form>
  </div>
</div>
    </div>
    </div>
  );
};

export default Addgames;