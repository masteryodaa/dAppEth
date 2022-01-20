import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { FaBitcoin } from 'react-icons/fa';
import { FaEthereum } from 'react-icons/fa';

function Footer() {

  const ethClick = () => {
    var copyText = document.getElementById("ether").innerText;
    navigator.clipboard.writeText(copyText);
    console.log("Copied the text: " + copyText);
  }

  const btcClick = () => {
    var copyText = document.getElementById("btc").innerText;
    navigator.clipboard.writeText(copyText);
    console.log("Copied the text: " + copyText);
  }

  return <div className='footer fixed-bottom'>
    <a className='link d-flex justify-content-center align-items-center my-2' href="https://github.com/masteryodaa/dAppEth" target="_blank" rel='noreferrer'>
      <div className='mx-1'>Fork it at</div> <BsGithub />
    </a>

    <div className="support my-1 ">
      <div>Support me at </div>
      <div id='btc' className="bitcoin fw-bold" onClick={btcClick}><FaBitcoin />15vnoxf6gH7WvotjakngexrspTzZVzofSB</div>
      <div id='ether' className="ether fw-bold" onClick={ethClick}><FaEthereum />0x3ef627d16041c1cd2a853689269c3abe1d85153a</div>
    </div>


  </div>;
}

export default Footer;
