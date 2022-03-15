import "./Gameslide.css";
import React, { useState, useEffect } from 'react';


const Thumbnail = ({ arr, image, index }) => {
  return (<div className="tumbnail">
    {
      arr.map((imgsrc, i) => (
        <img
          key={i}
          height="50"
          src={imgsrc}
          onClick={() => image(i)}
          className={index === i ? 'active' : ''}
        />
      ))
    }
  </div>)
}

const Slideshow = ({ imgs }) => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    setIndex(0)
  }, [])

  const next = () => {
    if (index === imgs.length - 1) {
      setIndex(0)
    } else {
      setIndex(index + 1)
    }
  }
  const prev = () => {
    if (index === 0) {
      setIndex(imgs.length - 1)
    } else {
      setIndex(index - 1)
    }
  }


  return (
    <div className="slideshow">
      <img className="mainImg" src={imgs[index]} />
      <div className="actions">
        <button onClick={prev}>🡰</button>
        <button onClick={next}>🡲</button>
      </div>
      <Thumbnail arr={imgs} image={setIndex} index={index} />
    </div>
  )
}

function Gameslide() {

  return (
    <div className="slider">
      <Slideshow className='imgg'
        imgs ={[
          'https://mocah.org/thumbnail/87519-neon-abyss-games-2020-games-xbox-one-games-pc-games.jpg',
          'https://cracked-games.org/wp-content/uploads/2020/11/RESIDENT-EVIL-RESISTANCE-free.jpg',
          'https://cracked-games.org/wp-content/uploads/2022/02/Thrive-Free.jpg',
          'https://cracked-games.org/wp-content/uploads/2022/02/Ardens-Wake-Free.jpg',
          'https://cracked-games.org/wp-content/uploads/2019/11/Red-Dead-Redemption-2-free-cracked-download.jpg',
          'https://cracked-games.org/wp-content/uploads/2022/02/Life-is-Strange-Before-the-Storm-Remastered-Free.jpg',
          'https://mocah.org/thumbnail/85915-cyberpunk-2077-2021-games-games-hd-4k-ps-games.jpg',
        ]}
      />
    </div>
  );
}

export default Gameslide;