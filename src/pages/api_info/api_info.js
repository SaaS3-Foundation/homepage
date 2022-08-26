import React from 'react';
import AppHeader from '../../components/app_header/AppHeader';
import { isChrome } from '../../utils/platform';
import { useParams } from 'react-router-dom';
import ContactBar from '../../components/contact/contact';
import icon_location from '../../static/icon_location.png'
import axios from 'axios';
// controls whether the opening screen should show.
import './api_info.css';
import logo from '../../SaaS3Logo.png';
import { useState } from 'react';
import config from '../../config.json';
import Highlight  from 'react-highlight';
import "highlight.js/styles/ocean.css";
// const dev_mode = false;
const dev_mode = true;

function ApiInfo() {
    const params = useParams()  
    const [data, setData] = useState({
        "code": 200,
        "msg": "OK",
        "data": {
          "id": "",
          "title": " ",
          "description": "description",
          "creator": "creator",
          "tags": ["tag1", "tag2"],
          "demo": "demo code\ndemo code line 2",
          "requester": "requester contract code"
        }
      });
    
    let url = config.marketplace_address.concat('/saas3/dapi/detail?id=').concat(params['id']);
    React.useEffect(()=>{
      axios.get(url)
      .then(function (response) {
        response['data']['data']['triggers'] = JSON.parse(response['data']['data']['triggers']);
        setData(response['data']);
        return response;
      })
      .catch(function (error) {
        console.log(error);
        return error;
      })}
    ,[]);

    const is_chrome = isChrome();

    const [ clicked, setClicled ] = React.useState(dev_mode);

    const [ tab, setTab ] = React.useState("marketplace");

    return (
        <div>
            <AppHeader
                setClicled={setClicled}
                tab={tab}
                setTab={setTab}
            />
            <div className={'apiinfo'} style={{"display":"grid"}}>
            <div className='article'  style={{zIndex:3}} >
                

                <div className='article_child'>

                <div className='titlediv'>
                    <h1>                
                        {/* <img
                        src={logo}
                        className="App-header-logo"
                        />  */}
                    {data.data.title}</h1>
                    <p style={{textAlign: 'center'}}> Created By <span style={{color: '#eb2f96'}}>{data.data.creator}</span></p>
                </div>

                <div className='Overview'>
                <h2>Overview</h2>
                <p>
                {data.data.description}
                </p>
                
                <p>
                    {data.data.tags?.length>0 && data.data.tags.map((tag, tag_index)=>{
                            return <div index={tag_index} style={{color:'white', fontSize:'1px',padding:'1px'}}>{tag}</div>
                           })
                           }</p>
                </div>

                <div className='Overview'>
                <h2>Endpoint</h2>
                <p>
                Title : {data.data.triggers?.http[0].endpointId} <br/>
                Name : {data.data.triggers?.http[0].endpointName}<br/>
                id : {data.data.triggers?.http[0].oisTitle}
                </p>
                </div>
                <div className='demo_code'>
                <h2>DEMO Code</h2>
                <Highlight>
                {data.data.demo}
                </Highlight>
                </div>
                </div>
            </div>
            </div>

            <div className='Overview article'  style={{zIndex:3, "display":"flex"}} >
            <footer>
                <div>
                <ContactBar/>
                <a href="https://goo.gl/maps/L4vicaLurYULHQ8Z6" target={'_blank'}>
                    <img style={{width:'1rem', marginLeft:'1em'}} src={icon_location}/>
                    71 Nanyang Dr, NTU Innovation Center, Singapore 638075
                </a>
                </div>
            </footer>
            </div>
        </div>
    );
}

export default ApiInfo;
