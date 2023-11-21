import LoginInput from "./components/LoginInput";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { asyncSetAuthUser } from "../../redux/authUser/action";

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }))
    navigate('/')
  }

  return ( 
    <section className='login-page'>
      <div className='login-content grid'>
        <div className="login-left">
          <h1>Login to Dicoding Forum</h1>
        </div>
        <div className="login-right">
          <LoginInput login={onLogin}/>
          <p>Don&apos;t have an account? <Link to='/register'>Register here</Link></p>
        </div>
      </div>
    </section>
  );
}
 
export default Login;