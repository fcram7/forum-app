import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { asyncReceiveThreadDetail } from "../../redux/threadDetail/action";
import CommentInput from "../../components/CommentInput";

const ThreadDetail = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const {
    detailThread = null,
    authUser
  } = useSelector((states) => states)

  const getThreadDetail = useCallback(() => {
    dispatch(asyncReceiveThreadDetail(id))
  }, [dispatch, id])

  // const getThreadDetail = useCallback(async () => {
  //   const response = await fetch(`https://forum-api.dicoding.dev/v1/threads/${id}`);
  //   const data = await response.json();
  //   dispatch(data.data.detailThread);
  //   return data
  // }, [id]);

  useEffect(() => {
    getThreadDetail()
  }, [getThreadDetail])


  if(!detailThread) {
    return null;
  }

  return ( 
    <section className="thread-detail-section">
      <ThreadDetail 
        {...detailThread.data}
        authUser={authUser.id}
      />
      <CommentInput threadId={detailThread.id}/>
    </section>
   );
}
 
export default ThreadDetail;