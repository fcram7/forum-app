import { threadItemShape } from '../utils/propHelper';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { MdOutlineKeyboardDoubleArrowUp, MdKeyboardDoubleArrowDown } from 'react-icons/md';
import { FaRegCommentAlt } from 'react-icons/fa';
import parse from 'html-react-parser';
import { asyncToggleDownVote, asyncToggleUpVote } from '../redux/threads/action';
import { postedAt } from '../utils';

const ThreadItem = ({
  id, 
  title, 
  body, 
  category, 
  createdAt, 
  user,
  upVotesBy,
  downVotesBy,
  totalComments 
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onThreadClick = () => {
    navigate(`/threads/${id}`);
  };

  const onUpVoteThread = () => {
    dispatch(asyncToggleUpVote());
  };

  const onDownVoteThread = () => {
    dispatch(asyncToggleDownVote());
  };

  return ( 
    <article className="thread-item grid">
      <p className="thread-category">
        # {category}
      </p>
      <p>{postedAt(createdAt)}</p>
      <h1 className="thread-title" onClick={onThreadClick}>{title}</h1>
      <div>{
        body.length >=250
          ? (
              <p>{parse(body.substring(0, 253))}...</p>
            )
          : <p>{parse(body)}</p>
      }</div>
      <div className="thread-info flex">
        <div className="upvote">
          <div onClick={onUpVoteThread}>
            <MdOutlineKeyboardDoubleArrowUp /> 
            <span>{upVotesBy.length}</span>
          </div>
        </div>
        <div className="downvote">
          <div onClick={onDownVoteThread}>
            <MdKeyboardDoubleArrowDown />
            <span>{downVotesBy.length}</span>
          </div>
        </div>
        <div className="comment">
          <div>
            <FaRegCommentAlt />
            <span>  {totalComments}</span>
          </div>
        </div>
        <p>Dibuat oleh <span>{user.name}</span></p>
      </div>
    </article>
   );
}



ThreadItem.propTypes = {
  ...threadItemShape
}

ThreadItem.defaultProps = {
  user: {}
}
 
export default ThreadItem;