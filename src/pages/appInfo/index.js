import React from 'react';
import { useParams } from 'react-router-dom';
import { message } from 'antd';
import './index.scss';
import { useState } from 'react';
import Highlight from 'react-highlight';
import 'highlight.js/styles/ocean.css';
import BaseLayout from '../../components/comm/layout/BaseLayout';
import { getMarketInfo } from '../../api/marketplace';
import marketPlaceTitle from '../../static/img/marketplace/marketplace-title.png';
import Desc from './Desc';
import EndPoint from './EndPoint';
import DemoCode from './DemoCode';

function ApiInfo() {
  const params = useParams();
  const [info, setInfo] = useState({});

  const getInfo = async () => {
    try {
      const res = await getMarketInfo({
        id: params.id
      });
      res.data.triggers = JSON.parse(res.data.triggers);
      console.log(res.data);
      setInfo(res.data);
    } catch (error) {
      message.error(error.msg);
    }
  };

  // let url = process.env.REACT_APP_BASE_URL.concat('/saas3/dapi/detail?id=').concat(params['id']);

  React.useEffect(() => {
    getInfo();
  }, []);

  return (
    <BaseLayout className='app-info'>
      <div className='app-info-wrap'>
        <div className='container'>
          <div className='app-info__title'>
            <div className='img-wrap inline-block'>
              <img src={marketPlaceTitle} alt='marketplace' />
            </div>
          </div>
          <div className='app-info__desc flex md:flex-wrap'>
            <Desc info={info}></Desc>
            <EndPoint info={info}></EndPoint>
          </div>
          <DemoCode info={info}></DemoCode>
        </div>
      </div>
    </BaseLayout>
  );
}

export default ApiInfo;
