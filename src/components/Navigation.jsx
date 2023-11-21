import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navigation = ({ logout, btnName }) => {
  return ( 
    <div className="header-container">
      <header className="header flex">
        <h2 className="header-title">Forum App</h2>
        <nav className="navigation">
          <ul className="nav-list-container flex">
            <li className='nav-list'>
              <Link to='/'>Home</Link>
            </li>
            <li className='nav-list'>
              <button onClick={logout}>{btnName}</button>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

Navigation.propTypes = {
  btnName: PropTypes.string.isRequired,
  logout: PropTypes.func

}
 
export default Navigation;