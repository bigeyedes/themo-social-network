import React from 'react';
import styled from 'styled-components';

import LoginForm from '../../organisms/LoginForm/LoginForm'

const FormContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	background: white;
`

function Registration() {

  return (
    <FormContainer>
		<LoginForm/>
    </FormContainer>
	
  );
}


export default Registration
