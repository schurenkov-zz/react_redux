const initialState = {
  users: []
}

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_FETCH_SUCCEEDED':
      return Object.assign({}, state, {users: action.users});
    default:
      return state;
  }
}

export default mainReducer;
