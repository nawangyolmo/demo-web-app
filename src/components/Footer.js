import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import flogo from '../assets/images/FooterLogo.png';

function Footer() {
  return (
    <div className='footer-container'>
    <section className='footer-subscription'>
        <div className='logos'>
        <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              <img src={flogo}></img>
            </Link>
        </div>
        <div class='social-media-wrap'>
          
          {/* <small class='website-rights'>TRVL © 2020</small> */}
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            {/* <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link> */}
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
        </div>

        <div className='input-areas'>
            <p className='footer-subscription-heading'>HAVE AN IDEA ABOUT THE NEXT BIG THING?<br/>LET US DESIGN INTO REALITY</p>
            <Button buttonStyle='btn--outline'>GET IN TOUCH</Button>
        </div>
        <div class='footer-links'>
                    <h2>UXUI Studio</h2>
                    <br/>
                    {/* <Link to='/'>Contact</Link> */}
                    <p>214, First Floor, Suvidha,<br/> Plot No. 10, Sector-56,<br/> Gurugram, 122011<br/>
                    <br/>
                    T: +91-7838858084<br/>
                    <br/>
                    E: hello@uxuistudio.in</p>
        </div>
    </section>
    </div>
  );
}

export default Footer;
