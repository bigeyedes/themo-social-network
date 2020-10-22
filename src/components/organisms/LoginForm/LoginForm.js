import React, { useRef } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { auth } from '../../../firebase'
import Input from '../../atoms/Input/Input'
import Button from '../../atoms/Buttons/Button/Button'

const RegisterFormContainer = styled.div`
	text-align: center;
	div, form {
		width: 100%;
	}
	div {
		text-align: center;
	}
	a {
		color: white;
		text-decoration: none;
	}
`

const From = styled.div`
	margin: 50px 0;
	max-width: 500px;
	text-align: center;
	input {
		width: 100%;
		margin: 10px 0;
	}
`

const LoginForm = () => {

	const userEmail = useRef()
	const userPassword = useRef()

	const handleLogin = () => {
		auth.signInWithEmailAndPassword(userEmail.current.value, userPassword.current.value)
			.then(
				alert('logged in')
			)
			.catch(function(error) {
				alert(error.message)
			});
	}

	return(
		<RegisterFormContainer>
			<div>
				<h1>Sign in and start posting!</h1>
			</div>
		<From>
			<Input ref={userEmail} type="email" placeholder="E-mail"/>
			<Input ref={userPassword} type="password" placeholder="Password"/>
			<Button onClick={handleLogin}>Sign in</Button>
		</From>
		<Link to="/"><Button secondary>Back</Button></Link>
		</RegisterFormContainer>
	)
}

export default LoginForm