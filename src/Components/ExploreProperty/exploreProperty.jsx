import React from 'react'
import Button from "../Button/button"
import "./exploreProperty.css"

function ExploreProperty(props) {
	return <>
		<div className="property_container">
			<div className="max-width">
				<div className="property_items">
					<div className="property_item">
						<h3>{props.heading}</h3>
						<p>{props.para}</p>
					</div>
					<div className="property_item">
					<Button type="secondary" content="Explore Properties"/>
					</div>
				</div>
			</div>
		</div>
		</>
}

export default ExploreProperty;
