import {Link, NavLink} from 'react-router-dom';

import "./topbar.css"
import model from "../../assates/model-women.jpg"
import AboutLogo from '../../assates/web-logo-transperent.png';


function TopBar() {
  const user = true;
  return (
    <div className='top'>
      <div className='topLogo'>
        <img src={AboutLogo} alt="" />
      </div>
      <div className="topLeft">
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-square-twitter"></i>
        <i className="topIcon fa-brands fa-square-pinterest"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
      </div>
      <div className="topCenter">
          <ul className="topList">
              <li><Link className='link' to="/">HOME</Link></li>
              <li><Link className='link' to="/about">ABOUT</Link></li>
              <li><Link className='link' to="/contact">CONTACT</Link></li>
              <li><Link className='link' to="/write">WRITE</Link></li>
                        
          </ul>
      </div>
      <div className="topRight">
        {
          user ? (<img className="topImg" src={model} alt="Model women" />
          ) : (
            <ul className='topList'>
              <li className='topListItem'>
              <Link className='link' to='/login'>LOGIN</Link>
              </li>
              <li className='topListItem'>
              <Link className='link' to='/resister'>RESISTER</Link>
              </li>                
            </ul>
          ) 
        }
          
          <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
        
    </div>
  )
}

export default TopBar