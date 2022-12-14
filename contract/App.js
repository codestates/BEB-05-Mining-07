import './App.css';
import {useEffect, useState} from 'react';
import Web3 from 'web3';
import erc721Abi from './erc721Abi';
import TokenList from './components/TokenList';

const nftCA = '0x3Ef39372bbd0B6eeF75180F1995bfaF20ccaA6e8';

function App() {
  const [account, setAccount] = useState('');
  const [web3, setWeb3] = useState();
  const [newErc721addr, setNewErc721Addr] = useState();
  const [erc721list, setErc721list] = useState([]);  // 자신의 NFT 정보를 저장할 토큰

  useEffect(() => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        const web = new Web3(window.ethereum);
        setWeb3(web);
      } catch (e) {
        console.log(e);
      }
    }
  }, []);

  const connectWallet = async() => {
    const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts',
    });
    setAccount(accounts[0]);
  };

  const addNewErc721Token = async() => {
    const tokenContract = await new web3.eth.Contract(
      erc721Abi,
      newErc721addr
    );
    const name = await tokenContract.methods.name().call();
    const symbol = await tokenContract.methods.symbol().call();
    const totalSupply = await tokenContract.methods.totalSupply().call();

    const arr = [];
    for (let i=1; i<= totalSupply; i++) {
      arr.push(i)
    }
    for (let tokenId of arr) {
      const tokenOwner = await tokenContract.methods.ownerOf(tokenId).call();
      if (String(tokenOwner).toLowerCase() === account) {
        const tokenURI = await tokenContract.methods.tokenURI(tokenId).call();
        setErc721list((prevState) => {
          return [...prevState, { name, symbol, tokenId, tokenURI, address: newErc721addr }];
        });
      }
    }
  }

  return (
    <div className="App">
      <h4>NFT Contract Address: {nftCA}</h4>
      <button className='metaConnect' onClick={() => {
        connectWallet();
      }}>
        Connect to MetaMask
      </button>
      <div className='userInfo'>주소: {account}</div>
      <div className="newErc721">
        <input type="text" onChange={(e) => {
          setNewErc721Addr(e.target.value);
        }}
        ></input>
        <button onClick={addNewErc721Token}>add new erc721</button>
      </div>
      <TokenList web3={web3} account={account} erc721list={erc721list} />
    </div>
  );
}

export default App;
