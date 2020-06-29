import types from '../../types';

const userInitialState = {
  name: 'User'
};

const userState = (state = userInitialState, action) => {
  switch (action.type) {
    case types.SET_USER_NAME:
      return Object.assign({}, state, {
        name: action.payload.name,
      });
    default:
      return state;
  }
};

export default userState;