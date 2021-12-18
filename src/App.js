import logo from './logo.png';
import './App.css';
import PipClock from './components/pip_clock/pip_clock';
import ContactBar from './components/contact/contact';
import React from 'react';

import './opening.css'
import './overview.css'
import { message, Steps } from 'antd';
import NetworkGraph from './components/network/network';
import {  } from '@ant-design/icons'

import problemimg1 from './static/intro1.png'
import problemimg2 from './static/intro2.png'
import problemimg3 from './static/intro3.png'
import partner from './static/partner.png'
import team from './static/team.png'
import roles from './static/roles.png'
import icon_location from './static/icon_location.png'
import AppHeader from './components/app_header/AppHeader';



export const white_paper_link = "https://www.deainet.io/file/Whitepaper.pdf"
export const pichdeck_link = "https://www.deainet.io/file/PitchDeck_DeAI.pdf"
const interval_height = '12rem'

const dev_mode = false;
// const dev_mode = false;
// controls whether the opening screen should show.

export const goToOverview = () => {
    let el = document.getElementById('overview');
    if(el){
        el.scrollIntoView({ behavior: 'smooth', block:'center'})
    }
}


function App() {

    const [ clicked, setClicled ] = React.useState(dev_mode);

    const [ tab, setTab ] = React.useState("overview");

    const [ scrollTop, setScrollTop ] = React.useState(0)

    React.useEffect(()=>{
        window.addEventListener('scroll', (event) => {
            let scrollTop = document.scrollingElement.scrollTop;
            setScrollTop(scrollTop)
        });
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
        <div className="App">
            <div hidden={welcome_hidden} className={clicked?"App-opening__clicked":"App-opening"}>
                <div className="App-opening-center">
                    <div class={`${clicked?"card__clicked":"card"}`} onClick={()=>setClicled(true)}>
                        <div className="card-content App-card">
                        <img
                            src={logo}
                            className={`App-logo${clicked?"__clicked":""}`}
                        />
                        <PipClock className="App-pip-clock" />
                        </div>
                    </div>

                    <div hidden={clicked} className="App-link" href="https://mythrillfiction.com/" target="_blank">
                        <h1 className="graph-title-shadow"> Delivers a Web3.0 SaaS Solution </h1>
                        <h1 className="graph-title" style={{zIndex:2}}> Delivers a Web3.0 SaaS Solution </h1>
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

            {/* <div className='sep'>
                <div className='sep-dual'>
                    <div className="sep-dual-left"/>
                    <div className="sep-dual-right"/>
                </div>
            </div> */}
            

            <div className='Overview article'  style={{zIndex:3}} >
                
                {/* id is used only for jummping, do not use on next <h1> if not needed */}
                <h1 id='overview'>Overview</h1>

                <p>
                    Artificial Intelligence (AI) blooms in recent years and has achieved milestone techniques eg, identity recognition, driverless car, robotics. So artificial intelligence APIs are essential for those products.
                    However, almost everything is powered by centralized institutes, BAD THINGS HAPPEN!
                </p>
                <div className='images'>
                    <img
                        className="article-img"
                        src={problemimg1}
                    />
                    <div></div>
                    <img
                        className="article-img"
                        src={problemimg2}
                    />
                    <div></div>
                    <img
                        className="article-img"
                        src={problemimg3}
                    />
                </div>
                <div style={{height:interval_height}} />

                <h1>DeAI Passion & Goal</h1>

                <p>
                   Using blockchain technology to construct a decentralized network to provide AaaS
                    (AI as a Service) for App/Dapp developers to replace centralized API providers such
                    as <a href="https://docs.microsoft.com/en-us/rest/api/azureml/" target='_blank'>
                    Microsoft Azure</a> and <a href="https://cloud.google.com/products/ai" target='_blank'>
                    Google AI</a> and further
                    deliver a fully decentralized SaaS solution for Web3.0.
                </p>
                <div style={{height:interval_height}} />
                <h1>Who is DeAI User</h1>
                <p>
                DeAI users are the developers who require AI services for their products. In DeAI, we define decentralized API (DeAPI) to replace centralized API. All DeAPIs are deployed on DeAINet in a distributed way to provide decentralized AI services. AI user can send a decentralized request (DeRequest) to a DeAPI to get a decentralized response (DeResponse). The reliable miners in DeAINet execute all DeAPIs in 7x24 with DPoS consensus.
                </p>

                <div style={{height:interval_height}} />
                <h1>DeAINet has Following Rich Properties</h1>
                <ul>
                    <li>Protect the privacy for AI users by executing encryption protocol transparently.</li>
                    <li>Improve the security for AI system by miners consensus.</li>
                    <li>Strengthen robustness for AI service by DeAPI runtime redundancy of miners.</li>
                    <li>Save energy and reduce the service cost by making use of spare resource to mine.</li>
                    <li>Protect AI intellectual properties by algorithm NFTs.</li>
                </ul>
                <p>
                </p>
                <div style={{height:interval_height}} />
                <h1>DeAI Protocol</h1>
                <p>
                  DeAINet is Constructed by DeAI Protocol with ERC-20 Token DEAI for Governance. The Protocol is Applied on Four Roles:
                </p>
                <img
                    className="article-img"
                    src={roles}
                />
                <div style={{height:interval_height}} />
                <h1>Algorithm NFT & Marketplace</h1>
                <p>
                Once a DeAPI is accepted to deploy, a unique tradeable algorithm NFT is minted and sent to the inventor address as a digital patent. Whenever users pay ETH to access this DeAPI, 5% ETH is paid as patent fee to the algorithm NFT holder while another 95% to miners. So inventors earn patent fee by holding the NFT or selling it on the marketplace to earn DEAI.
                </p>
                {/*                <p>*/}
                {/*                Users pay ETH to access DeAPI. DeAINet will periodically generate certain amount of new $DEAI tokens and half of them will reward to the most active users. Another half tokens distrbute to a random Ethereum address as an airdrop to maximize the token distribution. After 4 years, no more DEAI is generated.*/}
                {/*                </p><p>*/}
                {/*        Miners earn 95% users’ paid ETH to execute DeAPI on their hardwares. Each miner can run all kinds of DeAPIs to satisfy any kind of DeRequest. The redundancy exactly achieves the decentralization and reliability of DeAINet.*/}
                {/*            </p><p>*/}
                {/*Inventors earn 5% users’ paid $ETH as patent fee aside with miners, since they are AI researchers or developers who invent and create new DeAPIs.*/}
                {/*            </p><p>*/}
                {/*DEAI Stakers earn a proportion of $ETH from miners’ profit by staking DEAI to miners for DPoS (Delegation PoS) consensus*/}
                {/*            </p>*/}
                <div style={{height:interval_height}} />
                <h1>Partners</h1>
                <div>
                    <img style={{width:900,maxWidth:'calc(100vw - 20px)'}} src={partner}></img>
                </div>

                <div style={{height:interval_height}} />
                <h1>Our Team</h1>
                <div>
                    <img style={{width:900,maxWidth:'calc(100vw - 20px)'}} src={team}></img>
                </div>
            </div>
            

                {/*<div style={{height:20}}></div>*/}

                {/*<p>You can smallen the image:</p>*/}

                {/*<div className='col'>*/}
                {/*    <img className="article-img" style={{width: 100}} src={image2}></img>*/}
                {/*</div>*/}

                {/*<div style={{height:20}}></div>*/}

                {/*<p>You can center the image:</p>*/}

                {/*<div className='col' style={{alignItems:'center'}}>*/}
                {/*    <img className="article-img" style={{width: 100}} src={image2}></img>*/}
                {/*</div>*/}
            <footer>
                <ContactBar/>
                <a href="https://goo.gl/maps/L4vicaLurYULHQ8Z6" target={'_blank'}>
                    <img style={{width:'1rem', marginLeft:'1em'}} src={icon_location}/>
                    71 Nanyang Dr, NTU Innovation Center, Singapore 638075
                </a>
            </footer>
           
        </div>
    );
}

export default App;
