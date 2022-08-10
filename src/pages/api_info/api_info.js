import React from 'react';
import AppHeader from '../../components/app_header/AppHeader';
import { isChrome } from '../../utils/platform';
import { useParams } from 'react-router-dom';
import axios from 'axios';
// controls whether the opening screen should show.
import './api_info.css';
// const dev_mode = false;
const dev_mode = true;

function ApiInfo() {
    const params = useParams()  
    let data = {
        "code": 200,
        "msg": "OK",
        "data": {
          "id": "xxid",
          "title": "CoinMarket Request",
          "description": "description: asdfsfygjhkjdtfyghkjdtrfgjhkldrtfghjfghjersdtyghujidtrfyghjkdfghjk",
          "creator": "creator",
          "tags": ["tag1", "tag2"],
          "demo": "demo code\ndemo code line 2",
          "requester": "requester contract code"
        }
      };
    let url = 'http://localhost:3000/saas3/dapi/detail?id='.concat(params['id']);
    console.log('123445',url)
    axios.get(url)
    .then(function (response) {
      console.log(response);
      console.log(response['data']);
      data = response;
      return response;
    })
    .catch(function (error) {
      console.log(error);
      return error;
    });

    const is_chrome = isChrome();

    const [ clicked, setClicled ] = React.useState(dev_mode);

    const [ tab, setTab ] = React.useState("overview");

      
    React.useEffect(()=>{

    },[is_chrome])

    return (
        <div className={`App container y mandatory-scroll-snapping ${!is_chrome?'safari':''}`}>

            <AppHeader
                setClicled={setClicled}
                tab={tab}
                setTab={setTab}
            />
            
            <div className='article'  style={{zIndex:3}} >
                

                <div className='article_child'>
                <h1 id='overview'>{data.data.title}</h1>
                <div>
                <div>
                {data.data.description}
                </div>
                <p style={{float:'right'}}>{data.data.creator}<br/>{data.data.tags}</p>
                <br/>
                <div className='demo_code'>
                <title>DEMO</title>
                {data.data.demo}
                </div>

                </div>

                </div>
            </div>

        </div>
    );
}

export default ApiInfo;
