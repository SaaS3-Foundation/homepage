import React from 'react'
import {
    MailOutlined,
    TwitterOutlined,
    SendOutlined,
} from '@ant-design/icons'

import './contact.css'
import { Space } from 'antd'

const ContactBar = ({className}) => {
    return (
        <Space className={`contact-bar ${className}`} size="large" >

            <div className="contact-unfold">
                <MailOutlined className="contact-icon"/>
                <div className="contact-unfold-text">deaichainteam@gmail.com</div>
            </div>

            
            <div className="contact-unfold contact-unfold-short">
                <TwitterOutlined className="contact-icon"/>
                <div className="contact-unfold-text">Twitter @deaichain</div>
            </div>

            <div className="contact-unfold">
                <SendOutlined className="contact-icon" style={{fontSize:24,paddingTop:2}}/>
                <div className="contact-unfold-text">Telegram：deaichain team</div>
            </div>
            

        </Space>
    )
}

export default ContactBar