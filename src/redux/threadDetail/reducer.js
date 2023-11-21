import { ActionType } from "./action";

const threadDetailReducer = (threadDetail = null, action = {}) => {
  switch (action.type) {
    case ActionType.RECEIVE_THREAD_DETAIL :
      return action.payload.threadDetail
    case ActionType.CLEAR_THREAD_DETAIL :
      return null
    case ActionType.ADD_COMMENT:
      return {
        ...threadDetail,
        comments: [
          action.payload.comment,
          ...threadDetail.comments
        ]
      }
    case ActionType.TOGGLE_UPVOTE_THREAD_DETAIL :
      return {
        ...threadDetail,
        upVotesBy: threadDetail.upVotesBy.includes(action.payload.userId)
          ? threadDetail.upVotesBy.filter((id) => id !== action.payload.userId)
          : threadDetail.upVotesBy.concat([action.payload.userId]),
        downVotesBy: threadDetail.downVotesBy.includes(action.payload.userId)
          ? threadDetail.downVotesBy.filter((id) => id !== action.payload.userId)
          : threadDetail.downVotesBy
      }
    case ActionType.TOGGLE_DOWNVOTE_THREAD_DETAIL :
      return {
        ...threadDetail,
        downVotesBy: threadDetail.downVotesBy.includes(action.payload.userId)
          ? threadDetail.downVotesBy.filter((id) => id !== action.payload.userId)
          : threadDetail.downVotesBy.concat([action.payload.userId]),
        upVotesBy: threadDetail.upVotesBy.includes(action.payload.userId)
          ? threadDetail.upVotesBy.filter((id) => id !== action.payload.userId)
          : threadDetail.upVotesBy
      }
    case ActionType.TOGGLE_NEUTRALVOTE_THREAD_DETAIL :
      return {
        ...threadDetail,
        upVotesBy: threadDetail.upVotesBy.includes(action.payload.userId)
          ? threadDetail.upVotesBy.filter((id) => id !== action.payload.userId)
          : threadDetail.upVotesBy,
        downVotesBy: threadDetail.downVotesBy.includes(action.payload.userId)
          ? threadDetail.downVotesBy.filter((id) => id !== action.payload.userId)
          : threadDetail.downVotesBy,
      }
    case ActionType.TOGGLE_UPVOTE_COMMENT :
      return {
        ...threadDetail,
        comments: threadDetail.comments.map((comment) => {
          if(comment.id === action.payload.commentId) {
            return {
              ...comment,
              upVotesBy: comment.upVotesBy.includes(action.payload.userId)
                ? comment.upVotesBy.filter((id => id !== action.payload.userId))
                : comment.upVotesBy.concat([action.payload.userId]),
              downVotesBy: comment.downVotesBy.includes(action.payload.userId)
                ? comment.downVotesBy.filter((id) => id !== action.payload.userId)
                : comment.downVotesBy
            }
          }
        })
      }
    case ActionType.TOGGLE_DOWNVOTE_COMMENT :
      return {
        ...threadDetail,
        comments: threadDetail.comments.map((comment) => {
          return {
            ...comment,
            downVotesBy: comment.downVotesBy.includes(action.payload.userId)
              ? comment.downVotesBy.filter((id) => id !== action.payload.userId)
              : comment.downVotesBy.concat([action.payload.userId]),
            upVotesBy: comment.upVotesBy.includes(action.payload.userId)
              ? comment.upVotesBy.filter((id) => id !== action.payload.userId)
              : comment.upVotesBy
          }
        })
      }
    case ActionType.TOGGLE_NEUTRALVOTE_COMMENT :
      return {
        ...threadDetail,
        comments: threadDetail.comments.map((comment) => {
          return {
            ...comment,
            downVotesBy: comment.downVotesBy.includes(action.payload.userId)
              ? comment.downVotesBy.filter((id) => id !== action.payload.userId)
              : comment.downVotesBy,
            upVotesBy: comment.upVotesBy.includes(action.payload.userId)
              ? comment.upVotesBy.filter((id) => id !== action.payload.userId)
              : comment.upVotesBy
          }
        })
      }
    default :
    return threadDetail
  }
}

export default threadDetailReducer;