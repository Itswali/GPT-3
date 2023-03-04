import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => (
  <div className="header section__padding" id="home">
    <div className="header-content">
      <h1 className="gradient__text">Let&apos;s Build Something amazing with GPT-3 OpenAI</h1>
      <p>
        Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise
        blessing.
        Indulgence way everything joy alteration boisterous the attachment. Party we years to order
        allow asked of.
      </p>

      <div className="header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="header-content__people">
        <img src={people} alt="people" />
        <p>More than 1M people requested acess to Gpt in less than a Month.</p>
      </div>
    </div>

    <div className="header-image">
      <img src={ai} alt="ai" />
    </div>
  </div>
);

export default Header;
