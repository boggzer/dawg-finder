import * as React from "react";

export interface HeaderProps {
	cssClass?: string;
}

class Header extends React.Component<HeaderProps, {}> {
	render() {
		console.log(this.props.cssClass)
		return (
			<div className={`header 
		  		${this.props.cssClass != undefined ? this.props.cssClass : ""}`}>
				<img src="mockups/logo/logga-dawg-finder-1.png"
					alt="Logo with page title and illustration of a dog" />
			</div>
		);
	}
}

export default Header;
