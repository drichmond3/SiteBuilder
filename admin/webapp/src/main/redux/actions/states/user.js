import types from '../../types';

const setUserName = payload => ({
  type: types.SET_USER_NAME,
  payload: { name: payload.name }
});

export default function userActions() {
  return {
    setUserName
  };
}