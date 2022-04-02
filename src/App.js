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

export const white_paper_link = ""
export const pichdeck_link = ""
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
                        <h1 className="graph-title-shadow"style={{zIndex:-1,bottom:'auto'}}> Software as a Service in Web3 </h1>
                        <h1 className="graph-title" style={{zIndex:2}}> Software as a Service in Web3 </h1>
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
                <h1 id='overview'>Web3 vs Web2</h1>
                <div>
                <p>
                    Few Web3 Dapps regardless of rich abundant SaaS in Web2. For decentralized applications to acquire full-fledged functionalities, Web3 calls for an entirely different development stack than employed in web2. Existing blockchain layer2 virtual machines lack effective computational capabilities, making it a financial and technical challenge to deliver rich computation services. The layer2 scaling for not only high-priced Gas fees but the technical development stack is urgent.
                </p></div>
                <div className='images'>
                    <div>
                    <img
                        className="article-img"
                        src={problemimg1}
                    /></div>
                </div>
                </div>
                {/*<div style={{height:interval_height}} />*/}
            </div>

            <div className='Overview article'  style={{zIndex:3}} >
                <div className='article_child'>
                <h1>Layer2 Trilemma</h1>
                    <p>Decentralization, Scalability and Partition tolerance. SaaS3 approaches the trilemma with layerX protocol and delivers a solution for the next generation Dapps. </p>
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
                <h1>Software as a Service in Web3</h1>
                <p>
                    SaaS3 establishes a platform for the next generation of Dapps, or ‘Dapp2.0’, to expand and deliver. SaaS3 revolutionizes the traditional Dapp development architecture with layerX / dAPIs, which goes beyond the established blockchain layer2. It employs the decentralized docker runtime (dRuntime) to address the poor compatibility for WASM / EVM. Traditional Dapp has three parts, whereas Dapp2 architecture has four components, namely Layer2, Frontend, LayerX, and Oracles.
                </p>
                    <br></br>
                     <img
                        className="article-img"
                        src={ss3}
                        style={{width:'800px'}}
                    />
                </div>
            </div>
            <div className='Overview article'  style={{zIndex:3}} >
                <div className='article_child'>
                <h1>LayerX</h1>
                    <p>LayerX allows developers to monetize abundant Web2 APIs as decentralized Web3 ‘dAPIs’ in only 10 minutes with docker containers. On LayerX, all Web2 APIs could be dockerized in containers and rapidly deployed in a decentralized miner network, or decentralized docker runtime (dRuntime). By minting income-NFTs (iNFT) with their created dAPIs, API developers claim full entitlements to API-derived income earned in tokens. Holders of iNFTs and providers of computing resources (Miners) share profits from users’ payments, making ‘middleman’ a thing of the past.
</p>
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
                <h1 id='demo'>dAPI, dRuntime, and Usecase</h1>
                    <p style={{textAlign:'center'}}>dRuntime is the decentralized environment to run dAPIs on decentralized computation nodes (Miners)
                    </p>
                    <br></br>
                             <img
                        className="article-img"
                        src={dapi}
                        style={{width:'500px'}}
                    />
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
                                <h2 className='title'>Digital Avatar</h2>
                                <p className='copy'>
                                    Avatar is your alter ego living in the decentralized world. Let us spare you the rocket knowledge to build one. We introduce dAPIs to create a metaverse image for you to meet with friends or co-workers.
                                </p>
                                <button className='btn' onClick={()=>{window.open('https://www.saas3.io/demo_dp', '_blank')}}>Try</button>
                            </div>
                         </div>
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
                                <h2 className='title'>Digital Avatar</h2>
                                <p className='copy'>
                                    Avatar is your alter ego living in the decentralized world. Let us spare you the rocket knowledge to build one. We introduce dAPIs to create a metaverse image for you to meet with friends or co-workers.
                                </p>
                                <button className='btn' onClick={()=>{window.open('https://www.saas3.io/demo_dp', '_blank')}}>Try</button>
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
                    SA3 is the utility token in SaaS3 with the following use cases. API creators earn SA3 as royalty fees by creating a docker container and deploying it on the dRuntime. When deploying the dAPI, its creator may mint a unique tradable income-NFT (iNFT). The iNFT entitles its owner to a share of usage fee paid by dAPI user. dAPI users / Dapp developers pay $SA3 to API creators and miners as both usage fee and Gas fee. Miners (Computation nodes) earn Gas fees in executing the dAPI and maintaining dRuntime on their hardware. A miner can deploy any docker images. The mechanism of dAPI service offering redundancy delivers dRuntime to fully decentralize computation for SaaS3. Miner stakes and receives tasks based on zero-knowledge proof. LPoS and zk-proof guarantee the dRuntime consistency and security.
                    Token Stakers profit from dAPI income by staking SA3 to high-quality dAPIs with DPoS (Delegated Poof-of-Stake).
                </p>
                <div>
                <img
                    className="article-img"
                    src={roles}
                    style={{width:'600px'}}
                /></div>
                {/*<div style={{height:interval_height}} />*/}
                </div>
            </div>
            <div className='Overview article'  style={{zIndex:3}} >
                <div className='article_child'>
                <h1>Portraits</h1>
                <p>
                </p>
                <div>
                <img
                    className="article-img"
                    src={portait}
                    style={{width:'1000px'}}
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
