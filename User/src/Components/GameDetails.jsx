import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useState,useEffect } from "react";
import ReactPlayer from "react-player";
import './GameDetails.css';

const GameDetails = ({games}) => {
    const {id} = useParams();
    const [gamesDetails,setGameDetails] = useState({});
   useEffect(() => {
    setGameDetails(games.find((game) => game.id === id ));
   },[id])

    return (
        <div>
            <div class="center-d1">
            <div class="da-1">
            <img  className="img-c1" src={gamesDetails.image} alt={gamesDetails.discription}  />
            <h4 className="h-1" >{gamesDetails.title}</h4>
            <h6 className="h-1">GameDetails</h6>
            <h6 className="h-1"> {gamesDetails.discription}</h6>
            <h6 className="h-1" >GameTrailer</h6>
            <ReactPlayer className="t-3" url={gamesDetails.trailer} />
            </div>
            </div>
        </div>
    )
}

export default GameDetails