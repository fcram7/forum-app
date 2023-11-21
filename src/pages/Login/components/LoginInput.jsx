import useInput from '../../../hooks/useInput'
import PropTypes from 'prop-types'


const LoginInput = ({ login }) => {
  const [email, emailChangeHandler] = useInput('')
  const [password, passwordChangeHandler] = useInput('')

  return ( 
    <form className='login-form grid' onSubmit={() => login({ email, password })}>
      <label htmlFor="username">Email</label>
      <input type="email" value={email} onChange={emailChangeHandler} placeholder='Enter Email' required/>
      <label htmlFor="password">Password</label>
      <input type="password" value={password} onChange={passwordChangeHandler} placeholder='Enter password' required/>
      <button type="submit">Login</button>
    </form>
   );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};
 
export default LoginInput;