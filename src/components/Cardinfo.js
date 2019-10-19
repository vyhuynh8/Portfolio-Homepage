import React from 'react';
import {useSpring, animated} from 'react-spring';
import '../index.css';

function CardInfo(props) {

	const style = useSpring({opacity: 1, from: {opacity: 0}});
	return(
		<animated.div className="n-card-info" style={style}>
			<p className="n-card-title">{props.title}</p>
			<p className="n-card-subtitle">{props.subTitle}</p>
			<p href={props.link} target="_blank">Link</p>
		</animated.div>
	);
}

export default CardInfo;