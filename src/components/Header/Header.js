import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';

const Header = () => {
	return (
		<div>
			<ul>
				<li><CustomLink to="/Home">Home</CustomLink></li>
				<li><CustomLink to="/About">About</CustomLink></li>
				<li><CustomLink to="/Education">Education</CustomLink></li>
				<li><CustomLink to="/Friends">Friends</CustomLink></li>
				{/* <li><Link to="/Home">Home</Link></li>
				<li><Link to="/About">About</Link></li>
				<li><Link to="/Education">Education</Link></li>
				<li><Link to="/Friends">Friends</Link></li> */}
			</ul>
		</div>
	);
};

export default Header;