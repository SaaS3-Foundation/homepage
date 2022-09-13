import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { message } from 'antd';
import './index.less';
import { useState } from 'react';
import 'highlight.js/styles/ocean.css';
import BaseLayout from '../../components/comm/layout/BaseLayout';
import { getMarketInfo } from '../../api/marketplace';
import marketPlaceTitle from '../../static/img/marketplace/marketplace-title.png';
import Desc from './Desc';
import EndPoint from './EndPoint';
import DemoCode from './DemoCode';
import { ArrowLeftOutlined } from '@ant-design/icons';

function ApiInfo() {
  const params = useParams();
  const nav = useNavigate();
  const [info, setInfo] = useState({});

  React.useEffect(() => {
    const getInfo = async () => {
      try {
        const res = await getMarketInfo({
          id: params.id
        });
        res.data.triggers = JSON.parse(res.data.triggers);
        setInfo(res.data);
      } catch (error) {
        message.error(error.msg);
      }
    };
    getInfo();
  }, [params]);

  return (
    <BaseLayout className='app-info'>
      <div className='app-info-wrap'>
        <div className='container'>
          <div className='app-info__title flex items-center'>
            <ArrowLeftOutlined
              className='cursor-pointer text-2xl hover:text-primary'
              onClick={() => nav(-1)}
            />
            <div className='img-wrap inline-block ml-16px'>
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
