import api from "../../utils/api";

const ActionType = {
  SET_AUTH_USER: 'SET_AUTH_USER',
  UNSET_AUTH_USER: 'UNSET_AUTH_USER'
}

const setAuthActionCreator = (authUser) => ({
  type: ActionType.SET_AUTH_USER,
  payload: {
    authUser,
  },
});

const unsetAuthActionCreator = () => ({
  type: ActionType.UNSET_AUTH_USER,
  payload: {
    authUser: null,
  },
});

const asyncSetAuthUser = ({ email, password }) => async (dispatch) => {
  try {
    const token = await api.login({ email, password });
    api.putAccessToken(token)
    const authUser = await api.getOwnProfile();
    dispatch(setAuthActionCreator(authUser))
  } catch (error) {
    alert(error.message)
  }
}

const asyncUnsetAuthUser = () => (dispatch) => {
  dispatch(unsetAuthActionCreator())
  api.putAccessToken('')
}

export {
  ActionType,
  setAuthActionCreator,
  unsetAuthActionCreator,
  asyncSetAuthUser,
  asyncUnsetAuthUser,
}


