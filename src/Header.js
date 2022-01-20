import { useState } from 'react';
import metapng from "./metamask.webp";
// const Web3 = require('./web3.min.js')
const Web3 = require('https://cdn.jsdelivr.net/gh/ethereum/web3.js@1.0.0-beta.34/dist/web3.min.js');


function Header(props) {

    const [connection, setConnection] = useState(false);
    const [user, setUser] = useState('');
    const [balance, setBalance] = useState(null);

    const connectWallet = async () => {
        // const accounts = await window.ethereum.enable(); //old method to call metamask
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });

        const account =  accounts[0];

        props.address(account);

        setUser(account);
        // console.log("account ", account);

        setConnection(true);

        const web3 = new Web3(window.ethereum);
        props.setWeb3State(web3);

        const bal = await web3.eth.getBalance(account);
        // console.log('bal : ',bal);

        setBalance(web3.utils.fromWei(bal, 'ether') + " ETH");

    }

    return <div className="header d-flex flex-column align-items-center my-3">

        <button className="btn btn-sm bg-warning rounded-pill px-4 my-3" onClick={connectWallet}>
            {connection ? <img src={metapng} alt="MetaMask" width="30" height="30" className='me-2' /> : <img src={metapng} alt="MetaMask" width="30" height="30" className='me-2' />}
            {connection ? user : "Connect MetaMask"}

        </button>

        {connection ? <h6 className='my-1'>{balance}</h6> : ''}

    </div>
}

export default Header;