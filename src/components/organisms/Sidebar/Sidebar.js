import React from 'react';
import styled from 'styled-components';


const SidebarContainer = styled.div`
	padding: 20px;
	width: 15%;
	min-width: 150px;
	height: 100vh;
	font-family: 'Sora', sans-serif;
	font-size: 1em;
	a {
		display: block;
		margin: 10px 0;
		color: #3975F5;
		text-decoration: none;
	}
`

const Sidebar = () => {
	return(
		<SidebarContainer>
			<h3>Most popular tags</h3>
			<a href="#">#news</a>
			<a href="#">#most_popular</a>
			<a href="#">#news</a>
			<a href="#">#poland</a>
			<a href="#">#fitness</a>
		</SidebarContainer>
	)
}

export default Sidebar;