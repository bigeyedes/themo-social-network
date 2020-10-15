import React from 'react';
import GlobalStyle from 'theme/GlobalStyle';
import SearchInput from 'components/atoms/SearchInput/SearchInput'

function App() {
  return (
    <div className="App">
		<GlobalStyle />
		<SearchInput placeholder="Search"/>
    </div>
	
  );
}

export default App;
