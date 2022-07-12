import React from "react";
import img from "../videoImg.jpg"
import "./videoSection.css"
import { FaPlay } from "react-icons/fa";

const VideoSection = () => {
	return <>
		<div className="video_container">
			<img src={img} alt="img" />
			<a className="play_btn_video" href="https://www.youtube.com/embed/X7R-q9rsrtU?autoplay=1&showinfo=0">
				<FaPlay />
			</a>
		</div>
	</>
}


export default VideoSection;