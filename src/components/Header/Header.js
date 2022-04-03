import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
	return (
		<div>
			<ul>
				<li><Link to="/Home">Home</Link></li>
				<li><Link to="/About">About</Link></li>
				<li><Link to="/Education">Education</Link></li>
				<li><Link to="/Friends">Friends</Link></li>
			</ul>
		</div>
	);
};

export default Header;