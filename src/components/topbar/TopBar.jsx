import {Link} from 'react-router-dom';

import "./topbar.css"
import model from "../../assates/model-women.jpg"


function TopBar() {
  const user = true;
  return (
    <div className='top'>
        <div className="topLeft">
          <i className="topIcon fa-brands fa-square-facebook"></i>
          <i className="topIcon fa-brands fa-square-twitter"></i>
          <i className="topIcon fa-brands fa-square-pinterest"></i>
          <i className="topIcon fa-brands fa-square-instagram"></i>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem"><Link className='link' to="/">HOME</Link></li>
                <li className="topListItem"><Link className='link' to="/">ABOUT</Link></li>
                <li className="topListItem"><Link className='link' to="/">CONTACT</Link></li>
                <li className="topListItem"><Link className='link' to="/write">WRITE</Link></li>
                         
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