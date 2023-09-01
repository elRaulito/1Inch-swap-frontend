import "./App.css";
import Header from "./components/Header";
import {Routes, Route} from "react-router-dom";
import Swap from "./components/Swap";
import Tokens from "./components/Tokens";
import Docs from "./components/Docs";
import {useConnect, useAccount} from "wagmi"
import {MetaMaskConnector} from "@wagmi/connectors/metaMask"
import { Lucid , Blockfrost,utf8ToHex,Data,Constr, Utils} from "lucid-cardano"
import React,{useEffect} from 'react';

async function App() {
  const [api,setApi] = useEffect();
  
  const getData = async () => {
    let result = window.cardano.nami.enable()
    setApi(result)
  }

  useEffect(() => {
    // Fetching Data on Initial Load
    getData()
 },[])

 

  return (
    <div className="App">
    <Header/>
    <div className="mainWindow">
      <Routes>
        <Route path="/" element={<Swap isConnected={isConnected} address={address} />}/>
        <Route path="/tokens" element={<Tokens/>}/>
        <Route path="/docs" element={<Docs/>}/>
        </Routes>
    </div>
        </div>
  )
}

export default App;
