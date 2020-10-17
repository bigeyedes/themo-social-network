import React from 'react';
import styled from 'styled-components';
import Post from '../organisms/Post/Post'
import Header from '../organisms/Header/Header'


const BoardContainer = styled.div`
	max-width: 680px;
`

function MainBoard() {

  return (
    <>
		<Header />

		<BoardContainer>
			<Post/>
			<Post/>
		</BoardContainer>
    </>
	
  );
}

export default MainBoard;
