import React from "react";
import "./FeaturedSection.css"
import FeaturedSectionData from "../Data/FeaturedSectionData";
import img1 from "../Featured1.jpg";
import img2 from "../Featured2.jpg";
import img3 from "../Featured3.jpg";
import img4 from "../Featured3.jpg";
import author from "../author.jpg"
import { BsSuitHeart } from "react-icons/bs";
import { BiShapeSquare, BiBed, BiBath } from "react-icons/bi";
import { BsArrowsAngleExpand } from "react-icons/bs";
import { IoAddCircleOutline } from "react-icons/io5";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const FeaturedSection = (props) => {
    var settings = {
        nav: true,
        arrow: true,
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
		autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerPadding: '60px',
        prevArrow: <div className="prev"><FaArrowLeft /></div>,
        nextArrow: <div className="next"><FaArrowRight /></div>,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 975,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 670,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };
    return <>
        <div className="Featured_Container">
            <div className="max-width_featured">
                <div className="text-center">
                    <span className="tag">{props.tag}</span>
                    <h2>{props.main_heading}</h2>

                    <div className="Featured_item_container">
                        <Slider {...settings}>
                            <div className="child_container">
                                <div >
                                    <a href="https://www.google.com"><img src={img1} alt="img" /></a>
                                </div>
                                <div className="text-start p-30">
                                    <div></div>
                                    <div className="product_price">$34,900 <label>/Month</label> </div>
                                    <h3>Modern Apartments</h3>
                                    <p>Beautiful Huge 1 Family House In Heart Of <br />Westbury. Newly Renovated With New Wood</p>
                                    <ul className="icon_list">
                                        <li>
                                            <span>3<BiBed /></span>
                                            <span>Bedrooms</span>
                                        </li>
                                        <li>
                                            <span>3<BiBath /></span>
                                            <span>Bedrooms</span>
                                        </li>
                                        <li>
                                            <span>3<BiShapeSquare /></span>
                                            <span>Bedrooms</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="d-flex_col p-30">
                                    <div className="author_flex">
                                        <div className="author_img">
                                            <a href="http://"><img src={author} alt="" /></a>
                                        </div>
                                        <div>
                                            <h5 className="author_name"><a href="http://"> William Seklo</a></h5>
                                            <small>Estate Agents</small>
                                        </div>
                                    </div>
                                    <ul className="list_icons">
                                        <li><a href="http://www.google.com"><BsArrowsAngleExpand /></a></li>
                                        <li><a href="http://www.google.com"><BsSuitHeart /></a></li>
                                        <li><a href="http://www.google.com"><IoAddCircleOutline /></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="child_container">
                                <div>
                                    <a href="https://www.google.com"><img src={img1} alt="img" /></a>
                                    <div></div>
                                </div>
                                <div className="text-start p-30">
                                    <div className="product_price">$34,900 <label>/Month</label> </div>
                                    <h3>Modern Apartments</h3>
                                    <p>Beautiful Huge 1 Family House In Heart Of <br />Westbury. Newly Renovated With New Wood</p>
                                    <ul className="icon_list">
                                        <li>
                                            <span>3<BiBed /></span>
                                            <span>Bedrooms</span>
                                        </li>
                                        <li>
                                            <span>3<BiBath /></span>
                                            <span>Bedrooms</span>
                                        </li>
                                        <li>
                                            <span>3<BiShapeSquare /></span>
                                            <span>Bedrooms</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="d-flex_col p-30">
                                    <div className="author_flex">
                                        <div className="author_img">
                                            <a href="http://"><img src={author} alt="" /></a>
                                        </div>
                                        <div>
                                            <h5 className="author_name"><a href="http://"> William Seklo</a></h5>
                                            <small>Estate Agents</small>
                                        </div>
                                    </div>
                                    <ul className="list_icons">
                                        <li><a href="http://www.google.com"><BsArrowsAngleExpand /></a></li>
                                        <li><a href="http://www.google.com"><BsSuitHeart /></a></li>
                                        <li><a href="http://www.google.com"><IoAddCircleOutline /></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="child_container">
                                <div>
                                    <a href="https://www.google.com"><img src={img1} alt="img" /></a>
                        
                                </div>
                                <div className="text-start p-30">
                                    <div className="product_price">$34,900 <label>/Month</label> </div>
                                    <div></div>
                                    <h3>Modern Apartments</h3>
                                    <p>Beautiful Huge 1 Family House In Heart Of <br />Westbury. Newly Renovated With New Wood</p>
                                    <ul className="icon_list">
                                        <li>
                                            <span>3<BiBed /></span>
                                            <span>Bedrooms</span>
                                        </li>
                                        <li>
                                            <span>3<BiBath /></span>
                                            <span>Bedrooms</span>
                                        </li>
                                        <li>
                                            <span>3<BiShapeSquare /></span>
                                            <span>Bedrooms</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="d-flex_col p-30">
                                    <div className="author_flex">
                                        <div className="author_img">
                                            <a href="http://"><img src={author} alt="" /></a>
                                        </div>
                                        <div>
                                            <h5 className="author_name"><a href="http://"> William Seklo</a></h5>
                                            <small>Estate Agents</small>
                                        </div>
                                    </div>
                                    <ul className="list_icons">
                                        <li><a href="http://www.google.com"><BsArrowsAngleExpand /></a></li>
                                        <li><a href="http://www.google.com"><BsSuitHeart /></a></li>
                                        <li><a href="http://www.google.com"><IoAddCircleOutline /></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="child_container">
                                <div>
                                    <a href="https://www.google.com"><img src={img1} alt="img" /></a>
                                </div>
                                <div className="text-start p-30">
                                    <div></div>
                                    <div className="product_price">$34,900 <label>/Month</label> </div>
                                    <h3>Modern Apartments</h3>
                                    <p>Beautiful Huge 1 Family House In Heart Of <br />Westbury. Newly Renovated With New Wood</p>
                                    <ul className="icon_list">
                                        <li>
                                            <span>3<BiBed /></span>
                                            <span>Bedrooms</span>
                                        </li>
                                        <li>
                                            <span>3<BiBath /></span>
                                            <span>Bedrooms</span>
                                        </li>
                                        <li>
                                            <span>3<BiShapeSquare /></span>
                                            <span>Bedrooms</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="d-flex_col p-30">
                                    <div className="author_flex">
                                        <div className="author_img">
                                            <a href="http://"><img src={author} alt="" /></a>
                                        </div>
                                        <div>
                                            <h5 className="author_name"><a href="http://"> William Seklo</a></h5>
                                            <small>Estate Agents</small>
                                        </div>
                                    </div>
                                    <ul className="list_icons">
                                        <li><a href="http://www.google.com"><BsArrowsAngleExpand /></a></li>
                                        <li><a href="http://www.google.com"><BsSuitHeart /></a></li>
                                        <li><a href="http://www.google.com"><IoAddCircleOutline /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </Slider>
                    </div>

                </div>
            </div>

        </div>
    </>
}

export default FeaturedSection;


