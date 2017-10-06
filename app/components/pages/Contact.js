import React, { Component} from "react";
import axios from "axios";

export default class Contact extends Component {
	constructor(){
		super();
		this.state = {
			email: "",
			subject: "",
			comments: "",
			displayConfirmation: false,
			displayForm: true
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidUpdate(){
		console.log(this.state)
	}

	handleChange(evt){
		let newState = {};
		newState[evt.target.name] = evt.target.value;
		this.setState(newState)
	}

	handleSubmit(evt){
		evt.preventDefault();
		console.log(this.state);
		axios.post("/mailer", this.state).then(res => res);
		this.setState({
			displayForm: false,
			displayConfirmation: true
		})
	}



	render(){

		const style = {
			marginLeft: "calc(50% - 220px)",
			marginTop: "250px"
		}

		return(
			<div>
			{this.state.displayForm ? <div className="contact-container">
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
			</div> : null}
			{this.state.displayConfirmation ? <h1 style={style}>Your Email has been sent!</h1> : null}
			</div>
		);
	}
}