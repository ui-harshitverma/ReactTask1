import React from "react";
import footerData from "../Data/footerData";
import "./footer.css"
import logo from "../logo-2.png"
import payment from "../payment-4.png"
import { FaFacebookF, FaInstagram, FaTwitter, FaDribbble, FaLocationArrow, FaRegEnvelope } from "react-icons/fa";
import { MdOutlineLocationOn, MdWifiCalling3 } from "react-icons/md";


const FooterSection = () => {
	return <>
		<div className="footer_container">
			<div className="footer_items w-25">
				<img src={logo} alt="site_logo" />
				<p>Lorem Ipsum is simply dummy text of the and typesetting industry. Lorem Ipsum is dummy text of the printing.</p>
				<span><MdOutlineLocationOn/>Brooklyn, New York, United States</span>
				<span><MdWifiCalling3/>+0123-456789</span>
				<span><FaRegEnvelope/>example@example.com</span>
				<ul className="footer_social_icons">
					<li><a href="https://www.google.com"><FaFacebookF /></a></li>
					<li><a href="https://www.google.com"><FaTwitter /></a></li>
					<li><a href="https://www.google.com"><FaInstagram /></a></li>
					<li><a href="https://www.google.com"><FaDribbble /></a></li>
				</ul>
			</div>
			<div className="footer_items main_links w-50">
				{footerData.map((item) => {
					return (<>
						<div className="links_div">
							<h5>{item.heading}</h5>
							<ul className="links_item">
								<li><a href={item.tag_link}>{item.link1}</a></li>
								<li><a href={item.tag_link}>{item.link2}</a></li>
								<li><a href={item.tag_link}>{item.link3}</a></li>
								<li><a href={item.tag_link}>{item.link4}</a></li>
								<li><a href={item.tag_link}>{item.link5}</a></li>
								<li><a href={item.tag_link}>{item.link6}</a></li>
							</ul>
						</div>
					</>)
				})}
			</div>
			<div className="footer_items mr-20 w-25">
				<h3>Newsletter</h3>
				<p>Subscribe to our weekly Newsletter and receive updates via email.</p>
				<div className="input">
					<input type="email" placeholder="Email" />
					<span><FaLocationArrow /></span>
				</div>
				<div>
					<h6>We Accept</h6>
					<div className="payment_img">
						<img src={payment} alt="payment" />
					</div>
				</div>
			</div>
		</div>

	</>
}


export default FooterSection;