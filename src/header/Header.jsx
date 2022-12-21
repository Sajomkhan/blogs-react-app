import './header.css'
import homeImage from '../assates/home-img3.jpg'

function Header() {
  return (
    <div className='header'>
        <div className="headerTitles">
            <span className="headerTitleSm">React & Node</span>
            <span className="headerTitleLg">Blog</span>
        </div>
        <img className="headerImg"  src={homeImage} alt="Home Image" />

    </div>
  )
}

export default Header