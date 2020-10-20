import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
  } from "react-router-dom";
import styled from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import MainBoard from 'components/templates/MainBoard/MainBoard';
import Registration from 'components/templates/Registration/Registration'
import Login from 'components/templates/Login/Login'

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
					<Route path="/sign-in">
						<Login />
					</Route>
					<Route path="/sign-up">
						<Registration />
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