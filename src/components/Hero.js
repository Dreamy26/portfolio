import React from 'react';
import CtaButton from './CtaButton';

const Hero = ({ Hero }) => {

  return (
    <section className="Hero">
      <div className="Hero__container">
        <h1 className="Hero__title">
          { Hero.title || 'Hi, my name is' }
        <span>{ Hero.name || 'Your name' }</span>
        <br />
        { Hero.subtitle || 'I\'m a developer.' }
        </h1>
        <CtaButton cta={Hero.cta} />
      </div>
    </section>
  );
}

export default Hero;


