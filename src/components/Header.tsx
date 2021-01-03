import * as React from "react";

export interface HeaderProps {
	cssClass?: string;
}

// Renders header

class Header extends React.Component<HeaderProps, {}> {
	render() {
		return (
			<div className={`header 
		  		${this.props.cssClass != undefined ? this.props.cssClass : ""}`}>
				<img src="docs/mockups/logo/Header-Dawg-2.png"
					alt="Logo with page title and illustration of a dog" />
			</div>
		);
	}
}

export default Header;
