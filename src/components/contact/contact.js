import React from 'react'
import {
    MailOutlined,
    TwitterOutlined,
    SendOutlined,
    GithubOutlined,
} from '@ant-design/icons'

import './contact.css'
import { Space } from 'antd'
import {white_paper_link} from "../../App";
export const twitter_link = "https://twitter.com/DeAINetOfficial"
export const telegram_link = "https://t.me/deainet"
export const github_link = "https://github.com/DeAINet"

const ContactBar = ({className}) => {
    return (
        <Space className={`contact-bar ${className}`} size="large" >

            <div className="contact-unfold">
                <MailOutlined className="contact-icon"/>
                <div className="contact-unfold-text" onClick={()=>{window.open("mailto:contact@deainet.io")}}>contact@deainet.io</div>
            </div>

            
            <div className="contact-unfold contact-unfold-short">
                <TwitterOutlined className="contact-icon"/>
                <div className="contact-unfold-text" onClick={()=>{window.open(twitter_link)}}>@DeAINet</div>
            </div>

            <div className="contact-unfold contact-unfold-short">
                <SendOutlined className="contact-icon" style={{fontSize:24,paddingTop:2}}/>
                <div className="contact-unfold-text" onClick={()=>{window.open(telegram_link)}}>https://t.me/deainet</div>
            </div>

            <div className="contact-unfold">
                <GithubOutlined className="contact-icon" style={{fontSize:24,paddingTop:2}}/>
                <div className="contact-unfold-text" onClick={()=>{window.open(github_link)}}>https://github.com/DeAINet</div>
            </div>

            

        </Space>
    )
}

export default ContactBar