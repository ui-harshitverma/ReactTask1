import React from "react";
import "./announcement.css"
import announceLeftData from "../Data/announcementLeftData";
import announceRightData from "../Data/announcementRightData";

const AnnouncementBar = (props) => {
    return (
        <>
            <div className="announcement_container">
                <div className="max-width d-flex">
                    <div className="announcement_item d-flex-a">
                        {announceLeftData.map((item) => {
                            return <>
                                <div className="announcement_detail">
                                    <span className="icon_item">{item.icon}</span>
                                    <span className="details_item">{item.detail}</span>
                                </div>
                            </>
                        })}
                    </div>
                    <div className="announcement_item flex-end">
                        <ul className="announcement_icons">
                            {announceRightData.map((item) => {
                                return <>
                                    <li className="announcement_icons">{item.social_icons}</li>
                                </>
                            })}
                        </ul>
                        <a className="announcement_item_btn" href={props.link}>{props.text}</a>
                    </div>
                </div>
            </div>
        </>
    )
}


export default AnnouncementBar;