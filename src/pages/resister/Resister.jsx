import './resister.css'
import {Link} from 'react-router-dom';


function Resister() {
  return (
    <div className='resister'>
      <span className='resisterTitle'>Resister</span>
      <form className="resisterForm">
        <label>Username</label>
        <input type="text" className='resisterInput' placeholder='Enter your username...' />
        <label>Email</label>
        <input type="text" className='resisterInput' placeholder='Enter your email...' />
        <label>Password</label>
        <input type="password" className='resisterInput' placeholder='Enter your password...' />
        <button className='resisterButton'>Resister</button>
      </form>
      
      <button className='resisterLoginButton'>
        <Link className='link' to="/login" >Login</Link>
      </button>
    </div>
  )
}

export default Resister