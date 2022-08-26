import React from 'react';
import AppHeader from '../../components/app_header/AppHeader';
import { isChrome } from '../../utils/platform';
import './marketplace.css';
import '../../App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import axios from 'axios';
import { useState } from 'react';
import config from '../../config.json';
import api_logo from '../../SaaS3Logo.png';

// const dev_mode = false;
const dev_mode = true;
// controls whether the opening screen should show.
function Marketplace() {
    const [data, setData] = useState({
        "data": {
            "size": 20,
            "page": 1,
            "count": 14,
            "list": [{
              "id": "1111111",
              "title": "CoinMarket Request Test",
              "description": "Oracle",
              "creator": "saas3",
              "tags": ["tag1", "tag2"]
            }],
            "total": 1000,
            "all": 5
          },
          "code": 200,
          "msg": "OK"
    });
    const is_chrome = isChrome();

    const [ clicked, setClicled ] = React.useState(dev_mode);

    const [ tab, setTab ] = React.useState("marketplace");

    React.useEffect(()=>{
    
        console.log('kk');
        axios.get(config.marketplace_address.concat('/saas3/dapi/list?page=1&size=20'))
        .then(function (response) {
        setData(response['data']);
        return response;
        })
        .catch(function (error) {
        console.log(error);
        return error;
    })}, []);

    
    let data_list = data['data']['list'];
    
    
    return (
        <div>

            <AppHeader
                setClicled={setClicled}
                tab={tab}
                setTab={setTab}
            />

            <div className='api-card-positioner' style={{width:'80%',  marginLeft: '10%', padding:'3rem'}}>
            <div style={{
                        "display": "grid",
                        "gridTemplateColumns": "1fr 1fr 1fr 1fr",
                        "height":"max-content",
                        "marginTop":"20px"}}>
                            {data_list.length>0 && data_list.map((card, index) => {
                            let target_url = '/api_info/'.concat(card.id);
                            return <div key={index} className="api-card" onClick={()=>{window.location.href=target_url}}>
                                        <div style={{"display":"flex", "flexDirection":"column","justifyContent":"space-between"}}>
                                        <h1>{card.title}</h1>
                                        <div style={{"text-align":"center"}}>
                                        <img src={api_logo} style={{"width":"90%"}}/>
                                        </div>
                                        <h2>{card.description}</h2>
                                        <h3> Created By {card.creator}</h3>
                                            <div style={{display:'flex'}}>
                                                {card.tags?.length>0 && card.tags?.map((tag, tag_index)=>{
                                                return <div style={{color:'white', fontSize:'1px',padding:'1px'}}>{tag}</div>
                                            })}
                                            </div>
                                        </div>
                                    </div>
                            })}
            </div>
            </div>
        </div>
    );
}

export default Marketplace;
