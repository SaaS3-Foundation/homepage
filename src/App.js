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

import image2 from './static/img-2021-10-20-12-45-57-884617.png'



export const white_paper_link = "https://www.deainet.io/file/Whitepaper.pdf"

const dev_mode = true; 
// controls whether the opening screen should show.


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

                    <div hidden={clicked} className="App-link" href="https://mythrillfiction.com/" target="_blank" >
                        Real Decentralized AI
                    </div>
                </div>

                <div className="App-contact-positioner">
                    <ContactBar className={`App-contact ${clicked?"contact_clicked":""}`}/>
                </div>
            </div>

            <header className="App-header">
                <img
                    src={logo}
                    className="App-header-logo"
                    onClick={()=>{setClicled(false)}}
                />
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
                    From Issi, he marched a single
                    stage—five parasangs—to the gates
                    of Cilicia and Syria. 
                    This was a double fortress: 
                    the inner and nearer one, which 
                    protects Cilicia, 
                    was held by Syennesis and a 
                    garrison of Cilicians; the outer
                    and further one, protecting 
                    Syria, was reported to be 
                    garrisoned by a body of the 
                    king's troops.
                </p>

                <Space
                    direction='horizontal'
                    style={{paddingTop: 20}}
                >
                    <img
                        width='100%'
                        className="article-img"
                        src="https://cd-1302933783.cos.ap-guangzhou.myqcloud.com/img-2021-12-04-17-33-09-055393.jpg"
                    />
                    <img
                        className="article-img"
                        src="https://cd-1302933783.cos.ap-guangzhou.myqcloud.com/img-2021-12-04-17-33-09-055393.jpg"
                    />
                </Space>

                <div style={{height:20}} />

                <h2>Section 1</h2>

                <p>
                    From Issi, he marched a single
                    stage—five parasangs—to the gates
                    of Cilicia and Syria. 
                    This was a double fortress: 
                    the inner and nearer one, which 
                    protects Cilicia, 
                    was held by Syennesis and a 
                    garrison of Cilicians; the outer
                    and further one, protecting 
                    Syria, was reported to be 
                    garrisoned by a body of the 
                    king's troops.
                </p>


                <h2>Section 2</h2>

                <h3>Section 2.1</h3>

                <p>
                    From Issi, he marched a single
                    stage—five parasangs—to the gates
                    of Cilicia and Syria. 
                    This was <span style={{color:'#92b9fd'}}>a double fortress: </span>
                    the inner and nearer one, which 
                    protects Cilicia, 
                    was held by Syennesis and a 
                    garrison of Cilicians; the outer
                    and further one, protecting 
                    Syria, was reported to be 
                    garrisoned by a body of the 
                    king's troops.
                </p>

                <h3>Section 2.2</h3>

                <p>
                    From Issi, he marched a single
                    stage—five parasangs—to the gates
                    of Cilicia and Syria. 
                    This was a double fortress: 
                    the inner and nearer one, which 
                    protects Cilicia, 
                    was held by Syennesis and a 
                    garrison of Cilicians; the outer
                    and further one, protecting 
                    Syria, was reported to be 
                    garrisoned by a body of <a href="www.tea-break.cn">this link</a>.
                </p>

                <h2>Section 3</h2>

                <p>
                    If you want to use bullet points, 
                    you should use ul and li labels
                </p>

                <ul >
                    <li>Hahahaha</li>
                    <ul >
                        <li>Hahahaha</li>
                        <li>Hahahaha</li>
                    </ul>
                    <li>Hahahaha</li>
                    <li>Hahahaha</li>
                    <li>Hahahaha</li>
                </ul>

                <h2>Section 4</h2>

                <p>
                    By the way,
                    a line break<br/>
                    is a br lable
                </p>

                <div>
                    <img className="article-img" src={image2}></img>
                </div>

                <div style={{height:20}}></div>

                <p>You can smallen the image:</p>

                <div className='col'>
                    <img className="article-img" style={{width: 100}} src={image2}></img>
                </div>

                <div style={{height:20}}></div>

                <p>You can center the image:</p>

                <div className='col' style={{alignItems:'center'}}>
                    <img className="article-img" style={{width: 100}} src={image2}></img>
                </div>


            </div>

            <footer>
                <ContactBar/>
            </footer>
           
        </div>
    );
}

export default App;
