import React from 'react';
import {useSpring, animated} from 'react-spring';

function CardInfo(props) {

	const style = useSpring({opacity: 1, from: {opacity: 0}});
	return(
		<animated.div className="n-card-info" style={style}>
			<p>{props.title}</p>
			<p>{props.subTitle}</p>
			<p href={props.link} target="_blank">Link</p>
		</animated.div>
	);
}

export default CardInfo;