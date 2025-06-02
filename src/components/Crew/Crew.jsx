import React,{useState} from 'react'
import crew from '../utils/crew'
import Navbar from '../Navbar/Navbar'

const Crew = () => {
  const [selected, setSelected] =useState(crew[0])

  return (
    <div className='crew'>
        <div className='crew__container'>
        <Navbar />
        
        <div className='crew__'>
            <div className='crew__content'>
                    <h3 id='title'><span>02</span>MEET YOUR CREW</h3>
                    <div className='crew__brief__content'>
                        <h3>{selected.role}</h3>
                        <h1>{selected.name}</h1>
                        <p>{selected.bio} </p>  
                    </div>
                      <div className='crew__brief__tab'>
                      {
                        crew.map((member,index)=>(
                          <button key={member.name}
                          onClick={
                            ()=>setSelected(member)
                          }
                          className={selected.name === member.name ? 'active' : ''}
                          >
                              
                          </button>


                        ))
                      }
                        
                    </div>
            </div>

            <div className='crew__hero'>
                <div className='image__gradient'>
                    <img src={selected.images} alt="" />
                </div>
               
            </div>

        </div>
        </div>
    </div>
  )
}

export default Crew

 



    




  