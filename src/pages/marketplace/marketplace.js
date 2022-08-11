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

    const [ tab, setTab ] = React.useState("overview");

    axios.get(config.marketplace_address.concat('/saas3/dapi/list?page=1&size=20'))
    .then(function (response) {
      setData(response['data']);
      return response;
    })
    .catch(function (error) {
      console.log(error);
      return error;
    });

    
    let data_list = [];
    if (data['data']['list'].length > 4){
        let i =4;
        while (i<data['data']['list'].length){
            let tmp = data['data']['list'].slice(i-4, i);
            i = i+4;
            data_list.push(tmp);
        }
        data_list.push(data['data']['list'].slice(i-4, data['data']['list'].length));
    } else {
        data_list.push(data['data']['list']);
    }
    
    
    return (
        <div>

            <AppHeader
                setClicled={setClicled}
                tab={tab}
                setTab={setTab}
            />

            {/* <Carousel autoPlay interval="5000" transitionTime="5000" infiniteLoop> */}
            <div  className='App-contact-card-positioner' style={{width:'80%',  marginLeft: '10%', padding:'3rem'}}>
            <Carousel
                showArrows={true} //是否展示左右箭头
                showStatus={false} //是否展示右上角状态
                showIndicators={true} // 是否展示指示器
                infiniteLoop={true} //时候循环
                autoPlay={false} //是否自动播放
                interval="7000"
                stopOnHover={true} //  鼠标放上去是否停止播放
                showThumbs={false} // 是否展示轮播缩放展示图
                useKeyboardArrows={false} // 是否使用键盘左右按钮滑动
                swipeable={false} // 是否刷新
                // dynamicHeight={false} //动态高度
                emulateTouch={false} // 是否拖拽滑动
                style = {{width: '100px'}}
                // style={{height:'100vh'}}
            >
                 {data_list.length>0 && data_list.map((item, index) => {
                    return <div key={index} style={{padding:'10%'}}>
                    <div className='grid'>
                    { item.map((card, index1) => {
                        let target_url = '/api_info/'.concat(card.id);
                        return <div>
                        <div  key={index1} 
                        className="full border App-contact-card" 
                        >
                           <h1>{card.title}</h1>
                           <h2>{card.description}</h2>
                           <h3> Created By {card.creator}</h3>
                           <div style={{display:'flex'}}>
                            {card.tags?.length>0 && card.tags?.map((tag, tag_index)=>{
                            return <div style={{color:'white', fontSize:'1px',padding:'1px'}}>{tag}</div>
                           })
                           }</div>
                           <button onClick={()=>{window.location.href=target_url}}
                           >
                            Learn More</button>
                        </div>
                        </div>
                    }
                    )}
                    </div>
                    <p className="legend"></p>
                    </div>
                    })
                }
            </Carousel>
            </div>
            


        </div>
    );
}

export default Marketplace;
