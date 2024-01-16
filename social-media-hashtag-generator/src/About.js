// About.js

import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <h2>About Hashtag Generator</h2>
      <p>
        Welcome to Hashtag Generator, your go-to platform for creating engaging and
        trending hashtags for your social media posts! At Hashtag Generator, we
        understand the importance of using the right hashtags to boost your content's
        visibility and reach a wider audience.
      </p>
      <p>
        Our hashtag generation tool allows you to effortlessly generate relevant and
        popular hashtags based on your input. Whether you're promoting your business,
        sharing your passion, or building your online presence, we've got you covered
        with a diverse range of hashtags tailored to various topics and industries.
      </p>
      <p>
        Key Features:
      </p>
      <ul>
        <li>Instantly generate hashtags based on your keywords.</li>
        <li>Explore trending and popular hashtags in different categories.</li>
        <li>Optimize your social media strategy with our hashtag analytics.</li>
        <li>Create custom hashtag lists for specific campaigns or events.</li>
      </ul>
      <p>
        Get started today and take your social media game to the next level! If you
        have any questions or suggestions, feel free to{' '}
        <a href="/contact">contact us</a>. We're here to help you succeed in the
        ever-evolving world of social media.
      </p>
    </div>
  );
}

export default About;
