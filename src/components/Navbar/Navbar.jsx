import React,{useEffect} from 'react'
import logo from '../../assets/shared/logo.svg'
import { NavLink } from 'react-router-dom'
import menu from '../../assets/shared/icon-hamburger.svg'
import close from '../../assets/shared/icon-close.svg'
import { useState } from 'react'
const Navbar = () => {
  const [menuBar,setMenu] = useState(false)

  useEffect(()=>
  {
    if (menuBar){
        document.body.style.overflow = 'hidden'
    }
    else{
         document.body.style.overflow = 'auto'
    }
    return()=>{
         document.body.style.overflow = 'auto'
    }
  },
 
)  
 const closeMenu =()=>{
    setMenu(false)
  }

  return (
     <div className='nav__'>
           
            <img id='logo' src={logo} alt="" />
            <div className='nav__right'>
                {!menuBar &&
                (
                    <img src={menu} onClick={()=>setMenu(true)} id='icon-menu' alt="" />
                )
                }
                 <hr id='line' />
             
                <div className={`nav__link ${menuBar ? 'mobile__nav':''}`}>
                    <img src={close} onClick={closeMenu} id='icon-close' alt="" />
                    <ul>
                        
                        <li><NavLink to="/"><span>00</span> Home</NavLink></li>
                        <li><NavLink to="/destination"><span>01</span> Destination</NavLink></li>
                        <li><NavLink to="/crew"><span>02</span> Crew</NavLink></li>
                        <li><NavLink to="/technology"><span>03</span> Technology</NavLink></li>
                    </ul>
                  
                </div>       
                

                
               
            </div>    
               
        </div>
  )
}

export default Navbar