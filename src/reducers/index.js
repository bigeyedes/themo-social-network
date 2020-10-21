const intialState = {
	posts: '',
	user: ''
}

const rootReducer = (state = intialState, action) => {
	switch (action.type) {
		case 'ADD_POSTS':
		  return {
			...state, posts: [...state.posts, action.items]
		}
		case 'ADD_USER':
		  return {
			...state, user: action.user
		}
		default:
		  return state
		}
}

export default rootReducer

