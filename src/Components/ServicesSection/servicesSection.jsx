import React from "react";
import servicesSectionData from "../Data/servicesSectionData";
import "../ServicesSection/servicesSection.css"

const ServicesSection = (props) => {
        return (
                <>
                        <div className="services_container">
                                <div className="max-width">
                                        <div className="text-center">
                                                <span className="tag">{props.tag}</span>
                                                <h3>{props.main_heading}</h3>
                                        </div>
                                        <div className="conatiner_services">
                                                {servicesSectionData.map((item) => {
                                                        return <>
                                                                <div className="services_item">
                                                                        <img src={item.service_icon} alt="services_image" />
                                                                        <h4>{item.sub_heading}</h4>
                                                                        <p>{item.para}</p>
                                                                        <a href={item.link}>{item.link_name}{item.icons}</a>
                                                                </div>
                                                        </>
                                                })}
                                        </div>
                                </div>
                        </div>
                </>
        )
}
export default ServicesSection;
