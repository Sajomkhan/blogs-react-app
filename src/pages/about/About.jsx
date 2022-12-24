import './about.css';
import AboutLogo from '../../assates/web-logo-transperent.png';

function About() {
  return (
    <div className='about'>
        <div className='aboutLogo'>
          <img src={AboutLogo} alt="Logo" /> 
        </div>       
        <div className='aboutTitle'>
        <h3> <i>For the <b>Pople</b>, for hte <b>Country</b></i></h3>
        </div>
        <div className='aboutBox'>
          <p>BASHUNDHARA GROUP DOES NOT WANT TO GROW ALONE;  IT WISHES TO GROW TOGETHER WITH ITS PARTNERS, PATRONS, CUSTOMERS, EMPLOYEES AND OTHER STAKEHOLDERS.</p>
        </div>

    </div>
  )
}

export default About