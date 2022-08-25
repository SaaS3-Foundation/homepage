import React from "react";
import { Button, Dropdown, Menu, message, Steps } from 'antd';
import logo from '../../SaaS3Logo.png';
import { goToOverview, goToDemo, pichdeck_link, white_paper_link } from "../../App";
import './AppHeader.css'
import { isMobile } from "../../utils/platform";
import { MenuOutlined } from '@ant-design/icons'

const { SubMenu } = Menu;
export const Launchpad='https://app.saas3.io';

const AppHeader = ({setClicled, tab, setTab}) => {

    const _menu = (
        <>
            <button className={`App-menu-item${tab=="overview"?"__selected":""}`} onClick={()=>{window.location.href='/';}}>Overview</button>
            <button className="App-menu-item" onClick={()=>{window.open(white_paper_link, '_blank');}}>Whitepaper</button>
            <button className={`App-menu-item${tab=="marketplace"?"__selected":""}`} onClick={()=>{window.location.href='/marketplace';}}>Marketplace</button>
            <button className="App-menu-item" onClick={()=>{window.open(Launchpad, '_blank')}}>Oracle Launchpad</button>
            <button className="App-menu-item" onClick={()=>{window.open('https://airdrop.saas3.io', '_blank')}}>Airdrop</button>
            <button className="App-menu-item" onClick={()=>{window.open('https://docs.saas3.io', '_blank')}}>Documents</button> 
        </>
    )

    const mobile_menu = (
        <Menu>
            <Menu.Item onClick={()=>{window.location.href='/';}}>Overview</Menu.Item>
            <Menu.Item onClick={()=>{window.open(white_paper_link, '_blank');}}>Whitepaper</Menu.Item>
            <Menu.Item onClick={()=>{window.location.href='/marketplace';}}>Marketplace</Menu.Item>
            <Menu.Item onClick={()=>{window.open(Launchpad, '_blank')}}>Oracle Launchpad</Menu.Item>
            <Menu.Item onClick={()=>{window.open('https://airdrop.saas3.io', '_blank')}}>Airdrop</Menu.Item>
            <Menu.Item onClick={()=>{window.open('https://docs.saas3.io', '_blank')}}>Documents</Menu.Item>
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