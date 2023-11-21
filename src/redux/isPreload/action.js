import api from "../../utils/api";
import { setAuthActionCreator } from "../authUser/action";

const ActionType = {
  SET_IS_PRELOAD: 'SET_IS_PRELOAD',
}

const setPreloadActionCreator = (isPreload) => ({
  type: ActionType.SET_IS_PRELOAD,
  payload: {
    isPreload,
  },
});

const asyncSetPreload = () => async (dispatch) => {
  try {
    const authUser = await api.getOwnProfile();
    dispatch(setAuthActionCreator(authUser))
  } catch (error) {
    dispatch(setAuthActionCreator(null))
  } finally {
    dispatch(setPreloadActionCreator(false))
  }
};

export {
  ActionType,
  setPreloadActionCreator,
  asyncSetPreload,
};