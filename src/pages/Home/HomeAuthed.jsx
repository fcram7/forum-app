import { useDispatch, useSelector } from "react-redux";
import ThreadsList from "../../components/ThreadsList";
import { useEffect } from "react";
import { asyncPopulateThreadsAndUsers } from "../../redux/shared/action";

const HomeAuthed = () => {
  const {
    threads = [],
    users = [],
    authUser
  } = useSelector((states) => states);

  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(asyncPopulateThreadsAndUsers())
  }, [dispatch])

  const threadsList = threads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
    authUser: authUser.id
  }))

  return ( 
    <section className="home-auth-section">
      <ThreadsList threadsList={threadsList}/>
    </section>
   );
}
 
export default HomeAuthed;