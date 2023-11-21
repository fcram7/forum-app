import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { asyncReceiveThreadDetail } from "../../redux/threadDetail/action";

const ThreadDetail = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const {
    threadDetail = null,
    authUser
  } = useSelector((states) => states)


  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id))
  }, [dispatch, id])

  if(!threadDetail) {
    return null;
  }

  return ( 
    <section className="thread-detail-section">
      <ThreadDetail 
        {...threadDetail} 
        authUser={authUser.id}
      />
    </section>
   );
}
 
export default ThreadDetail;