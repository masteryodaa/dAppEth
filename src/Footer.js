import React from 'react';
import { BsGithub } from 'react-icons/bs';

function Footer() {
  return <div className='footer fixed-bottom'>
    <a href="https://github.com/masteryodaa/dAppEth" target="_blank" rel='noreferrer'>
      <div className="github text-center">Fork it at <BsGithub /></div>
    </a>
  </div>;
}

export default Footer;
