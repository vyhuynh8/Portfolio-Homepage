import React from 'react';
import CardInfo from "./Cardinfo";

function Card(props) {

	return(
		<div className= "d-inline-block n-card" onClick={() => props.click(props.item)}>
			<img className="n-card-img" src={props.item.imgSrc} alt={props.item.imgSrc}/>
			{props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link} />}
		</div>
	);
}


export default Card;