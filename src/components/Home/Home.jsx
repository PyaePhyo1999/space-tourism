import React from 'react'
import Navbar from '../Navbar/Navbar';

const Home = () => {

  return (
    <div className='home'>
      
        <div className='home__container'>
        <Navbar/>
        <div className='home__'>
            <div className='home__content'>
                <h3>So, you want to travel to</h3>
                <h1>Space</h1>
                <p>Let’s face it; if you want to go to space, you might as well genuinely go to 
                  outer space and not hover kind of on the edge of it. Well sit back, and relax 
                  because we’ll give you a truly out of this world experience!</p>
            </div>
            <div className='btn__hero'>
                <button>EXPLORE</button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Home