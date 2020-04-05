import React from 'react';

import './Footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='footer__col'>
          <h4>&copy; StaySharp</h4>
          <h6>Made for demonstration only</h6>
        </div>
        <div className='footer__col'>
          <nav>
            <ul>
              <li>
                <a href='#about'>About Us</a>
              </li>
              <li>
                <a href='#terms'>Contact</a>
              </li>
              <li>
                <a href='#contact'>Terms & Conditions</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className='footer__col'>
          <ul>
            <li>
              <a href='#facebook'>
                <i className='fab fa-facebook-f'></i>Facebook
              </a>
            </li>
            <li>
              <a href='#twitter'>
                <i className='fab fa-twitter'></i>Twitter
              </a>
            </li>
            <li>
              <a href='#instagram'>
                <i className='fab fa-instagram'></i>Instagram
              </a>
            </li>
          </ul>
        </div>
        <div className='footer__col'>
          <h5>Subscribe to our newsletter:</h5>
          <input type='email' placeholder='Email Address' />
          <button>
            <i className='fas fa-arrow-right'></i>
          </button>
        </div>
        <div className='footer__col'>
          <h6>
            497 Evergreen Rd. Roseville, CA 95673
            <br /> +44 345 678 903
            <br /> adobexd@mail.com
          </h6>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
