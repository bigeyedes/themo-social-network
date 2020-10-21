import React, { useState, useEffect } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
  } from "react-router-dom";
import styled from 'styled-components';
import { connect } from 'react-redux';
import Header from 'components/organisms/Header/Header'
import { userAuth } from '../../actions'
import { auth } from '../../firebase/index' 
import GlobalStyle from 'theme/GlobalStyle';
import MainBoard from 'components/templates/MainBoard/MainBoard';
import Registration from 'components/templates/Registration/Registration'
import Login from 'components/templates/Login/Login'

const AppContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
`

function App({user, userAuth}) {

	useEffect(() => {
		auth.onAuthStateChanged(function(user) {
			if (user) {
				 userAuth(user)
			}
		  });
	}, [])
	
  return (
    <AppContainer className="App">
		<GlobalStyle />
		<Router>
				<Header/>
				<Switch>
					<Route path="/sign-in">
						<Login />
					</Route>
					<Route path="/sign-up">
						<Registration />
					</Route>
					<Route exact path="/">
						<MainBoard />
					</Route>
				</Switch>

		</Router>
    </AppContainer>
	
  );
}

const mapStateToProps = state => ({
	user: state.user
})

const mapDispatchToProps = dispatch => ({
	userAuth: (user) => dispatch(userAuth(user))
  });

export default connect(mapStateToProps, mapDispatchToProps)(App);