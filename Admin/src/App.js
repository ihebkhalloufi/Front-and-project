import react from 'react';
import './App.css';
import { useState,useEffect  } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { Switch, Route,Router, Link } from "react-router-dom";
import Homepage from './Components/Homepage'
import Addgames from './Components/Addgames';
import Singuppage from './Components/Singuppage'
import Loginpage from './Components/Loginpage'
import GameDetails from './Components/GameDetails';
import Navbar from './Components/Navbar';
import Shopingcard from './Components/Shopingcard';
import Userlist from './Components/Userlist';

function App() {
  const dispatch = useDispatch();
  const [addGame,setaddGame]= useState (false);
  const [gamelist,setgamelist]= useState (false);
  const [games, setGames] = useState([
     {  id: uuidv4(),
      image:"https://cracked-games.org/wp-content/uploads/2022/01/DeadPoly-Free.jpg", 
       title:"DEADPOLY",
       date:"2022",
       discription:"DeadPoly is a polygon zombie survival looter shooter with base building and crafting. Your only goal is survival, everything else is optional",
       trailer:"https://youtu.be/lDWPRwyULEI",
      price:"20$"
      
     },
     { id:uuidv4(),
      image:"https://cracked-games.org/wp-content/uploads/2020/11/RESIDENT-EVIL-RESISTANCE-free.jpg", 
       title:"RESIDENT EVIL RESISTANCE",
       date:"2020",
       discription:"Resident Evil: Resistance is a survival horror game that puts a team of four survivor players against a mastermind player who can create traps, enemies, and other hazards.",
       trailer:"https://youtu.be/QuK8ZzOHvhY",
       price:"40$"
     },
     { id:uuidv4(),
      image:"https://cracked-games.org/wp-content/uploads/2020/10/eFootball-PES-2021-free.jpg", 
       title:"eFootball PES 2021",
       date:"2021",
       discription:"The eFootball PES 2021 Season Update features the same award winning gameplay as last year's eFootball PES 2020 along with various team and player updates for the new season. Also comes with the UEFA EURO 2020™ mode - all at a special anniversary price!", 
       trailer:"https://youtu.be/901CbZKXkaE",
       price:"15$"
     },
     { id:uuidv4(),
      image:"https://cracked-games.org/wp-content/uploads/2019/11/Red-Dead-Redemption-2-free-cracked-download.jpg", 
       title:"Red Dead Redemption 2",
       date:"2019",
       discription:"After a robbery goes badly wrong in the western town of Blackwater, Arthur Morgan and the Van der Linde gang are forced to flee. With federal agents and the best bounty hunters in the nation massing on their heels, the gang must rob, steal and fight their way across the rugged heartland of America in order to survive.",
       trailer:"https://youtu.be/eaW0tYpxyp0",
       price:"60$"
     },
     { id:uuidv4(),
      image:"https://cracked-games.org/wp-content/uploads/2021/07/Predator-Hunting-Grounds-Free.jpg", 
       title:"Predator: Hunting Grounds",
       date:"2021",
       discription:"Predator: Hunting Grounds is an immersive asymmetrical shooter set in the jungles of South America, where the Predator stalks the most challenging prey. Play as a member of an elite Fireteam and complete paramilitary operations before the Predator finds you.",
       trailer:"https://youtu.be/W6OJhuH7PD0",
       price:"35$"
     },
     { id:uuidv4(),
      image:"https://cracked-games.org/wp-content/uploads/2017/04/gta-5-free-download-cracked.jpg", 
       title:"Grand Theft Auto V",
       date:"2013",
       discription:"Grand Theft Auto V is an action-adventure game played from either a third-person or first-person perspective. Players complete missions—linear scenarios with set objectives—to progress through the story. Outside of the missions, players may freely roam the open world.",
       trailer:"https://youtu.be/QkkoHAzjnUs",
       price:"25$"
     },
     { id:uuidv4(),
      image:"https://cracked-games.org/wp-content/uploads/2016/05/gta4.jpg", 
       title:"Grand Theft Auto IV",
       date:"2009",
       discription:"Grand Theft Auto IV is a 2008 action-adventure game developed by Rockstar North and published by Rockstar Games. The game is played from a third-person perspective and its world is navigated on foot or by vehicle. ... Throughout the single-player mode, players control Niko Bellic.",
       trailer:"https://youtu.be/M80K51DosFo",
       price:"70$"
     },
     { id:uuidv4(),
      image:"https://cracked-games.org/wp-content/uploads/2021/03/Dead-Age-2-Free.jpg", 
       title:"Dead Age 2",
       date:"2021",
       discription:"Dead Age 2 is a unique combination of survival, management, Rogue-Like events, turn-based combat, classic role-playing game with tons of quests and a story in which your decisions directly affect plot progression! ... Improving relations with the region's greater factions unlocks better equipment and plot devices.",
       trailer:"https://youtu.be/VjSMJESqGSc",
       price:"5$"
     },
     { id:uuidv4(),
      image:"https://cracked-games.org/wp-content/uploads/2020/12/Zombie-Army-4-Dead-War-free-1.jpg", 
       title:"Zombie Army 4: Dead War",
       date:"2015",
       discription:"Features. Hitler's hordes are back for more in this spine-chilling shooter from the makers of Sniper Elite 4! Abominable occult enemies, epic weapons and a harrowing new campaign for 1-4 players await in 1940s Europe, as you fight to save humankind from undead Armageddon!",
       trailer:"https://youtu.be/MYcie-c3ZWc",
       price:"21$"
     },
     { id:uuidv4(),
      image:"https://cracked-games.org/wp-content/uploads/2020/09/The-Walking-Dead-Onslaught-Free-663x380-1.jpg", 
       title:"The Walking Dead Onslaught",
       date:"2020",
       discription:"Mature Content Description The Walking Dead Onslaught depicts grotesque, disfigured and dismembered walkers which players can kill, often violently, by shooting, stabbing, severing, bludgeoning, delimbing, decapitating, blowing up with explosive, and more.",
       trailer:"https://youtu.be/cEqWPYH0qyk",
       price:"7$"
     },
     { id:uuidv4(),
      image:"https://cracked-games.org/wp-content/uploads/2020/08/Night-of-the-Dead-Free-663x380-1.jpg", 
       title:"Night of the Dead",
       date:"2020",
       discription:"Buy Night of the Dead Lucy wakes up from a human experiment and gets trapped in a city covered with zombies. She must survive nightly zombie waves and communicate with a group of survivors to escape from the isolated area. Survive, exploring a vast island where everything is interactive and covered with zombies.",
       trailer:"https://youtu.be/zSJHTHL83Ng",
       price:"8$"
     },
     { id:uuidv4(),
      image:"https://img.search.brave.com/lJ6bjiIh_1_mjCtczoWg9N7PtkT4Elx0ACm0nDgla4c/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5C/aWwtZW9KaER2R3Vu/SVNSSFBva3BBSGFF/SyZwaWQ9QXBp", 
       title:" Dead Cells",
       date:"2017",
       discription:"Dead Cells is described as a roguevania, a combination of procedurally-generated roguelike games and action-exploration-based Metroidvania games. The player controls a mass of cells that occupy and control the body of a deceased prisoner at the start of each game.",
       trailer:"https://youtu.be/gX4cGcwmdsY",
       price:"35$"
     },
     { id:uuidv4(),
      image:"https://cracked-games.org/wp-content/uploads/2019/11/STAR-WARS-Jedi-Fallen-Order.jpg", 
       title:"STAR WARS Jedi Fallen Order",
       date:"2021",
       discription:"Star Wars Jedi: Fallen Order is an action-adventure game set after the events of Star Wars: Revenge of the Sith. Develop your Force abilities, hone your lightsaber techniques, and explore the ancient mysteries of a long-lost civilization – all while staying one step ahead of the Empire and its deadly Inquisitors.",
       trailer:"https://youtu.be/0GLbwkfhYZk",
       price:"60$"
     },
     { id:uuidv4(),
      image:"https://img.search.brave.com/59CX5R7aq_3FbAAMDuDyyXEFrrrg59O-fUFCHXNJdQ8/rs:fit:1200:1080:1/g:ce/aHR0cHM6Ly8zLmJw/LmJsb2dzcG90LmNv/bS8tZHhtZ2JDQ2Nm/bG8vV2c4UEJOMmFF/ZEkvQUFBQUFBQUFy/WjQvd2FZQldmNmhw/emNyRDJpRmtiMXZ5/VEpNczdCTW1sT0JR/Q0xjQkdBcy9zMTYw/MC9TdGFyJTJCV2Fy/cyUyQjEucG5n", 
       title:"Star Wars Battlefront II",
       date:"2020",
       discription:"Star Wars Battlefront II is a third and first-person shooter, where players can partake in either ground battles, assuming the role of soldiers, or space battles, where players pilot starfighters. ... Battles take place across a variety of maps, and every era has its own exclusive maps.",
       trailer:"https://youtu.be/_q51LZ2HpbE",
       price:"50$"
     },
     { id:uuidv4(),
      image:"https://cracked-games.org/wp-content/uploads/2018/03/Attack-on-Titan-2.jpg", 
       title:"Attack on Titan 2",
       date:"2020",
       discription:"Attack on Titan 2 is the gripping sequel to the action game based on the worldwide hit anime series Attack on Titan. Experience the immense story of the anime alongside Eren and his companions, as they fight to save humanity from the threat of the deadly human devouring Titans.",
       trailer:"https://youtu.be/rU34JMxLJ9s",
       price:"30$"
     },
     { id:uuidv4(),
      image:"https://cracked-games.org/wp-content/uploads/2019/01/YIIK-A-Postmodern-RPG.jpg", 
       title:"YIIK: A Postmodern RPG",
       date:"2019",
       discription:"YIIK: A Postmodern RPG is a surreal Japanese-style RPG set in the late '90s. After witnessing a woman vanish from an elevator with no plausible explanation, college graduate Alex gathers friendly misfits from the internet to investigate her disappearance.",
       trailer:"https://youtu.be/3vJHpfIzfvo",
       price:"44$"
     },
     { id:uuidv4(),
      image:"https://cracked-games.org/wp-content/uploads/2018/12/Just-Cause-4.jpg", 
       title:"Just Cause 4",
       date:"2021",
       discription:"Just Cause 4 is an action-adventure game played from a third-person perspective. The player assumes the role of series protagonist Rico Rodríguez. The game takes place in the fictional nation of Solís, a large open world consisting of different biomes including snowy mountains and deserts.",
       trailer:"https://youtu.be/Lfek7Kcq16g",
       price:"60$"
     },
     { id:uuidv4(),
      image:"https://cracked-games.org/wp-content/uploads/2017/02/Just-Cause-3.jpg", 
       title:"Just Cause 3",
       date:"2016",
       discription:"Just Cause 3 is a 2015 action-adventure game developed by Avalanche Studios and published by Square Enix's European subsidiary. ... The game is played from a third-person perspective and allows players to explore the tropical island of Medici in an open world environment. Just Cause 3 received mixed reviews.",
       trailer:"https://youtu.be/miLLfFu7xdg",
       price:"30$"
     },
     { id:uuidv4(),
      image:"https://cracked-games.org/wp-content/uploads/2017/06/SNIPER-ELITE-4.jpg", 
       title:"SNIPER ELITE 4",
       date:"2018",
       discription:"Discover unrivalled sniping freedom in the largest and most advanced World War 2 shooter ever built. Experience tactical third-person combat, gameplay choice and epic longshots across gigantic levels as you liberate wartime Italy from the grip of Fascism.",
       trailer:"https://youtu.be/lGBRAEvXZ94",
       price:"21$"
     },
     { id:uuidv4(),
      image:"https://cracked-games.org/wp-content/uploads/2016/08/Sniper-Elite-3.jpg", 
       title:"Sniper Elite 3",
       date:"2013",
       discription:"Sniper Elite III is set around three years prior to the events of V2, following the exploits of OSS officer Karl Fairburne as he participates in the North African conflict during World War II, and works to stop the development of a deadly new weapon and eliminate the renegade Nazi commander responsible for it.",
       trailer:"https://youtu.be/nsHcLZGQ81s",
       price:"7$"
     },
     { id:uuidv4(),
      image:"https://cracked-games.org/wp-content/uploads/2017/10/Wolfenstein-II-The-New-Colossus.jpg", 
       title:"Wolfenstein II: The New Colossus",
       date:"2020",
       discription:"The story follows war veteran William B.J. Blazkowicz and his efforts to fight against the Nazi regime in the United States. The game is played from a first-person perspective and most of its levels are navigated on foot. The story is arranged in chapters, which players complete in order to progress.",
       trailer:"https://youtu.be/q5-8bOdgbQ8",
       price:"40$"
     },
     { id:uuidv4(),
      image:"https://cracked-games.org/wp-content/uploads/2019/08/Wolfenstein-Youngblood.jpg", 
       title:"Wolfenstein: Youngblood",
       date:"2022",
       discription:"Wolfenstein: Youngblood is the first modern co-op Wolfenstein adventure. Team up with a friend or play solo as one of BJ Blazkowicz's twin daughters and wield a powerful arsenal of new weapons, gadgets, and abilities to liberate Paris from the Nazis.",
       trailer:"https://youtu.be/SNpgKytPcc4",
       price:"25$"
     },

  ]
  )
  const [toggle, setToggle] = useState(false);
  const [gameName, setGameName] = useState("");
  
 
  
  return (
    <div className="App">
      <div>
    <Navbar/>
      </div>
<Switch>
<Route path="/Addgames">
    <Addgames/>
  </Route>
  <Route path="/Userlist">
    <Userlist/>
  </Route>
  <Route path="/Shopingcard">
    <Shopingcard/>
  </Route>
  <Route path="/Signup">
    <Singuppage/>
  </Route>
  <Route path="/Login">
    <Loginpage/>
  </Route>
   <Route path="/details/:id">
  <GameDetails games={games}/>
</Route>
  <Route>
<Homepage path="/" games={games}
/>
</Route>


</Switch>

    </div>
  );
}

export default App;
