import React from "react";
import aboutPropertyImg from "../aboutPropertyimg.png"
import "../AboutProperty/aboutProperty.css"
import { AboutPropertyData, IconNumber, imgsLink } from "../Data/aboutPropertyData"


const AboutProperty = (props) => {
    return <>
        <div className="aboutProperty_container">
            <div className="max-width d-flex-property">
                <div className="aboutProperty_item content_div">
                    <span className="tag">{props.tag}</span>
                    <h4>{props.heading}</h4>
                    <p>{props.para}</p>
                    <ul className="line_about">
                        {AboutPropertyData.map((item) => {
                            return (<>  <li>{item.list}</li></>
                            )
                        })}
                    </ul>
                    <ul className="iconsNumber">
                        {IconNumber.map((item) => {
                            return (<>   <li>
                                <span>{item.number} {item.icons}</span>
                                <span>{item.items}</span>
                            </li> </>)
                        })}
                    </ul>
                    <ul className="imgList">
                        {imgsLink.map((item) => {
                            return (<> <li><a href={item.link}><img src={item.imgs} alt="img" /></a> </li></>)
                        })
                        }

                    </ul>

                </div>
                <div className="aboutProperty_item imgi">
                    <img src={aboutPropertyImg} alt="propertyImg" srcset="" />
                </div>
            </div>
        </div>


    </>
}

export default AboutProperty;