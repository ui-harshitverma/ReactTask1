import React, { useState } from "react";
import img from "./Apart_img.png"
import "./Apartment.css"
import {ApartmentData, Links} from "../Data/apartmentData";

const ApartmentSketch = (props) => {
    const [toggleState, setToggleState] = useState(1);
    const [data, setData] = useState("Deluxe Portion");
    const toggleTab = (index) => {
        setToggleState(index);
    }
    const updateDatafun = (data) => {
        setData(data);
    }

    return <>
        <div className="container_ApartmentSketch">
            <div className="max-width">
                <div className="text-center">
                    <span className="tag">{props.tag}</span>
                    <h3>{props.main_heading}</h3>
                </div>
                <div className="text-center links">
                    {Links.map((item, index)=> {
                        return (<>
                        <div className={toggleState === index ? "tabs active-tabs" : "tabs"} onClick={() => { toggleTab(index); updateDatafun(item.link_name) }}>{item.link_name}</div>
                        </>)
                    })}
                </div>
                <div className="content-tabs">
                    <div className={toggleState === 1 ? "content active-content" : "content"}>
                        <div className="d-flex-plans">
                            <div className="items main-content">
                                <h4>{data}</h4>
                                <p>{props.para}</p>
                                <ul className="apartments-list">
                                    {ApartmentData.map((item) => {
                                        return (<>
                                            <li>
                                                <label>{item.name}</label>
                                                <span>{item.square}</span>
                                            </li>
                                        </>)
                                    })}
                                </ul>
                            </div>
                            <div className="img_container items">
                                <img src={img} alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default ApartmentSketch;