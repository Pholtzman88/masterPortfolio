import React, { Component} from "react";
import Typing from 'react-typing-animation';

export default class About extends Component {
	constructor(){
		super();
	}

	render(){
		return(
			<div className="main-content row">
					<div className="img-container s4">
						<image className="portfolioImg" src="./assets/images/portfolioImg.jpg"></image>
					</div>
					<div className="info-container s8">
						<h1 className="about-title">Why Web Development?</h1>
						<hr/>
						<p className="about-text">I am extremely lucky to have grown up in Austin, TX.
						Being constantly exposed to creativity and innovation has molded me into the
						person I am today, and I have a weird home town to thank
						for that. I first started to express my creativity when I was 12 through music and still
						enjoy singing and playing guitar to this day. As I got older, I knew I wanted to do something 
						with my life that would both push my own creative limits and involve deep critical thinking skills. 
						I decided to try my hand at programming and as a result have developed an obsession for creating new applications
						and leaving my mark on the digital world.
						</p>
					</div>
			</div>
		);
	}
}