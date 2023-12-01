import { useDispatch } from "react-redux";
import { postedAt } from "../../../utils";
import { threadItemShape } from '../utils/propHelper';
import { asyncToggleUpVoteThreadDetail, asyncToggleDownVoteThreadDetail } from "../../../redux/threadDetail/action";
import CommentInput from "../../../components/CommentInput";

const ThreadDetail = ({
  id,
  title, 
  body, 
  category,
  createdAt,
  owner,
  upVotesBy,
  downVotesBy,
  totalComments,
  authUser
}) => {
  const dispatch = useDispatch()

  const isThreadUpVoted = upVotesBy.includes(authUser);
  const isThreadDownVoted = downVotesBy.includes(authUser);

  const onUpVoteThread = () => {
    dispatch(asyncToggleUpVoteThreadDetail());
  };

  const onDownVoteThread = () => {
    dispatch(asyncToggleDownVoteThreadDetail())
  }

  return ( 
    <div className="thread-detail-content-container">
      <div className="thread-votes grid">
        <div onClick={onUpVoteThread}>
          {isThreadUpVoted ? 'someone upvoted' : 'no upvote'}
        </div>
        <h2>{upVotesBy.length + downVotesBy.length}</h2>
        <div onClick={onDownVoteThread}>{isThreadDownVoted ? 'someone downvoted' : 'no downvote'}</div>
      </div>
      <div className="thread-detail-content grid">
        <h2>{category}</h2>
        <h1>{title}</h1>
        <div className="user">
          <p>Thread Starter: </p>
          <img src={owner.avatar} alt={owner.name} />
          <h3>{owner.name}</h3>
        </div>

        <p>{postedAt(createdAt)}</p>

        <p>{body}</p>
        <div className="comments">
          <div>comments</div>
          <p>{totalComments}</p>
        </div>
      </div>

      <div className="thread-comments">
        <CommentInput threadId={id}/>
      </div>
    </div>
  );
}

ThreadDetail.propTypes = {
  ...threadItemShape
}
 
export default ThreadDetail;