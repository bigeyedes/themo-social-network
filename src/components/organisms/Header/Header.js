import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import SearchInput from '../../atoms/SearchInput/SearchInput'
import UserAvatar from '../../atoms/UserAvatar/UserAvatar'

const HeaderContainer = styled.header`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-family: 'Sora', sans-serif;
	background: white;
`

const Logo = styled.div`
	width: 15%;
	padding: 20px;
	border-right: 1px solid #dbdbdb;
	a {
		font-size: 2em;
		color: #3975F5;
		font-weight: 800;
		text-decoration: none;
	}
`

const AvatarWrapper = styled.div`
	width: 15%;
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-end;
	border-right: 1px solid #dbdbdb;
	a {
		display: block;
		padding-right: 20px;
		color: black;
		text-decoration: none
	}
`

function Header(props) {

  return (

    <HeaderContainer>
		<Logo><Link to="/home">THEMO</Link></Logo>
		<div>
			<SearchInput placeholder="Search"/>
		</div>
		<AvatarWrapper>
			<Link to="/sign-in">Sign In</Link>
			<Link to="/sign-up">Sign Up</Link>
			{/* <UserAvatar/> */}
		</AvatarWrapper>
    </HeaderContainer>
	
  );
}

export default Header;
