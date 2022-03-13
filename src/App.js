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
import { isChrome } from './utils/platform';

export const white_paper_link = "https://www.saas3.io/file/PitchDeck_SaaS3.pdf"
export const pichdeck_link = "https://www.saas3.io/file/PitchDeck_SaaS3.pdf"
const interval_height = '12rem'

const dev_mode = false;
// const dev_mode = true;
// controls whether the opening screen should show.

export const goToOverview = () => {
    let el = document.getElementById('overview');
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
                        <h1 className="graph-title-shadow"style={{zIndex:-1,bottom:'auto'}}> Delivers a Web3.0 SaaS Solution </h1>
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
                <h1 id='overview'>Background</h1>
                <div>
                <p>
                    Artificial Intelligence (AI) blooms in recent years and has achieved milestone techniques eg, identity recognition, driverless car, robotics. So artificial intelligence APIs are essential for those products.
                    However, almost everything is powered by centralized institutes, BAD THINGS HAPPEN!
                    Several issues are raised such as malicious single node, AI security and privacy leakage.
                </p></div>
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
                </div>
                {/*<div style={{height:interval_height}} />*/}
            </div>

            <div className='Overview article'  style={{zIndex:3}} >
                <div className='article_child'>
                <h1>SaaS3 Passion & Goal</h1>
                <p>
                   Using blockchain technology to construct a decentralized network to provide AaaS
                    (AI as a Service) for App/Dapp developers to replace centralized API providers such
                    as <a href="https://docs.microsoft.com/en-us/rest/api/azureml/" target='_blank'>
                    Microsoft Azure</a> and <a href="https://cloud.google.com/products/ai" target='_blank'>
                    Google AI</a>.
                    The core team members are top Ph.Ds in computer science who are technical and
                    experienced. We devote to build a decentralized SaaS platform to combine millions
                    of users, computational power providers with API inventors in such a harmony way for
                    offering extremely low costing and privacy preserving services in Web3.0 era. SaaS3 aims to
                    become the world largest decentralized SaaS platform to provide high-quality API
                    services with extremely cheap prices.
                </p>
                {/*<div style={{height:interval_height}} />*/}
                </div>
            </div>
            <div className='Overview article'  style={{zIndex:3}} >
                <div className='article_child'>
                <h1>Who are SaaS3 Users</h1>
                <p>
                SaaS3 users are the developers who require AI services for their products. In SaaS3, we define decentralized API (DeAPI) to replace centralized API. All DeAPIs are deployed on dRuntime in a distributed way to provide decentralized AI services. user can send a decentralized request (DeRequest) to a DeAPI to get a decentralized response (DeResponse). The reliable miners in dRuntime execute all DeAPIs in 7x24 with DPoS consensus.
                </p>
                </div>
            </div>
                {/*<div style={{height:interval_height}} />*/}
            <div className='Overview article'  style={{zIndex:3}} >
                <div className='article_child'>
                <h1>dRuntime has Following Rich Properties</h1>
                    {/*<div style={{'display'}}>*/}
                <div className='list_positioner'>
                    <div className='list'>
                        
                        <div><div>1</div>Protect the privacy for users by executing encryption protocol transparently.</div>
                        <div><div>2</div>Improve the security for system by miners consensus.</div>
                        <div><div>3</div>Strengthen robustness for services by DeAPI runtime redundancy of miners.</div>
                        <div><div>4</div>Save energy and reduce the service cost by making use of spare resource to mine.</div>
                        <div><div>5</div>Protect intellectual properties by patent-NFTs.</div>
                    </div>
                </div>
                {/*<div style={{height:interval_height}} />*/}
                </div>
            </div>
            <div className='Overview article'  style={{zIndex:3}} >
                <div className='article_child'>
                <h1>SaaS3 Protocol</h1>
                <p>
                  dRuntime is Constructed by SaaS3 Protocol with  Token SAAS for Governance. The Protocol is Applied on Four Roles:
                </p>
                <div>
                <img
                    className="article-img"
                    src={roles}
                /></div>
                {/*<div style={{height:interval_height}} />*/}
                </div>
            </div>
            <div className='Overview article'  style={{zIndex:3}} >
                <div className='article_child'>
                <h1>Algorithm NFT & Marketplace</h1>
                <p>
                Once a DeAPI is accepted to deploy, a unique tradeable patent-NFT is minted and sent to the inventor address as a digital patent. Whenever users pay SAAS to access this DeAPI, 5% SAAS is paid as patent fee to the patent-NFT holder while another 95% to miners. So inventors earn patent fee by holding the NFT or selling it on the marketplace to earn SAAS.
                    Algorithm NFT can be either a practical DeAPI or a famous piece of code e.g.,
                    <div className="code">
                        >> print ("Hello World")
                    </div>
                    Based on such an ecosystem, patent-NFT store is expected to be the largest marketplace to trade digital patents in the world.
                </p>
                {/*                <p>*/}
                {/*                Users pay SAAS to access DeAPI. dRuntime will periodically generate certain amount of new $SAAS tokens and half of them will reward to the most active users. Another half tokens distrbute to a random Ethereum address as an airdrop to maximize the token distribution. After 4 years, no more SAAS is generated.*/}
                {/*                </p><p>*/}
                {/*        Miners earn 95% users’ paid SAAS to execute DeAPI on their hardwares. Each miner can run all kinds of DeAPIs to satisfy any kind of DeRequest. The redundancy exactly achieves the decentralization and reliability of dRuntime.*/}
                {/*            </p><p>*/}
                {/*Inventors earn 5% users’ paid $SAAS as patent fee aside with miners, since they are AI researchers or developers who invent and create new DeAPIs.*/}
                {/*            </p><p>*/}
                {/*SAAS Stakers earn a proportion of $SAAS from miners’ profit by staking SAAS to miners for DPoS (Delegation PoS) consensus*/}
                {/*            </p>*/}
                {/*<div style={{height:interval_height}} />*/}
                </div>
            </div>
            <div className='Overview article'  style={{zIndex:3}} >
                <div className='article_child'>
                <h1>Partners</h1>
                    <img className={'article-image'} src={partner}></img>
                {/*<div style={{height:interval_height}} />*/}
                </div>
            </div>

            <div className='Overview article'  style={{zIndex:3}} >
                <div className='article_child'>
                {/*<h1>Our Team</h1>*/}
                {/*    <img className='article-image' src={team}></img>*/}

           {/*<footer>*/}
                <div style={{marginTop:'5vh'}}>
                <ContactBar/>
                <a href="https://goo.gl/maps/L4vicaLurYULHQ8Z6" target={'_blank'}>
                    <img style={{width:'1rem', marginLeft:'1em'}} src={icon_location}/>
                    71 Nanyang Dr, NTU Innovation Center, Singapore 638075
                </a>
                </div>

                </div>
            {/*</footer>*/}
            </div>

        </div>
    );
}

export default App;
