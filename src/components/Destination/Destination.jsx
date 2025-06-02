import React,{useState} from 'react'

import Navbar from '../Navbar/Navbar'
import destination from '../utils/destination'

const Destination = () => {
  const [selected, setSelected] =useState(destination[0])

  return (
    <div className='destination'>
      
        <div className='destination__container'>
        <Navbar />
        <h3 id='title'><span>01</span>Pick your destination</h3>
        <div className='destination__'>
            <div className='destination__hero'>
                    <img src={selected.image} alt="" />
            </div>

            <div className='destination__content'>
                    <div className='destination__brief__tab'>
                        {
                            destination.map((data) =>(
                                <button
                                    key={data.name}
                                    onClick={()=>setSelected(data)}
                                    className={selected.name==data.name ? 'active' : ''}
                                >
                                    {data.name}
                                </button>
                            ))
                        }
                      
                    </div>
                    <div className='destination__brief__content'>
                        <h1>{selected.name}</h1>
                        <p>{selected.description}
                        </p>
                        <hr id='destination__line'/>
                        <div className='destination__stats'>
                            <div className='distance'>
                                <p>Avg. distance</p>
                                <h3>{selected.distance}</h3> 
                            </div>
                            <div className='travel__time'>
                                <p>Est. travel time</p>
                                <h3>{selected.travel}</h3>
                            </div>
                        </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Destination

 



    




  