import React, { Component} from "react";

export default class Contact extends Component {
	constructor(){
		super();
	}
	render(){
		return(
			<div className="contact-container">
				<div className="row">
					<div className="s3"></div>
					<form className=" s6 col contact-form" action="mailto:holtzman.patrick@gmail.com">
						<input className="s2 form-input email" placeholder="email"/>
						<input className="s2 form-input subject" placeholder="subject"/>
						<textarea className="s8 form-input comments" placeholder="comments"/>
						<input className="submitBtn" type="submit"/>
					</form>
					<div className="s3"></div>
				</div>
			</div>
		);
	}
}