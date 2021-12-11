import logo from './logo.png';
import './App.css';
import PipClock from './components/pip_clock/pip_clock';
import ContactBar from './components/contact/contact';
import React from 'react';
import Particles from "react-tsparticles";

import './opening.css'
import './overview.css'
import { message, Space } from 'antd';
import NetworkGraph from './components/network/network';

export const white_paper_link = "https://www.deainet.io/file/Whitepaper.pdf"

const dev_mode = true; // controls whether the opening screen should show.

function App() {

    const [ clicked, setClicled ] = React.useState(false);

    const [ tab, setTab ] = React.useState("overview");

    const [ scrollTop, setScrollTop ] = React.useState(0)

    React.useEffect(()=>{
        window.addEventListener('scroll', (event) => {
            let scrollTop = document.scrollingElement.scrollTop;
            setScrollTop(scrollTop)
            console.log(scrollTop > (window.innerHeight - 250)? (window.innerHeight - scrollTop - 100) / 150 : 1)
        });
    },[])

    return (
        <div className="App">
            <div hidden={dev_mode} className={clicked?"App-opening__clicked":"App-opening"}>
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
                        onClick={()=>{alert("SUccess")}}
                    >Overview</button>

                    <button className="App-menu-item" onClick={()=>{window.open(white_paper_link)}}>White Paper</button>
                    <button className="App-menu-item" onClick={()=>{message.info("Comming Soon")}}>AI Miners</button>
                    <button className="App-menu-item" onClick={()=>{message.info("Comming Soon")}}>AI Inventors</button>
                    <button className="App-menu-item" onClick={()=>{message.info("Comming Soon")}}>AI Users</button>
                </div>
            </header>

            <div id="banner" style={{
                zIndex: 1,
                position: 'relative',
                top: scrollTop * 0.6,
                transition: 'all 0.5s linear',
                opacity: (scrollTop > (window.innerHeight - 250))? (window.innerHeight - scrollTop - 100) / 150 : 1,
            }}>
                <NetworkGraph height={window.innerHeight}/>
            </div>

            <div className="App-contact-card-positioner">
                <div className="App-contact-card" style={{opacity:scrollTop>100?0:1}}>
                    <h2>Contact Us:</h2>
                    <ContactBar/>
                </div>
            </div>

            {/* <div className='sep'>
                <div className='sep-dual'>
                    <div className="sep-dual-left"/>
                    <div className="sep-dual-right"/>
                </div>
            </div> */}
            

            <div className='Overview' style={{zIndex:3}} >
                <h1>Hhahahahaha</h1>
                <h1>Hhahahahaha</h1>
                <h1>Hhahahahaha</h1>
                <h1>Hhahahahaha</h1>
                <h1>Hhahahahaha</h1>
                <h1>Hhahahahaha</h1>
                <h1>Hhahahahaha</h1>
                <h1>Hhahahahaha</h1>
                <h1>Hhahahahaha</h1>
                <h1>Hhahahahaha</h1>
                <h1>Hhahahahaha</h1>
                <h1>Hhahahahaha</h1>
                <h1>Hhahahahaha</h1>
                <h1>Hhahahahaha</h1>
                <h1>Hhahahahaha</h1>
                <h1>Hhahahahaha</h1>
                <h1>Hhahahahaha</h1>
                <h1>Hhahahahaha</h1>
                <h1>Hhahahahaha</h1>
                <h1>Hhahahahaha</h1>
                <h1>Hhahahahaha</h1>
                <h1>Hhahahahaha</h1>
                <h1>Hhahahahaha</h1>
                <h1>Hhahahahaha</h1>
                <h1>Hhahahahaha</h1>
            </div>

            <footer>
            <ContactBar/>
            </footer>
           
        </div>
    );
}

export default App;
