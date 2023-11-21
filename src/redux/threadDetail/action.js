import api from "../../utils/api"

const ActionType = {
  RECEIVE_THREAD_DETAIL: 'RECEIVE_THREAD_DETAIL',
  CLEAR_THREAD_DETAIL: 'CLEAR_THREAD_DETAIL',
  TOGGLE_UPVOTE_THREAD_DETAIL: 'TOGGLE_UPVOTE_THREAD_DETAIL',
  TOGGLE_DOWNVOTE_THREAD_DETAIL: 'TOGGLE_DOWNVOTE_THREAD_DETAIL',
  TOGGLE_NEUTRALVOTE_THREAD_DETAIL: 'TOGGLE_NEUTRALVOTE_THREAD_DETAIL',
  ADD_COMMENT: 'ADD_COMMENT',
  TOGGLE_UPVOTE_COMMENT: 'TOGGLE_UPVOTE_COMMENT',
  TOGGLE_DOWNVOTE_COMMENT: 'TOGGLE_DOWNVOTE_COMMENT',
  TOGGLE_NEUTRALVOTE_COMMENT: 'TOGGLE_NEUTRALVOTE_COMMENT'
}

const receiveThreadDetailActionCreator = (threadDetail) => ({
  type: ActionType.RECEIVE_THREAD_DETAIL,
  payload: {
    threadDetail
  }
})

const clearThreadDetailActionCreator = () => ({
  type: ActionType.CLEAR_THREAD_DETAIL
})

const toggleUpVoteThreadDetailActionCreator = (userId) => ({
  type: ActionType.TOGGLE_UPVOTE_THREAD_DETAIL,
  payload: {
    userId
  }
})

const toggleDownVoteThreadDetailActionCreator = (userId) => ({
  type: ActionType.TOGGLE_DOWNVOTE_THREAD_DETAIL,
  payload: {
    userId
  }
})

const toggleNeutralVoteThreadDetailActionCreator = (userId) => ({
  type: ActionType.TOGGLE_NEUTRALVOTE_THREAD_DETAIL,
  payload: {
    userId
  }
})

const addCommentActionCreator = (comment) => ({
  type: ActionType.ADD_COMMENT,
  payload: {
    comment
  }
})

const toggleUpVoteCommentActionCreator = ({ commentId, userId}) => ({
  type: ActionType.TOGGLE_UPVOTE_COMMENT,
  payload: {
    commentId,
    userId
  }
})

const toggleDownVoteCommentActionCreator = ({ commentId, userId }) => ({
  type: ActionType.TOGGLE_DOWNVOTE_COMMENT,
  payload: {
    commentId,
    userId
  }
})

const toggleNeutralVoteCommentActionCreator = ({ commentId, userId }) => ({
  type: ActionType.TOGGLE_NEUTRALVOTE_COMMENT,
  payload: {
    commentId,
    userId
  }
})

const asyncReceiveThreadDetail = (threadId) => async (dispatch) => {
  dispatch(clearThreadDetailActionCreator())
  try {
    const threadDetail = await api.getThreadDetail(threadId)
    dispatch(receiveThreadDetailActionCreator(threadDetail))
  } catch (error) {
    alert(error.message)
  }
}

const asyncToggleUpVoteThreadDetail = () => async (dispatch, getState) => {
  const { authUser, threadDetail } = getState()
  dispatch(toggleUpVoteThreadDetailActionCreator(authUser.id))

  try {
    await api.upVoteThread(threadDetail.id)
  } catch (error) {
    alert(error.message)
  }
}

const asyncToggleDownVoteThreadDetail = () => async (dispatch, getState) => {
  const { authUser, threadDetail } = getState()
  dispatch(toggleDownVoteThreadDetailActionCreator(authUser.id))

  try{
    await api.downVoteThread(threadDetail.id)
  } catch (error) {
    alert(error.message)
  }
}

const asyncToggleNeutralVoteThreadDetail = () => async (dispatch, getState) => {
  const { authUser, threadDetail } = getState()
  dispatch(toggleNeutralVoteThreadDetailActionCreator(authUser.id))
  
  try{
    await api.neutralVoteThread(threadDetail.id)
  } catch(error) {
    alert(error.message)
  }
}

const asyncAddComment = ({ content, id }) => async (dispatch) => {
  try {
    const comment = await api.addCommentToThread({ id, content })
    dispatch(addCommentActionCreator(comment))
  } catch(error) {
    alert(error.message)
  }
}

const asyncToggleUpVoteComment = (commentId) => async (dispatch, getState) => {
  const { authUser, threadDetail } = getState()
  dispatch(toggleUpVoteCommentActionCreator(authUser.id))

  try{
    await api.upVoteComment(threadDetail.id, commentId)
    dispatch(toggleUpVoteCommentActionCreator(authUser.id))
  } catch (error) {
    alert(error.message)
  }
}

const asyncToggleDownVoteComment = (commentId) => async (dispatch, getState) => {
  const { authUser, threadDetail } = getState()
  dispatch(toggleDownVoteCommentActionCreator(authUser.id))

  try {
    await api.downVoteComment(threadDetail.id, commentId)
    dispatch(toggleDownVoteCommentActionCreator(authUser.id))
  } catch (error) {
    alert(error.message)
  }
}

const asyncToggleNeutralVoteComment = (commentId) => async (dispatch, getState) => {
  const { authUser, threadDetail } = getState()
  dispatch(toggleNeutralVoteCommentActionCreator(authUser.id))

  try {
    await api.neutralVoteComment(threadDetail.id, commentId)
    dispatch(toggleNeutralVoteCommentActionCreator(authUser.id))
  } catch(error) {
    alert(error.message)
  }
}

export {
  ActionType,
  receiveThreadDetailActionCreator,
  clearThreadDetailActionCreator,
  asyncReceiveThreadDetail,
  toggleUpVoteThreadDetailActionCreator,
  toggleDownVoteThreadDetailActionCreator,
  toggleNeutralVoteThreadDetailActionCreator,
  toggleUpVoteCommentActionCreator,
  toggleDownVoteCommentActionCreator,
  toggleNeutralVoteCommentActionCreator,
  asyncToggleUpVoteThreadDetail,
  asyncToggleDownVoteThreadDetail,
  asyncToggleNeutralVoteThreadDetail,
  asyncAddComment,
  asyncToggleUpVoteComment,
  asyncToggleDownVoteComment,
  asyncToggleNeutralVoteComment
}

