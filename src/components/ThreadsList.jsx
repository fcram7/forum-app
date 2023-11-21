import ThreadItem from "./ThreadItem";
import { threadItemShape } from "../utils/propHelper";
import PropTypes from 'prop-types'

const ThreadsList = ({ threadsList }) => {
  return ( 
    <div className="threads-list grid">
      <button>Create Thread</button>
      {threadsList.map((thread) => (
        <ThreadItem key={thread.id} {...thread}/>
      ))}
    </div>
   );
}

ThreadsList.propTypes = {
  threadsList: PropTypes.arrayOf(PropTypes.shape(threadItemShape)).isRequired
}
 
export default ThreadsList;