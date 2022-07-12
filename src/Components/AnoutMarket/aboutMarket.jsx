import React from "react"
import '../custom.css/custom.css'
import Button from "../Button/button"
import about_img from '../about-big.png'
import about_small from '../about-small.png'
import "./aboutMarket.css"
import AboutMarketData from "../Data/aboutMarketData"
import { FaPlay } from "react-icons/fa";

const AboutMarket = (props) => {
    return <>
        <div className="aboutMarket_container">
            <div className="max-width d-flex-market">
                <div className="img_container">
                    <img src={about_img} alt="aboutMarket" />
                    <div className="small_img">
                        <img src={about_small} alt="aboutSmall_img" />
                        <a className="about_play_btn" href="https://www.youtube.com/embed/X7R-q9rsrtU?autoplay=1&showinfo=0">
                            <FaPlay />
                        </a>
                    </div>
                </div>
                <div className="about_market_content">
                    <span className="tag">{props.tag}</span>
                    <h2>{props.heading}</h2>
                    <p>{props.para}</p>
                    <div className="icons_container">
                        {AboutMarketData.map((item) => {
                            return (<> <div className="small_icons">
                                <span className="icons-bg">{item.icon}</span>
                                <span>{item.detail}</span>
                            </div></>
                            )
                        })}
                    </div>
                    <p className="quote">
                        <span>{props.quote}</span></p>
                    <Button type="primary" content="Our Servies" />
                </div>
            </div>
        </div>
    </>
}

export default AboutMarket;