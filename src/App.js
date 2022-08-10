import logo from './logo.png';
import './App.css';
import './utils/usecase.css'
import PipClock from './components/pip_clock/pip_clock';
import ContactBar from './components/contact/contact';
import React from 'react';

import './opening.css'
import './overview.css'
import { message, Steps } from 'antd';
import NetworkGraph from './components/network/network';
import {  } from '@ant-design/icons'

import problemimg1 from './static/bg.png'
import tri from './static/tri.png'
import partner from './static/partner.png'
import ss3 from './static/ss3.png'
import lx from './static/lx.png'
import dapi from './static/dAPI.png'
import roles from './static/roles.png'
import portait from './static/portait.png'
import icon_location from './static/icon_location.png'
import AppHeader from './components/app_header/AppHeader';
import { isChrome } from './utils/platform';

export const white_paper_link = "/file/SaaS3Whitepaper.pdf"
export const pichdeck_link = ""
const interval_height = '12rem'

// const dev_mode = false;
const dev_mode = true;
// controls whether the opening screen should show.

export const goToOverview = () => {
    let el = document.getElementById('overview');
    if(el) {
        el.scrollIntoView({behavior: 'smooth', block: 'center'})
    }
}

export const goToDemo = () => {
    let el = document.getElementById('demo');
    if(el) {
        el.scrollIntoView({behavior: 'smooth', block: 'center'})
    }
}


