import React from 'react';
import webpackIcon from './../../assets/images/webpack.png';

let Header = React.createClass({
	render: function() {
		return (
			<div>
				<div className="hero-unit">
					<h2 className="title">Hello World!!!</h2>				
					<i className="icon"></i>	
					<img src={webpackIcon}/>	
				</div>				
			</div>
		)
	}
});

export default Header;