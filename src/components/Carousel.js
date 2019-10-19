import React from 'react';
import discord from '../assets/images/discord.png';
import insta from '../assets/images/insta.png';
import mealgen from '../assets/images/mealgen.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import Card from './Card';

class Carousel extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
            items: [
                {
                    id: 0,
                    title: 'Instagram Bot',
                    subTitle: 'The Bot that automates Instagram',
                    imgSrc: insta,
                    link: '',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Notes Application',
                    subTitle: 'A application to take notes',
                    imgSrc: mealgen,
                    link: '',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Discord Chat Bot',
                    subTitle: 'A bot to talk to on discord',
                    imgSrc: discord,
                    link: '',
                    selected: false
                },
            ]
		}
	}

	handleCardClick = (id, card) => {
		let items = [...this.state.items];
		items[id].selected = items[id].selected ? false : true;
		items.forEach(item => {
			if (item.id !== id)
				item.selected = false;
		});

		this.setState({
			items
		});
	}


	makeItems = (items) => {
		return items.map(item => {
			return <Card item={item} click={e => this.handleCardClick(item.id, e)} key={item.id}/>
		})
	}

	render() {
		return(
			<Container fluid={true}>
				<Row className="justify-content-around">
					{this.makeItems(this.state.items)}
				</Row>
			</Container>
		);
	}
}


export default Carousel;