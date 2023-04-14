import React from 'react'
import './Home.css'
import NavCard from '../../components/NavCard/NavCard';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import logo from '../../assets/Globe.svg'
import {Link} from 'react-router-dom'

const Home = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }
  const isAuth=false;
  return (
    <div className='Home-container'>
      <div className="top-part">
        <div className="Box-Head">
          <div className="greeting">
            {
              isAuth?
              <h1>Welcome Back, dear Friend!</h1>:
              <h1>Hello friend!</h1>
            }
          </div>
          <div className="HAY">
            <h2>Fine day to train your Ear, isn't it?</h2>
          </div>        
        </div>
        <FontAwesomeIcon icon={faAnglesDown} className='scrollDown' size='2xl' onClick={handleClick('navigation-direc')}/>
      </div>
      <div className="nav-direc-box" id='navigation-direc'>
        <h1 className='nav-header'>"What's on your mind today?"</h1>
        <div className="nav-direc">
          <NavCard text='Want to listen to more sounds?' btnText='Explore more sounds!' desc='Browse through our enormous library to learn how objects sound like!'/>
          <NavCard text='Want to test your calibre?' btnText='Get tested!' desc='Attempt one of our tests to see how much you have learnt!'/>
        </div>
      </div>    
      <div className="contact-section">
        <div className="contact-logo">
          <img className='logo' src={logo} alt='logo' />
          <p>© All copyrights reserved. ARC--IEEE limited.</p>
        </div>
        <div className="contact">
          <h1>Useful Links</h1>
            <Link to='/help' className='contact-us-link'>Help</Link>
            <Link to='gmail.com'  className='contact-us-link'>Email</Link>
            <Link to='/FAQS'  className='contact-us-link'>FAQs</Link>
            <Link to='/licenses'  className='contact-us-link'>Licenses</Link>
        </div>
        <div className="contact-info">
          <h1>Contact Us:</h1>
          <div className="contact-info-links">
            <h4>Call Us : 0000000000</h4>
            <h4>Visit Us : 6a hemlock street, chennai-602303</h4>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Home
