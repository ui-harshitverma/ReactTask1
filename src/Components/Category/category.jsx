import React from "react";
import "./category.css"
import categoryData from "../Data/categoryData";


const Category = (props) => {
	return <>
		<div className="category_container">
			<div className="max-width">
				<div className="text-center">
					<span className="tag">{props.tag}</span>
					<h3>{props.main_heading}</h3>
				</div>
				<div className="category_container_items">
					{categoryData.map((item) => {
						return (<>  <div className="category_item text-center">
							<a href={item.link}>
								<p>{item.icons}</p>
								<h4>{item.heading}</h4>
								<span className="arrow_icon">{item.arrow}</span>
							</a>
						</div>
						</>)
					})}
				</div>
			</div>
		</div>
	</>
}

export default Category;