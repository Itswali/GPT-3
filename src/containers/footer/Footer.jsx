import React from 'react';
import gpt3Logo from '../../assets/logo.svg';

export default function Footer() {
  return (
    <div className="footer section__padding">
      <div className="footer-heading">
        <h1 className="gradient__text">Do you want to step in to the future before others</h1>
      </div>

      <div className="footer-btn">
        <p>Request Early Access</p>
      </div>

      <div className="footer-links">
        <div className="footer-links_logo">
          <img src={gpt3Logo} alt="gpt3_logo" />
          <p>
            Crechterwoord K12 182 DK Alknjkcb,
            {' '}
            All Rights Reserved
          </p>
        </div>
        <div className="footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions </p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="footer-links_div">
          <h4>Get in touch</h4>
          <p>Islamabasd, Pakistan</p>
          <p>+923095925592</p>
          <p>luckywali0986@gmail.com</p>
        </div>
      </div>

      <div className="footer-copyright">
        <p>@2023 GPT-3. All rights reserved.</p>
      </div>
    </div>
  );
}
