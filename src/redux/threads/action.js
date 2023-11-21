import api from "../../utils/api";

const ActionType = {
  RECEIVE_THREADS: 'RECEIVE_THREADS',
  ADD_THREAD: 'ADD_THREAD',
  TOGGLE_UPVOTE_THREAD: 'TOGGLE_UPVOTE_THREAD',
  TOGGLE_DOWNVOTE_THREAD: 'TOGGLE_DOWNVOTE_THREAD',
  TOGGLE_NEUTRALVOTE_THREAD: 'TOGGLE_NEUTRALVOTE_THREAD'
}

const receiveThreadsActionCreator = (threads) => ({
  type: ActionType.RECEIVE_THREADS,
  payload: {
    threads
  }
});

const addThreadActionCreator = (thread) => ({
  type: ActionType.ADD_THREAD,
  payload:{
    thread
  }
});

const toggleUpVoteActionCreator = ({ threadId, userId }) => ({
  type: ActionType.TOGGLE_UPVOTE_THREAD,
  payload: {
    threadId,
    userId
  }
});

const toggleDownVoteActionCreator = ({ threadId, userId }) => ({
  type: ActionType.TOGGLE_DOWNVOTE_THREAD,
  payload: {
    threadId,
    userId
  }
});

const toggleNeutralVoteActionCreator = ({ threadId, userId }) => ({
  type: ActionType.TOGGLE_NEUTRALVOTE_THREAD,
  payload: {
    threadId,
    userId
  }
})

const asyncAddThread = ({ title, body, category }) => async (dispatch) => {
  try {
    const thread = await api.createThread({ title, body, category });
    dispatch(addThreadActionCreator(thread))
  } catch (error) {
    alert(error.message)
  }
};

const asyncToggleUpVote = (threadId) => async (dispatch, getState) => {
  const { authUser } = getState();
  dispatch(toggleUpVoteActionCreator({ threadId, userId: authUser.id }))
  try {
    await api.upVoteThread(threadId);
    dispatch(toggleUpVoteActionCreator({ threadId, userId: authUser.id }));
  } catch (error) {
    alert(error.message)
  }
};

const asyncToggleDownVote = (threadId) => async (dispatch, getState) => {
  const { authUser } = getState();
  dispatch(toggleDownVoteActionCreator({ threadId, userId: authUser.id }))

  try{
    await api.downVoteThread(threadId);
    dispatch(toggleDownVoteActionCreator({ threadId, userId: authUser.id }))
  } catch (error) {
    alert(error.message)
  }
}

const asyncToggleNeutralVote = (threadId) => async (dispatch, getState) => {
  const { authUser } = getState();
  dispatch(toggleNeutralVoteActionCreator({ threadId, userId: authUser.id }))

  try{
    await api.neutralVoteThread(threadId)
    dispatch(toggleNeutralVoteActionCreator({ threadId, userId: authUser.id }))
  } catch (error) {
    alert(error.message)
  }
}

export {
  ActionType,
  receiveThreadsActionCreator,
  addThreadActionCreator,
  toggleUpVoteActionCreator,
  toggleDownVoteActionCreator,
  toggleNeutralVoteActionCreator,
  asyncAddThread,
  asyncToggleUpVote,
  asyncToggleDownVote,
  asyncToggleNeutralVote,
}