import React from 'react';
import styled from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import MainBoard from 'components/templates/MainBoard';

const AppContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
`

function App() {
  return (
    <AppContainer className="App">
		<GlobalStyle />
		<MainBoard/>
    </AppContainer>
	
  );
}

export default App;