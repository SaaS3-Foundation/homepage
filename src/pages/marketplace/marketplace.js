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
import {
    TwitterOutlined,
} from '@ant-design/icons'
import { getMarketplaceList, missionAction } from '../../api/marketplace';
import { message } from 'antd';
// const dev_mode = false;
const dev_mode = true;
// controls whether the opening screen should show.
function Marketplace(props) {
    const [marketplaceList, setMarketplaceList] = useState([]);
    const is_chrome = isChrome();

    const [clicked, setClicled] = React.useState(dev_mode);

    const [tab, setTab] = React.useState("marketplace");

    React.useEffect(() => {
        getMarketplaceList({
            page: 1,
            size: 20,
        }).then(res => {
            setMarketplaceList(res.data.list);
            console.log(res.data.list);
        }).catch(err => {
            message.error(err.message || err.msg);
        })

        // console.log('kk');
        // axios.get(config.marketplace_address.concat('/saas3/dapi/list?page=1&size=20'))
        //     .then(function (response) {
        //         setData(response['data']);
        //         return response;
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //         return error;
        //     })
    }, []);

    function toTwitter(event, card) {
        event.stopPropagation();
        const url = `http://airdrop.saas3.io/`;
        const content = `I just launched an #ORACLE and got 360 SAAS tokens through this SaaS3 #airdrop! This is so C😎😎L! You can launch one too by clicking this link in your PC`;
        // open to twitter share
        window.open("http://twitter.com/share?url=" + encodeURIComponent(url) +
            "&text=" + encodeURIComponent(content) +
            "&display=popup&ref=plugin&src=share_button");
        if (card.creatorAddress) {
            missionAction({
                mid: 'create_dapi_and_share_tweet',
                address: card.creatorAddress,
                type: 'clicked'
            }).then(res => {
            })
        }
    }


    // let data_list = data['data']['list'];


    return (
        <div>

            <AppHeader
                setClicled={setClicled}
                tab={tab}
                setTab={setTab}
            />

            <div className='api-card-positioner' style={{ width: '80%', marginLeft: '10%', padding: '3rem' }}>
                <div style={{
                    "display": "grid",
                    "gridTemplateColumns": "1fr 1fr 1fr 1fr",
                    "height": "max-content",
                    "marginTop": "20px"
                }}>
                    {marketplaceList.map((card, index) => {
                        let target_url = '/api_info/'.concat(card.id);
                        return <div key={index} className="api-card" onClick={() => { window.location.href = target_url }}>
                            <div style={{ "display": "flex", "flexDirection": "column", "justifyContent": "space-between" }}>
                                <h1>{card.title}</h1>
                                <div style={{ textAlign: "center" }}>
                                    <img src={api_logo} style={{ "width": "90%" }} alt="" />
                                </div>
                                <h2>{card.description}</h2>
                                <h3> Created By {card.creator}</h3>
                                <div style={{ display: 'flex', alignItems: "center" }}>
                                    {card.tags?.length > 0 && card.tags?.map((tag, tag_index) => {
                                        return <div style={{ color: 'white', fontSize: '1px', padding: '1px' }}>{tag}</div>
                                    })}
                                    <TwitterOutlined className='tw-icon' onClick={(event) => toTwitter(event, card)} />
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
