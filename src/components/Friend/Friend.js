import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Friend.css';

const Friend = (props) => {
	const { name, email, username, id } = props.friend; 
	const navigate = useNavigate(); 
	const showFriendDetailes = () => {
		const path = `/friend/${id}`;
		navigate(path);
	}
	return (
		<div>
			<h3> Friend Name : {name}</h3>
			<h4> Email : {email} </h4> 
			<Link to={'/friend/' + id}> Show Details </Link>
			<button onClick={showFriendDetailes}>{username} Id : {id} </button> 
		</div>
	);
};

export default Friend;