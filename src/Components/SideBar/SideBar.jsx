import React from "react";
import "./sidebar.css"
import logo from "../logo.png"
import { GiCrossedSabres } from "react-icons/gi";
import { BiSearch } from "react-icons/bi";
import SideBarData from "../Data/sideBarData"


const SideBar = (props) => {

	return <>
	<div className={`sidebar__container ${props.isOpen ? `active`:''}`}>
	
			<div className="sidebar__containers">
				<div className="imgContainer">
					<img src={logo} alt="SidebarLogo" />
					<div className="cross_icon" onClick={props.ToggleSidebar}><GiCrossedSabres /></div>
				</div>
				<div className="input_field">
					<input type="text" placeholder="Search" />
					<span><BiSearch /></span>
				</div>
				<div className="mobile_nav">
					{SideBarData.map((item) => {
						return(<> <div className="mobile_nav_item">
						<a href="http://www.google.com">{item.side_link}</a>
						<span>{item.side_icon}</span>
					</div>
						</>)
					})}
				</div>
			</div>					
		</div>
	</>
}
export default SideBar;