import React from 'react';
import styled from 'styled-components';

import RegisterForm from '../../organisms/RegisterForm/RegisterForm'

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
		<RegisterForm/>
    </FormContainer>
	
  );
}


export default Registration
