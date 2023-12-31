import { ActionType } from "./action";

const detailThreadReducer = (detailThread = null, action = {}) => {
  switch (action.type) {
    case ActionType.RECEIVE_THREAD_DETAIL :
      return action.payload.detailThread
    case ActionType.CLEAR_THREAD_DETAIL :
      return null
    case ActionType.ADD_COMMENT:
      return {
        ...detailThread,
        comments: [
          action.payload.comment,
          ...detailThread.comments
        ]
      }
    case ActionType.TOGGLE_UPVOTE_THREAD_DETAIL :
      return {
        ...detailThread,
        upVotesBy: detailThread.upVotesBy.includes(action.payload.userId)
          ? detailThread.upVotesBy.filter((id) => id !== action.payload.userId)
          : detailThread.upVotesBy.concat([action.payload.userId]),
        downVotesBy: detailThread.downVotesBy.includes(action.payload.userId)
          ? detailThread.downVotesBy.filter((id) => id !== action.payload.userId)
          : detailThread.downVotesBy
      }
    case ActionType.TOGGLE_DOWNVOTE_THREAD_DETAIL :
      return {
        ...detailThread,
        downVotesBy: detailThread.downVotesBy.includes(action.payload.userId)
          ? detailThread.downVotesBy.filter((id) => id !== action.payload.userId)
          : detailThread.downVotesBy.concat([action.payload.userId]),
        upVotesBy: detailThread.upVotesBy.includes(action.payload.userId)
          ? detailThread.upVotesBy.filter((id) => id !== action.payload.userId)
          : detailThread.upVotesBy
      }
    case ActionType.TOGGLE_NEUTRALVOTE_THREAD_DETAIL :
      return {
        ...detailThread,
        upVotesBy: detailThread.upVotesBy.includes(action.payload.userId)
          ? detailThread.upVotesBy.filter((id) => id !== action.payload.userId)
          : detailThread.upVotesBy,
        downVotesBy: detailThread.downVotesBy.includes(action.payload.userId)
          ? detailThread.downVotesBy.filter((id) => id !== action.payload.userId)
          : detailThread.downVotesBy,
      }
    case ActionType.TOGGLE_UPVOTE_COMMENT :
      return {
        ...detailThread,
        comments: detailThread.comments.map((comment) => {
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
        ...detailThread,
        comments: detailThread.comments.map((comment) => {
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
        ...detailThread,
        comments: detailThread.comments.map((comment) => {
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
    return detailThread
  }
}

export default detailThreadReducer;