import api from "../../utils/api";
import { receiveUserActionCreator } from "../users/action";
import { receiveThreadsActionCreator } from "../threads/action";

const asyncPopulateThreadsAndUsers = () => async (dispatch) => {
  try {
    const threads = await api.getAllThreads();
    const users = await api.getAllUsers();

    dispatch(receiveThreadsActionCreator(threads));
    dispatch(receiveUserActionCreator(users));

  } catch (error) {
    alert(error.message);
  }
};

export { asyncPopulateThreadsAndUsers };