import { useState } from 'react';
import metapng from "./metamask.png";

function Connector(props) {

    const [connection, setConnection] = useState(false);
    const [user, setUser] = useState('');
    const [balance, setBalance] = useState(null);

    window.onload = async () => {
        if(!window.ethereum){
            props.setWarning('Please install MetaMask !');
        }
    }

    const connectWallet = async () => {

        // const accounts = await window.ethereum.enable(); //old method to call metamask
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });

        const account =  accounts[0];

        props.address(account);

        setUser(account);
        // console.log("account ", account);

        setConnection(true);

        // let web3 = new Web3(window.ethereum);
        props.setWeb3State(window.web3);

        const bal = await window.web3.eth.getBalance(account);
        // console.log('bal : ',bal);

        setBalance(window.web3.utils.fromWei(bal, 'ether') + " ETH");

    }

    return <div className="header d-flex flex-column align-items-center my-3">

        <button className="btn btn-sm bg-warning rounded-pill px-4 my-3" onClick={connectWallet}>
            {connection ? <img src={metapng} alt="MetaMask" width="30" height="30" className='me-2' /> : <img src={metapng} alt="MetaMask" width="30" height="30" className='me-2' />}
            {connection ? user : "Connect MetaMask"}

        </button>

        {connection ? <h6 className='my-1'>{balance}</h6> : ''}

    </div>
}

export default Connector;