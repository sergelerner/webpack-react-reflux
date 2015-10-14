import React from 'react';
import webpackIcon from './../../assets/images/webpack.png';

let Header = React.createClass({
	render: function() {
		return (
			<div>
				<img src={webpackIcon}/>	
				<div className="icon"></div>	
				<h2>Hello World!</h2>
			</div>
		)
	}
});

export default Header;