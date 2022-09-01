import {
  MailOutlined,
  TwitterOutlined,
  SendOutlined,
  GithubOutlined,
  HomeOutlined
} from '@ant-design/icons';
import './contact.scss';
import { Space } from 'antd';
export const email_link = 'mailto:contact@saas3.io';
export const twitter_link = 'https://twitter.com/SaaS3Lab';
export const telegram_link = 'https://t.me/layerXnetwork';
export const github_link = 'https://github.com/SaaS3-Foundation';
export const map_link = 'https://goo.gl/maps/L4vicaLurYULHQ8Z6';



const ContactBar = ({ className }) => {

  const contacts = [
    { title: 'contact@saas3.io', href: email_link, icon: <MailOutlined /> },
    { title: '@SaaS3Lab', href: twitter_link, icon: <TwitterOutlined /> },
    { title: '@SaaS3Lab', href: telegram_link, icon: <SendOutlined /> },
    { title: 'SaaS3-Foundation', href: github_link, icon: <GithubOutlined /> },
    { title: 'Singapore', href: map_link, icon: <HomeOutlined /> },
  ];


  function getContactsNode() {
    return contacts.map((con, i) => {
      return <a className='contact-unfold' href={con.href} target="_blank" rel="noreferrer" key={i}>
        {con.icon}
        <div
          className='contact-unfold-text'
        >
          {con.title}
        </div>
      </a>
    })
  }


  return (
    <div className={`contact-bar flex items-center justify-center`}>
      {getContactsNode()}
    </div>
  );
};

export default ContactBar;
