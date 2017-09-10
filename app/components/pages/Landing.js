import React, { Component} from "react";
import Typing from 'react-typing-animation';

export default class About extends Component {
	constructor(){
		super();
	}

	render(){
		return(
			<div className="main-content row">
				<div className="s1">
				</div>
				<div className="text-box s10">
					<Typing speed={20} startDelay={1000}>
						<h1 className="description">I am a <strong>Full Stack Developer</strong> with a passion for creating simple solutions to complex problems.</h1>
					</Typing>
				</div> 
				<div className="s1"></div>
			</div>
		);
	}
}