import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
	// const params = useParams(); 
	const {friendId} = useParams(); 
	const [friend, setFriend] = useState({}); 
	useEffect(() => {
		const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
		fetch(url)
			.then(res => res.json())
			.then(data => setFriend(data)); 
	}, [])
	return (
		<div>
			<h1> Here remain the information about the friend : {friendId}</h1> 
			<h1> Name : {friend.name}</h1>
			<h2> Email : {friend.email}</h2> 
			<h4> Address : {friend.address?.city}</h4>
			<h5> GEO Lng : {friend.address?.geo?.lng}</h5>
		</div>
	);
};

export default FriendDetail;