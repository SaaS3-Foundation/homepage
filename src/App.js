import logo from './logo.png';
import './App.css';
import PipClock from './components/pip_clock/pip_clock';
import ContactBar from './components/contact/contact';
import React from 'react';
import Particles from "react-tsparticles";

import './opening.css'
import { message, Space } from 'antd';
import NetworkGraph from './components/network/network';

export const white_paper_link = "https://www.deainet.io/file/Whitepaper.pdf"

function App() {

    const [ clicked, setClicled ] = React.useState(false);

    const [ tab, setTab ] = React.useState("overview");
    
    const particles_container = React.useRef();

    return (
        <div className="App">
            <div className={clicked?"App-opening__clicked":"App-opening"}>
                <div className="App-opening-center">
                    <div class={`${clicked?"card__clicked":"card"}`} onClick={()=>setClicled(true)}>
                        <div className="card-content App-card">
                        <img src={logo} className={`App-logo${clicked?"__clicked":""}`}/>
                        <PipClock className="App-pip-clock" />
                        </div>
                    </div>

                    <div hidden={clicked} className="App-link" href="https://mythrillfiction.com/" target="_blank" >
                        Real Decentralized AI
                    </div>
                </div>

                <div className="App-contact-positioner">
                    <ContactBar className={`App-contact ${clicked?"contact_clicked":""}`}/>
                </div>
            </div>

            <header className="App-header">
                <img src={logo} className="App-header-logo"/>
                <div className="App-menu">
                    
                    <button
                        className={`App-menu-item${tab==="overview"?"__selected":""}`}
                        onClick={()=>{alert("SUccess")}
                    }>Overview</button>

                    <button className="App-menu-item" onClick={()=>{window.open(white_paper_link)}}>White Paper</button>
                    <button className="App-menu-item" onClick={()=>{message.info("Comming Soon")}}>AI Miners</button>
                    <button className="App-menu-item" onClick={()=>{message.info("Comming Soon")}}>AI Inventors</button>
                    <button className="App-menu-item" onClick={()=>{message.info("Comming Soon")}}>AI Users</button>
                </div>
            </header>

            <NetworkGraph/>

            <div className="App-contact-card-positioner">
                <div className="App-contact-card">
                    <h2>Contact Us:</h2>
                    <ContactBar/>
                </div>
            </div>
           
        </div>
    );
}

export default App;
