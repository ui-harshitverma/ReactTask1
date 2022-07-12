import React from "react";
import '../custom.css/custom.css'
import './heroSection.css'
import heroImg from '../hero_img.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import heroSectionData from "../Data/heroSectionData";

const HeroSection = () => {
    let settings = {
        infinite: true,
        speed: 500,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: < BiLeftArrowAlt />,
        nextArrow: < BiRightArrowAlt />
    };
    return (
        <>
            <div className="hero_section_container">
                <Slider {...settings}>
                    {heroSectionData.map((item) => {
                        let slideOrder
                        let classname
                        if (item.id === 2) {
                            slideOrder = "order--two"
                            classname = "rel-d--none"
                        }
                        else {
                            slideOrder = "order--one"
                            classname = " "
                        }
                        return <>
                            <div className={`max-width d-flex-hero ${slideOrder}`}>
                                <div className="hero_section_item">
                                    <div className="icon_d-flex">
                                        <span>{item.hero_icon}</span>
                                        <span className="small_title"> {item.small_title}</span>
                                    </div>
                                    <h2>{item.hero_heading1} <br /> {item.hero_heading2}</h2>
                                    <p>{item.hero_para1} <br /> {item.hero_para2}</p>
                                    <div className="hero_section_btns">
                                        <a href={item.btn_link} className="main_btn" type="primary">{item.hero_main_btn}</a>
                                        {item.buttontext2 !== undefined ? <a link={item.buttontinks2} type="transparent" text={item.buttontext2} /> : null}
                                        <a href={`item.video_link ${classname}`} className="video_btn" >{item.hero_video_btn}</a>
                                    </div>
                                </div>
                                <div className="hero_section_item">
                                    <img src={heroImg} alt="hero_img" />
                                </div>
                            </div>
                        </>
                    })}
                </Slider>
            </div>
        </>
    )
}

export default HeroSection;