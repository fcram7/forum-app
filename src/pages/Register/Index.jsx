import { Link } from "react-router-dom";
import RegisterInput from "./components/RegisterInput";
import { useDispatch } from "react-redux";
import { asyncRegisterUser } from "../../redux/users/action";
// import api from "../../utils/api";

const Register = () => {
  // const navigate = useNavigate()
  const dispatch = useDispatch()

  const onRegister = ({ name, email, password }) => {
    dispatch(asyncRegisterUser({ name, email, password }));
  }

  return ( 
    <section className='register-page'>
      <div className='register-content grid'>
        <div className="register-left">
          <h1>Register to Dicoding Forum</h1>
        </div>
        <div className="register-right">
          <RegisterInput register={onRegister}/>
          <p>Have an account? <Link to='/login'>Login here</Link></p>
        </div>
      </div>
    </section>
   );
}
 
export default Register;