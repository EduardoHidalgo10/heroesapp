import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from './context/AuthContext';

const Login = () => {


  const {login} = useContext(AuthContext);

  const navigate = useNavigate();

  
  const handleLogin = () => {

    const lastPath = localStorage.getItem('lastPath') || '/'

    login('Eduardo Hidalgo');
    navigate(lastPath , {
      replace:true
    });
  }

  return (
    <div className='container mt-5'>
      <h1>Login</h1>
      <hr/>

      <button  onClick={handleLogin} className='btn btn-primary'>
        Login
      </button>
    </div>
  )
}

export default Login
