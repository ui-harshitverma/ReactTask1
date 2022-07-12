import React from "react";
import Button from "../Button/button";
import banner1 from "../hero_img.png";
import "../custom.css/custom.css"
import "./slider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight, FaArrowLeft, FaPlay, FaHome } from "react-icons/fa";
const Info = [
    {
        id: 1,
        icon: <FaHome />,
        btn: "any query",
        subheading: "Real Estate Agency",
        heading: "Find your dream house by us",
        text: " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.",
        play: <FaPlay />
    },
    {
        id: 2,
        icon: <FaHome />,
        btn: "our service",
        btn1: "learn more",
        subheading: "Real Estate Agency",
        heading: "Find your dream",
        text: " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.",
    }
];
const Banner = () => {
    var settings = {
        nav: true,
        arrow: true,
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <div className="prev"><FaArrowLeft /></div>,
        nextArrow: <div className="next"><FaArrowRight /></div>,
    };
    return (

        <>
            <div className="banner-section">
                <Slider {...settings}>
                    {Info.map((items) => {
                        let customClass;
                        if (items.id === 2) {
                            customClass = 'changeClass';
                        }
                        else {
                            customClass = '';
                        }
                        return (
                            <>
                                <div className="container">
                                    <div className="banner__wrapper max-width">
                                        <div className={`banner-info ${customClass}`}>
                                            <h5 className="banner__info__subheading">
                                                {items.icon}
                                                <span>{items.subheading}</span>
                                            </h5>
                                            <h2 className="banner__content_heading">
                                                {items.heading}
                                            </h2>
                                            <div className="banner-text ">
                                                <p>{items.text}</p>
                                            </div>
                                            <div className="btn-wrapper">
                                                <a href="https://www.google.com">
                                                    <Button type="primary" content={items.btn} />
                                                </a >
                                                {items.btn1 !== undefined ? <Button type="secondary" content={items.btn1} /> : null}
                                                {items.play !== undefined ? <a href="https://www.google.com" className="videoPlay">{items.play}</a> : null}
                                            </div>
                                        </div>
                                        <div className="banner-image">
                                            <img src={banner1} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </>
                        );
                    })}
                </Slider>
            </div>
        </>
    );
};

export default Banner;

