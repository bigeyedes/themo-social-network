import React from 'react';
import styled from 'styled-components';


const SidebarContainer = styled.div`
	padding: 20px;
	width: 15%;
	min-width: 150px;
	height: 100vh;
	font-family: 'Sora', sans-serif;
	font-size: 1em;
	position: relative;
	.hash-wrapper {
		position: fixed;
		top: 100px;
		left: 20px;
	}
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
			<div className="hash-wrapper">
				<h3>Most popular tags</h3>
				<a href="#">#news</a>
				<a href="#">#dogs</a>
				<a href="#">#cats</a>
				<a href="#">#poland</a>
				<a href="#">#fitness</a>
			</div>
			
		</SidebarContainer>
	)
}

export default Sidebar;