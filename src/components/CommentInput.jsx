import { useDispatch } from "react-redux";
import useInput from "../hooks/useInput";
import { asyncAddComment } from "../redux/threadDetail/action";
import { threadItemShape } from "../utils/propHelper";

const CommentInput = ({ threadId }) => {
  const [comment, onSetComment] = useInput('')
  const dispatch = useDispatch()

  const onAddComment = () => {
    dispatch(asyncAddComment(threadId, comment))
  }
  return ( 
    <div className="comment-input">
      <form onSubmit={onAddComment}>
        <textarea onChange={onSetComment} placeholder="Masukkan komentar anda" name="" id="" cols="30" rows="10"></textarea>
        <button>Tambah komentar</button>
      </form>
    </div>
   );
}

CommentInput.propTypes = {
  ...threadItemShape
}
 
export default CommentInput;