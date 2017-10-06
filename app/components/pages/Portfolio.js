import React, { Component} from "react";

export default class Portfolio extends Component {
	constructor(){
		super();
	}
	render(){
		return(
			<div className="main-content row">
				<div className="s1"></div>
				<div className="prj-container s10 col">
					<div className="projectRowTop s6 row">
						<div className="prj prj-top-left s4 burgerImg">
							<a href="https://github.com/Pholtzman88/burger">
								<div className="banner gitHubLink">
									<div className="stitches"></div>
									<h5>GitHub Repo</h5>
									<div className="stitches"></div>
								</div>
							</a>
							<a className="siteLink" href="https://eatdaburgerz.herokuapp.com/burgers">
							</a>
						</div>
						<div className="prj prj-top-middle s4 starwarsImg">
							<a href="https://github.com/Pholtzman88/starwars">
								<div className="banner gitHubLink">
									<div className="stitches"></div>
									<h5>GitHub Repo</h5>
									<div className="stitches"></div>
								</div>
							</a>
							<a className="siteLink" href="https://pholtzman88.github.io/starwars/">
							</a>
						</div>
						<div className="prj prj-top-right s4 hangmanImg">
							<a href="https://github.com/Pholtzman88/hangman">
								<div className="banner gitHubLink">
									<div className="stitches"></div>
									<h5>GitHub Repo</h5>
									<div className="stitches"></div>
								</div>
							</a>
							<a className="siteLink" href="https://pholtzman88.github.io/hangman/">
							</a>
						</div>
					</div>
					<div className="projectRowBottom s6 row">
						<div className="prj prj-bottom-left s4 adoptableImg">
							<a href="https://github.com/greyhardy/adoptable">
								<div className="banner gitHubLink">
									<div className="stitches"></div>
									<h5>GitHub Repo</h5>
									<div className="stitches"></div>
								</div>
							</a>
							<a className="siteLink" href="https://greyhardy.github.io/adoptable/index.html">
							</a>
						</div>
						<div className="prj prj-bottom-middle s4 friendImg">
							<a href="https://github.com/Pholtzman88/friend_finder">
								<div className="banner gitHubLink">
									<div className="stitches"></div>
									<h5>GitHub Repo</h5>
									<div className="stitches"></div>
								</div>
							</a>
							<a className="siteLink" href="https://friendfindar.herokuapp.com/">
							</a>
						</div>
						<div className="prj prj-bottom-right s4 falconImg">
							<a href="https://github.com/Pholtzman88/gamecenter">
								<div className="banner gitHubLink">
									<div className="stitches"></div>
									<h5>GitHub Repo</h5>
									<div className="stitches"></div>
								</div>
							</a>
							<a className="siteLink" href="https://falconfighter.herokuapp.com/">
							</a>
						</div>
					</div>
				</div>
				<div className="s1"></div>
			</div>
		);
	}
}