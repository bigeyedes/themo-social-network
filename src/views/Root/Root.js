import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
  } from "react-router-dom";
import styled from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import MainBoard from 'components/templates/MainBoard/MainBoard';
import RegisterForm from 'components/templates/Registration/Registration'

const AppContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
`

function App() {
  return (
    <AppContainer className="App">
		<GlobalStyle />
		<Router>
				<Switch>
					<Route path="/sign-up">
						<RegisterForm />
					</Route>
					<Route path="/home">
						<MainBoard />
					</Route>
				</Switch>

		</Router>
    </AppContainer>
	
  );
}

export default App;