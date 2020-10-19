import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Post from '../organisms/Post/Post';
import Header from '../organisms/Header/Header';


const BoardContainer = styled.div`
	max-width: 680px;
`

function MainBoard({posts}) {

  return (
    <>
		<Header />
		<BoardContainer >
			{Object.entries(posts).map(([key, value]) => {
				return <Post key={key} content={value}/>
			})}
		</BoardContainer>
    </>
	
  );
}

const mapStateToProps = state => ({ posts: state })

export default connect(mapStateToProps)(MainBoard);
