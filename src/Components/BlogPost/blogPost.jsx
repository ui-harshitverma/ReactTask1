import React from "react";
import "./blogPost.css"
import blogPostData from "../Data/blogPostData"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight, FaArrowLeft, FaRegUser, FaTags, FaRegCalendarAlt } from "react-icons/fa";

const BlogSection = (props) => {
	var settings = {
		nav: true,
		arrow: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		centerPadding: '60px',
		autoplay: true,
		autoplaySpeed: 1000,
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
		<div className="blog_container">
			<div className="max-width">
				<div className="text-center">
					<span className="tag">{props.tag}</span>
					<h3>{props.main_heading}</h3>
				</div>
				<div className="blog_items">
					<Slider {...settings}>
						{blogPostData.map((item) => {
							return (<>
								<div className="blog_item">
									<div className="img_container_blog">
										<img src={item.img} alt="img" />
									</div>
									<div className="blog_content_container">
										<div className="blog_content">
											<ul>
												<li><a href="http://www.google.com"><FaRegUser/>{item.admin}</a></li>
												<li><a href="http://www.google.com"><FaTags/>{item.item1}</a></li>
												<li><a href="http://www.google.com"><FaTags/>{item.item2}</a></li>
											</ul>
										</div>
										<h5>{item.sub_heading}</h5>
										<div className="date_link">
											<span className="date"><FaRegCalendarAlt/>{item.date}</span>
											<span className="link">{item.link_btn}</span>
										</div>
									</div>
								</div>
							</>)
						})}
					</Slider>
				</div>
			</div>
		</div>
	</>
}


export default BlogSection;