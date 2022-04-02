import React from "react";
import { Button, Dropdown, Menu, message, Steps } from 'antd';
import logo from '../../logo.png';
import { goToOverview, goToDemo, pichdeck_link, white_paper_link } from "../../App";
import './AppHeader.css'
import { isMobile } from "../../utils/platform";
import { MenuOutlined } from '@ant-design/icons'

const { SubMenu } = Menu;

const AppHeader = ({setClicled, tab, setTab}) => {

    const _menu = (
        <>
            <button
                className={`App-menu-item${tab==="overview"?"__selected":""}`}
                onClick={goToOverview}
            >Overview</button>
            <button
                className='App-menu-item'
                onClick={goToDemo}
            >Usecase/Demo</button>
            <button className="App-menu-item" onClick={()=>{window.open(pichdeck_link)}}>Pitch Deck</button>
            <button className="App-menu-item" onClick={()=>{window.open(white_paper_link)}}>White Paper</button>
            <Dropdown
                overlay={
                    <div className="App-menu-dropdown">
                        <button className="App-menu-item" onClick={()=>{message.info("Comming Soon")}}>API NFT</button>
                        <button className="App-menu-item" onClick={()=>{window.location.href='/non-api-nft/'}}>non-API NFT (Demo)</button>
                    </div>
                }
                
            >
                <button className="App-menu-item">iNFT</button>
            </Dropdown>
            <button className="App-menu-item" onClick={()=>{message.info("Comming Soon")}}>Document</button>
            
            <button className="App-menu-item" onClick={()=>{message.info("Comming Soon")}}>Miners</button>
            <button className="App-menu-item" onClick={()=>{message.info("Comming Soon")}}>Creators</button>
            <button className="App-menu-item" onClick={()=>{message.info("Comming Soon")}}>AI Users</button>
        </>
    )

    const mobile_menu = (
        <Menu>
            <Menu.Item onClick={goToOverview}>Overview</Menu.Item>
            <Menu.Item onClick={()=>{window.alert('Please send email to contact@saas3.io')}}>White Paper</Menu.Item>
            <SubMenu title="API NFT">
                <Menu.Item onClick={()=>{message.info("Comming Soon")}}>API NFT</Menu.Item>
                <Menu.Item onClick={()=>{window.location.href='/non-api-nft/'}}>non-API NFT (Demo)</Menu.Item>
            </SubMenu>
            <Menu.Item onClick={()=>{message.info("Comming Soon")}}>Document</Menu.Item>
            <Menu.Item onClick={()=>{message.info("Comming Soon")}}>Miners</Menu.Item>
            <Menu.Item onClick={()=>{message.info("Comming Soon")}}>Creators</Menu.Item>
            <Menu.Item onClick={()=>{message.info("Comming Soon")}}>Users</Menu.Item>
        </Menu>
    )

    const [ opened, setOpened ] = React.useState()


    return (
        <header className={`App-header ${isMobile()?'mobile':''}`}>
            <img
                src={logo}
                className="App-header-logo"
                onClick={()=>{if(setClicled)setClicled(false)}}
            />
            <div className="App-menu">
                {isMobile()?(
                    <Dropdown
                        visible={opened}
                        overlay={mobile_menu}
                        onVisibleChange={(v)=>{if(!v)setOpened(false)}}
                    >
                        <Button onClick={()=>{setOpened(true)}}>
                            <MenuOutlined/>
                        </Button>
                    </Dropdown>
                ):(
                    _menu
                )}
                
                
            </div>
        </header>
    )
}

export default AppHeader