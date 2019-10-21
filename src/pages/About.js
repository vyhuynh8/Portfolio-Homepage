import React from 'react';
import Jumbo from '../components/Jumbo';
import Content from '../components/Content';
import desc from '../assets/images/desc.png';
import quick from '../assets/images/quick.png';
import links from '../assets/images/links.png';


function About(props) {
	return(
		<div>
		<p class=" pt-5 display-4 text-center font-weight-bold">about me.</p>
			<Content>
				<h2 class="about-title"><img class="about-img" src={quick}></img>quick facts.</h2>
				<p class="about-description" >Vy Huynh</p>
				<p class="about-description"><span class="about-description-title">primary languages: </span>Java, Python, Javascript</p>
				<p class="about-description"><span class="about-description-title">main tools:</span> React/React Native, Docker, Firebase + AWS + Elastic Search Databases</p>
				<p class="about-description"><span class="about-description-title">interests: </span> Full Stack Development, Software Automation, Bot Development, IoT, Data Science, APIs</p>
				<p class="about-description"><span class="about-description-title">education: </span> Georgia Tech -- BS Computer Science Spring 2019</p>
				<h2 class="about-title"><img class="about-img" src={desc}></img>description.</h2>
				<p>My name is Vy Huynh. I recently graduated from Georgia Tech with a degree in Computer Science. I'm looking for my next opportunity - a job that challenges me, allows me to develop my engineering skills, and one that I thoroughly enjoy. </p>
				<p>I have experience in languages such as Java, Python, Javascript, and C++. I also have experience in tools such as React/React Native, AWS, Elastic Search, Docker, etc. </p>
				<p>I am very passionate about Computer Science and I thoroughly enjoy getting a chance to work on new projects and learn as much as I can. </p>
				<h2 class="about-title"><img class="about-img" src={links}></img>links.</h2>
				<a class="pr-3 about-description-title" href="">resume.</a> 
				<a class="pr-3 about-description-title" href="">github.</a> 
				<a class="about-description-title" href="">linkedIn.</a>

			</Content>
		</div>
	);
}

export default About;