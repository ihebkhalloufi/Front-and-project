import React from 'react'
import { Link } from 'react-router-dom';
import Footer from './Footer/Footer';
import Gameslide from './Gameslide/Gameslide';
import { useDispatch,useSelector } from 'react-redux';
import{ getGame,deleteGame } from "../store/action";
import './Homepage.css'

const Homepage = ({games,}) => {
  const dispatch = useDispatch();
  return (
    <div>
  <div class="center-hp1">
    <div class="Games-s1">  
    <div class="title-h2">
       <ul><Gameslide/></ul>
    </div>
      <div class="title-h1">
    {games.map((game) => {
  return (
 
    <div className='game'
      key={game.id}>
       
    <div class="container">
  <img className='img-1' src={game.image}/>
  <div class="middle">
    <h6 className='n-1'> {game.title} </h6>
      <h6 className='n-1'> {game.date} </h6>
    <Link to={`/details/${game.id}`}>
       <div class="text">Details</div>
    </Link> 
      </div>
</div>
      <h6 className='n-2'> {game.price} </h6>
      <button class="button-18" role="button">BUY</button>
      <button class="button-17" role="button" onClick={() => dispatch(deleteGame(game.id))}>DELETE</button>
      <p style={{fontSize:"12px"}}>{game.description}</p>
    </div>
  );
})}
    </div>
    <div className='Footer-1'><Footer/></div>
    </div>
  </div>
         
      </div>  
 
  )
}






export default Homepage