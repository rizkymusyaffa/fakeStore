import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { fetchDataUsers } from '../features/login/loginSlice';


function LoginForm({error}) {
    const dispatch = useDispatch()

    const [user, setUser] = useState({
      name:"",
      email:"",
      password:""
    })

    const handleLogin = (e) => {
      e.preventDefault();
      dispatch(fetchDataUsers(user))
    }
    
  return (
   <form onSubmit={handleLogin}>
        <div className='form-inner'>
            <h2>Form Login</h2>
            {(error !== "") ? (<div className="error">{error}</div>) : ""}
            <div className="form-group">
              <label htmlFor="email">Username :</label>
              <input type="text" name="email" id="email" onChange={e => setUser({...user, email: e.target.value})} value={user.email}  />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password :</label>
              <input type="password" name="password" id="password" onChange={e => setUser({...user, password: e.target.value})} value={user.password}  />
            </div>

            <input type="submit" value="LOGIN"/>
        </div>
   </form>
  )
}

export default LoginForm