function App() {

    const is_chrome = isChrome();

    const [ clicked, setClicled ] = React.useState(dev_mode);

    const [ tab, setTab ] = React.useState("overview");

    const [ scrollTop, setScrollTop ] = React.useState(0)

    React.useEffect(()=>{
        window.addEventListener('scroll', (event) => {
            let scrollTop = document.scrollingElement.scrollTop;
            setScrollTop(scrollTop)
        });
        const textarea = document.querySelector('body');
        const log = document.getElementById('log');

        textarea.onscroll = logScroll;
        function logScroll(e) {
            console.log(`Scroll position: ${e.target.scrollTop}`);
        }
    },[])

    const [ welcome_hidden, setWelcomeHidden ] = React.useState(dev_mode)

    React.useEffect(()=>{
        if(clicked) {
            setTimeout(()=>{
                setWelcomeHidden(true)
            },[1500])
        }else{
            setWelcomeHidden(false)
        }
    },[clicked])

    return (
        <div className={`App container y mandatory-scroll-snapping ${!is_chrome?'safari':''}`}>
            <div hidden={welcome_hidden} className={clicked?"App-opening__clicked":"App-opening"}>
                <div className="App-opening-center">
                    <div className={`${clicked?"card__clicked":"card"}`} onClick={()=>setClicled(true)}>
                        <div className="card-content App-card">
                        <img
                            src={logo}
                            className={`App-logo${clicked?"__clicked":""}`}
                        />
                        <PipClock className="App-pip-clock" />
                        </div>
                    </div>

                    <div hidden={clicked} className="App-link" href="https://mythrillfiction.com/" target="_blank">
                        <h1 className="graph-title-shadow"style={{zIndex:-1,bottom:'auto'}}> oracle network in Web3 </h1>
                        <h1 className="graph-title" style={{zIndex:2}}> oracle network in Web3 </h1>
                    </div>
                </div>

                <div className="App-contact-positioner">
                    <ContactBar className={`App-contact ${clicked?"contact_clicked":""}`}/>
                </div>
            </div>

            <AppHeader
                setClicled={setClicled}
                tab={tab}
                setTab={setTab}
            />

            <div>
            <div id="banner" style={{
                zIndex: 1,
                position: 'relative',
                top: scrollTop * 0.6,
                transition: 'all 0.5s linear',
                opacity: (scrollTop > (window.innerHeight - 500))? (window.innerHeight - scrollTop - 200) / 300 : 1,
            }}>
                <NetworkGraph height={window.innerHeight}/>
            </div>

            <div className="App-contact-card-positioner">
                <div className="App-contact-card" style={{opacity:scrollTop>100?0:1}}>
                    <h2>Contact Us:</h2>
                    <ContactBar/>
                </div>
            </div>
            </div>
            {/* <div className='sep'>
                <div className='sep-dual'>
                    <div className="sep-dual-left"/>
                    <div className="sep-dual-right"/>
                </div>
            </div> */}
            

            <div className='Overview article'  style={{zIndex:3}} >
                
                {/* id is used only for jummping, do not use on next <h1> if not needed */}
                <div className='article_child'>
                <h1 id='overview'>Blockchain Oracles are Unsafe</h1>
                <div>
                <p>
                    If the source (such as sensors) directly submits the data to the tamper-proof distributed ledger without going through multiple intermediaries, the possibility of data manipulation will be greatly reduced. However, the Off-Chain computations are centralized on AWS-like servers.
                </p></div>
                    <img
                        className="article-img"
                        src={problemimg1}
                        style={{width:'600px'}}
                    />
                </div>
                {/*<div style={{height:interval_height}} />*/}
            </div>

            <div className='Overview article'  style={{zIndex:3}} >
                <div className='article_child'>
                <h1>Layer2 Trilemma</h1>
                    <p>Decentralization, Scalability and Partition tolerance. SaaS3 approaches the trilemma with SaaS3 protocol and delivers a solution for the next generation Dapps. </p>
                    <br></br>
                     <img
                        className="article-img"
                        src={tri}
                        style={{width:'500px'}}
                    />
                </div>
            </div>
            <div className='Overview article'  style={{zIndex:3}} >
                <div className='article_child'>
                <h1>Secure oracle as a Service</h1>
                <p>
                    Web2 API providers could deploy their serverless APIs on decentralized runtime (dRuntime). Each miner could run all the serverless Web2 APIs.
                </p>
                    <br></br>
                     <img
                        className="article-img"
                        src={ss3}
                        style={{width:'500px'}}
                    />
                </div>
            </div>
            <div className='Overview article'  style={{zIndex:3}} >
                <div className='article_child'>
                <h1>Trustful APIs</h1>
                    <br></br>
                             <img
                        className="article-img"
                        src={lx}
                        style={{width:'900px'}}
                    />
                </div>
            </div>
             <div className='Overview article'  style={{zIndex:3}} >
                <div className='article_child'>
                <h1 id='demo' name='demo'>Usecase</h1>
                    {/*<p style={{textAlign:'center'}}>dRuntime is the decentralized environment to run dAPIs on decentralized computation nodes (Miners).*/}
                    {/*</p>*/}
                    {/*<br/>*/}
                    {/*         <img*/}
                    {/*    className="article-img"*/}
                    {/*    src={dapi}*/}
                    {/*    style={{width:'500px'}}*/}
                    {/*/><br/>*/}
                 <p style={{textAlign:'center', marginTop:'5vh'}}>Blockchain oracles with trustful off-chain computation are the future of Web3 to involve rich functionalities.</p>
                 <div className='usecase'>
                     <div className='page-content'>
                         <div className='card2'>
                            <div className='content'>
                                <h2 className='title'>Digital Avatar</h2>
                                <p className='copy'>
                                    Avatar is your alter ego living in the decentralized world. Let us spare you the rocket knowledge to build one. We introduce dAPIs to create a metaverse image for you to meet with friends or co-workers.
                                </p>
                                <button className='btn' onClick={()=>{window.open('https://www.saas3.io/demo_dp', '_blank')}}>Try</button>
                            </div>
                         </div>
                          <div className='card2'>
                            <div className='content'>
                                <h2 className='title'>Game Bot</h2>
                                <p className='copy'>
                                    Thanks to reinforcement learning, our dAPIs equip developers with ever-brainier bots. Familiarize bots with game mechanisms and economic regimes to enrich the gaming experience. Build best GameFi experiences.
                                </p>
                                <button className='btn' onClick={()=>{window.open('https://www.saas3.io/demo_pve', '_blank')}}>Try</button>
                            </div>
                         </div>
                          <div className='card2'>
                            <div className='content'>
                                <h2 className='title'>NFT Generation</h2>
                                <p className='copy'>
                                    Our dAPIs help you demystify engineering a fleet of NFTs.  Developers can grab a handy API to kick-start and fast-track their work. Create, customize, and assemble your digital collectibles.
                                </p>
                                <button className='btn' onClick={()=>{window.open('https://www.saas3.io/demo_ainft', '_blank')}}>Try</button>
                            </div>
                         </div>
                          <div className='card2'>
                            <div className='content'>
                                <h2 className='title'>dQuant for DeFi</h2>
                                <p className='copy'>
                                    Navigate quantitative trading with ease. Harness the latest algorithms developed by AI whizzes. Enabled by deep learning, our dAPIs are your go-to cash cow.
                                </p>
                                <button className='btn' onClick={()=>{window.open('https://www.saas3.io/demo_defi', '_blank')}}>Try</button>
                            </div>
                         </div>
                         <div className='card2'>
                            <div className='content'>
                                <h2 className='title'>NFT Crossverse</h2>
                                <p className='copy'>
                                    Crossverse: Topple down boundaries between metaverse realms. Give every NFT a ready-made character in all virtual worlds. Use dAPI to switch between your decentralized identities seamlessly.
                                </p>
                                {/*<button className='btn' onClick={()=>{window.open('https://www.saas3.io/demo_defi', '_blank')}}>Try</button>*/}
                            </div>
                         </div>
                     </div>
                 </div>
                </div>
            </div>
            <div className='Overview article'  style={{zIndex:3}} >
                <div className='article_child'>
                <h1>Tokenomics</h1>
                <p>
                SAAS is the utility token for governance and value store.
Web2 API creators earn royalty fees by deploy a serverless API on the dRuntime to serve Dapps.
Dapps (Smart Contracts) pay royalty fees and Gas fees to access APIs.
Miners (Computation nodes) earn Gas fees in executing the APIs.
Token Stakers profit from APIs royalty fees by staking to APIs to back their quality security (DPoS).
                </p>
                <div>
                <img
                    className="article-img"
                    src={roles}
                    style={{width:'500px'}}
                /></div>
                {/*<div style={{height:interval_height}} />*/}
                </div>
            </div>

            <div className='Overview article'  style={{zIndex:3}} >
                <div className='article_child'>
                <h1>Partners</h1>
                    <img className={'article-image'} src={partner}></img>
                {/*<div style={{height:interval_height}} />*/}

           <footer>
                <div style={{position:'absolute', bottom:'10vh', width:'calc(100% - 96px)'}}>
                <ContactBar/>
                <a href="https://goo.gl/maps/L4vicaLurYULHQ8Z6" target={'_blank'}>
                    <img style={{width:'1rem', marginLeft:'1em'}} src={icon_location}/>
                    71 Nanyang Dr, NTU Innovation Center, Singapore 638075
                </a>
                </div>
            </footer>
                </div>
            </div>

        </div>
    );
}

export default App;
