import React from "react";
import "./testimonial.css"
import clientImg from "../client.jpg"
import testimonialData from "../Data/testimonialData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Testimonial = (props) => {
	var settings = {
        nav: true,
        arrow: true,
        infinite: true,
		autoplay: true,
		autoplaySpeed: 2000,
        speed: 500,
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
		<div className="Testimonial_container">
			<div className="max-width">
				<div className="text-center">
					<span className="tag">{props.tag}</span>
					<h3>{props.main_heading}</h3>
					<div className="Testimonial_items">
					<Slider {...settings}>
						{testimonialData.map((item) => {
							return (<>
								<div className="Testimonial_item">
									<p><span>{item.icon}</span>
									{item.para}
									</p>
									<div className="client_details">
										<div className="client_img">
											<img src={clientImg} alt="clientimg" />
										</div>
										<div>
											<h5>{item.name}</h5>
											<label>{item.label_name}</label>
										</div>
									</div>
								</div>
							</>)
						})}
					</Slider>
					</div>
				</div>
			</div>


		</div>
	</>
}

export default Testimonial;