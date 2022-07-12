import React, { useState } from "react";
import siteDetailsData from "../Data/siteDetailsData";
import "./siteDetails.css";
import "../custom.css/custom.css"
import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";

const SiteDetails = () => {
    const [viewPortEntered, setViewPortEntered] = useState(false);
    return (
        <>
            <div className="siteDetails_container">
                <div className="max-width siteDetails_d-flex">
                    {siteDetailsData.map((item) => {
                        return (
                            <>
                                <div className="siteDetails_item">
                                    <span>{item.icon}</span>
                                    <span className="siteDetails_item-number"> <CountUp suffix="+" start={viewPortEntered ? null : 10} end={item.number}>
                                        {({ countUpRef }) => {
                                            return (
                                                <VisibilitySensor
                                                    active={!viewPortEntered}
                                                    onChange={(isVisible) => {
                                                        if (isVisible) {
                                                            setViewPortEntered(true);
                                                        }
                                                    }}
                                                    delayedCall
                                                >
                                                    <span ref={countUpRef} />
                                                </VisibilitySensor>
                                            );
                                        }}
                                    </CountUp></span>
                                    <p>{item.details}</p>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    )
}


export default SiteDetails;