import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { connect } from 'react-redux';
import { auth } from '../../../firebase/index'
import SearchInput from '../../atoms/SearchInput/SearchInput'
import Button from '../../atoms/Buttons/Button/Button'
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
	align-items: center;
	border-right: 1px solid #dbdbdb;
	a {
		display: block;
		padding-right: 20px;
		color: black;
		text-decoration: none
	}
`

function Header({user}) {

	const handleLoginout = () => {
		auth.signOut()
			.then(function() {
				alert("You're logged out")
			}).catch(function(error) {
				alert(error.message)
			});
	}

  return (
    <HeaderContainer>
		<Logo><Link to="/home">THEMO</Link></Logo>
		<div>
			<SearchInput placeholder="Search"/>
		</div>
		<AvatarWrapper>
			{user
				?	<>
						<Link to="/home" onClick={handleLoginout}><Button>Logout</Button></Link>
						<UserAvatar/>
						{user.displayName ? user.displayName : ''}
					</>
				:	<>
						<Link to="/sign-in">Sign In</Link>
						<Link to="/sign-up">Sign Up</Link>
					</>
			}
		</AvatarWrapper>
	
    </HeaderContainer>
	
  );
}

const mapStateToProps = state => ({
	user: state.user
})

export default connect(mapStateToProps, null)(Header);
