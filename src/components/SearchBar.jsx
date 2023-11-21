import { SlMagnifier } from "react-icons/sl";
import PropTypes from 'prop-types'

const SearchBar = ({ searchKeyword, searchKeywordChange }) => {
  return ( 
    <div className="search-bar">
      <input 
        type="text"
        value={searchKeyword}
        onChange={(e) => searchKeywordChange(e.target.value)}
        placeholder={`${<SlMagnifier/>} Search Threads`}
      />
    </div>
   );
}

SearchBar.propTypes = {
  searchKeyword: PropTypes.string.isRequired,
  searchKeywordChange: PropTypes.func.isRequired
}
 
export default SearchBar;