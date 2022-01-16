import React from 'react';
import './Footer.css';
import { Button } from './Button';
// import { Link } from 'react-router-dom';
import Link from '@material-ui/core/Link';


function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the DEITY community to receive our best products deals
        </p>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2 className='footeradd'>Address</h2>
            <p style={{color:"white"}}>5/3, Kovalan 7th Street, Kovalan Nagar, Madurai - 625003</p>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'
            href='#'>
              Let'sTab
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>Let'sTab © 2022</small>
          <div class='social-icons'>
            {/* <Link
              href='#'
              class='social-icon-link facebook'
              to='#'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link> */}
            {/* <Link
              href='#'
              class='social-icon-link instagram'
              to='#'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link> */}
            <a > 
            <Link
              href='https://www.youtube.com/watch?v=I3D_jRAO0Ik'
              class='social-icon-link youtube'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            </a>
            {/* <Link
              href='#'
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link> */}
            {/* <Link
              href='#'
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
