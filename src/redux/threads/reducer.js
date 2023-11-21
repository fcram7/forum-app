import { ActionType } from "./action";

const threadsReducer = (threads = [], action = {}) => {
  switch (action.type) {
    case ActionType.RECEIVE_THREADS:
      return action.payload.threads
    case ActionType.ADD_THREAD:
      return [action.payload.threads, ...threads]
    case ActionType.TOGGLE_UPVOTE_THREAD:
      return threads.map((thread) => {
        if(thread.id === action.payload.threadId) {
          return {
            ...thread,
            upVotesBy: thread.upVotesBy.includes(action.payload.userId) 
              ? thread.filter((id) => id !== action.payload.userId)
              : thread.upVotesBy.concat([action.payload.userId]),
            downVotesBy: thread.downVotesBy.includes(action.payload.userId)
              ? threads.filter((id) => id !== action.payload.userId)
              : thread.downVotesBy
          }
        }
        return thread;
      })
    case ActionType.TOGGLE_DOWNVOTE_THREAD:
      return threads.map((thread) => {
        if(thread.id === action.payload.threadId) {
          return {
            ...thread,
            downVotesBy: thread.downVotesBy.includes(action.payload.userId)
              ? thread.filter((id) => id !== action.payload.userId)
              : thread.downVotesBy.concat([action.payload.userId]),
            upVotesBy: thread.upVotesBy.includes(action.payload.userId)
              ? thread.filter((id) => id !== action.payload.userId)
              : thread.upVotesBy,
          }
        }
        return thread
      })
    case ActionType.TOGGLE_NEUTRALVOTE_THREAD:
      return threads.map((thread) => {
        if(thread.id === action.payload.threadId) {
          return {
            ...thread,
            upVotesBy: thread.upVotesBy.includes(action.payload.userId)
              ? thread.filter((id) => id !== action.payload.userId)
              : thread.upVotesBy,
            downVotesBy: thread.downVotesBy.includes(action.payload.userId)
              ? thread.filter((id) => id !== action.payload.userId)
              : thread.downVotesBy
          }
        }
        return thread
      })
    default:
      return threads;
  }
}

export default threadsReducer;