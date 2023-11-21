import useInput from "../../../hooks/useInput";
import PropTypes from 'prop-types'

const RegisterInput = ({ register }) => {
  const [name, nameChangeHandler] = useInput('')
  const [email, emailChangeHandler] = useInput('')
  const [password, passwordChangeHandler] = useInput('')

  return ( 
    <form className='register-form grid'>
      <label htmlFor="name">Name</label>
      <input type="text" value={name} onChange={nameChangeHandler} placeholder='Enter Your Name' required/>
      <label htmlFor="username">Email</label>
      <input type="email" value={email} onChange={emailChangeHandler} placeholder='Enter Email' required/>
      <label htmlFor="password">Password</label>
      <input type="password" value={password} onChange={passwordChangeHandler} placeholder='Enter Email' required/>
      <button type="button" onClick={() => register({ name, email, password })}>Register</button>
    </form>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;