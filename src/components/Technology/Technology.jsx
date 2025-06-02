import React,{useState} from 'react'
import tech from '../utils/technology'
import Navbar from '../Navbar/Navbar'

const Technology = () => {
  const [selected, setSelected] =useState(tech[0])
  const isMobile = window.innerWidth <= 1024;
  return (
    <div className='tech'>
        <div className='tech__container'>
        <Navbar />
        <h3 id='title'><span>03</span>Space launch 101</h3>
        <div className='tech__'>
            <div className='tech__content'>
                      <div className='tech__brief__tab'>
                      {
                        tech.map((member,index)=>(
                          <button key={member.name}
                          onClick={
                            ()=>setSelected(member)
                          }
                          className={selected.name === member.name ? 'active' : ''}
                          >
                          {index + 1}    
                          </button>
                        ))
                      }
                          
                    </div>
                    <div className='tech__brief__content'>
                        <h3>The Terminology...</h3>
                        <h1>{selected.name}</h1>
                        <p>{selected.description} </p>  
                    </div>

                
                    
            </div>

            <div className='tech__hero'>
              <picture>
                  <source media="(max-width: 1024px)" srcSet={selected.land_images} />
                  <img src={selected.images} alt="" />
              </picture>
            </div>

        </div>
        </div>
    </div>
  )
}

export default Technology

 



    




  