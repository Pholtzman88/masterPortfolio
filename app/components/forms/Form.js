import React, { Component} from "react";
import axios from "axios";

export default class Form extends Component {
	constructor(){
		super();
	}



	render(){
		return(
			<div className="contact-container">
				<div className="row">
					<div className="s3"></div>
					<form className=" s6 col contact-form" action="mailto:holtzman.patrick@gmail.com">
						<input className="s2 form-input email" placeholder="email" name="email" onChange={this.handleChange}/>
						<input className="s2 form-input subject" placeholder="subject" name="subject" onChange={this.handleChange}/>
						<textarea className="s8 form-input comments" placeholder="comments" name="comments" onChange={this.handleChange}/>
						<input className="submitBtn" type="submit" onClick={this.handleSubmit}/>
					</form>
					<div className="s3"></div>
				</div>
			</div>
		);
	}
}				