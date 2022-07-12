import React, { useState, useEffect } from 'react'
import { headerNavData, headerIconsData } from '../Data/headerData';
import logo from '../logo.png'
import './header.css'
import "../custom.css/custom.css"
import SideBar from '../SideBar/SideBar';
import { GiHamburgerMenu } from "react-icons/gi";
import { GiCrossedSabres } from "react-icons/gi";

function Header() {
    const [isOpen, setIsopen] = useState(false);
    const [scroll, setScroll] = useState(false);

    const ToggleSidebar = () => {
        isOpen === true ? setIsopen(false) : setIsopen(true);
    }

    useEffect(() => {
        window.addEventListener("scroll", () => {
        setScroll(window.scrollY > 400)
        });
    })
    
  
    return (
        <>
            <div className={`header_Container ${scroll ? "sticky_header" : "" }`}>
                <div className="max-width d-flex-header">
                    <div className='log_Container'>
                        <img src={logo} alt="header_logo" />
                    </div>
                    <ul className="Nav">
                        {headerNavData.map((item) => {
                            return <> <li className='Nav_item'>{item.navLink}</li>
                            </>
                        })}
                    </ul>
                    <div className="header_icons">
                        {headerIconsData.map((item, index) => {
                            return <> <span>{item.icon}</span>
                            </>
                        })}
                        <span onClick={()=>setIsopen(!isOpen)}>
                            
                            {isOpen?<GiCrossedSabres />:<GiHamburgerMenu/>}
                        </span>
                    </div>
                </div>
            </div>
            <SideBar ToggleSidebar={()=>ToggleSidebar()} isOpen={isOpen}/>
        </>
    )
}

export default Header;
