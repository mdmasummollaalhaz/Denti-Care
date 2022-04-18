import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="container-fluid">
      <div
        className="about-box"
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/3952125/pexels-photo-3952125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")`,
        }}
      >
        <h2 className="about-title">About</h2>
      </div>

      <div className='about-para-box'>
        <p className="about-paragraph">
          A dental bridge can replace a tooth or several teeth. The fake teeth
          in dental bridges look and function like real teeth. For a bridge, a
          person may see a prosthodontist, a dentist who specializes in
          restoring and replacing missing teeth, or a regular dentist. Either
          way, there are many options for filling a gap in a smile. One option
          is to have a crown — a fake bit of tooth attached to a small portion
          of real tooth that the dentist has ground down. When a person has lost
          a tooth or the dentist has had to remove it, however, a crown alone is
          not an option, and a dental bridge may be the best choice.
        </p>
      </div>
    </div>
  );
};

export default About;
