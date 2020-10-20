import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
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

const From = styled.form`
	margin: 50px 0;
	max-width: 500px;
	text-align: center;
	input {
		width: 100%;
		margin: 10px 0;
	}
`

const RegisterForm = () => {
	return(
		<RegisterFormContainer>
		<div>
			<h1>Want to be part of Themo?</h1>
			<p>Just fill form below and join to our community!</p>
		</div>
		<From>
			<Input placeholder="Name"/>
			<Input placeholder="Surname"/>
			<Input placeholder="E-mail"/>
			<Button type="submit">Sign in</Button>
		</From>
		<Link to="/home"><Button secondary>Back</Button></Link>
		</RegisterFormContainer>
	)
}

export default RegisterForm