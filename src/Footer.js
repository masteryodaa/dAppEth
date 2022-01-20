import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { FaBitcoin } from 'react-icons/fa';
import { FaEthereum } from 'react-icons/fa';

function Footer() {
  return <div className='footer fixed-bottom'>
    <a className='link d-flex justify-content-center align-items-center my-2' href="https://github.com/masteryodaa/dAppEth" target="_blank" rel='noreferrer'>
      <div className='mx-1'>Fork it at</div> <BsGithub />
    </a>

    <div className="support my-1 ">
      <div>Support me at </div>
      <div className="bitcoin fw-bold"><FaBitcoin />15vnoxf6gH7WvotjakngexrspTzZVzofSB</div>
      <div className="ether fw-bold"><FaEthereum />0x3ef627d16041c1cd2a853689269c3abe1d85153a</div>
    </div>

    
  </div>;
}

export default Footer;
