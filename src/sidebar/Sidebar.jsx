import './sidebar.css'
import sidebarImage from '../assates/sidebar-img.jpg'

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarItem">
          <span className="sidebarTitle"></span>
          <img className='sidebarImg' src={sidebarImage} alt="Image" />
        </div>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. I</p>
    </div>
  )
}

export default Sidebar