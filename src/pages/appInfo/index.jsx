import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import 'highlight.js/styles/ocean.css';
import { IconArrowLeft } from '@douyinfe/semi-icons';
import { Toast } from '@douyinfe/semi-ui';
import BaseLayout from '../../components/layout/BaseLayout';
import { getMarketInfo } from '../../api/marketplace';
import marketPlaceTitle from '@/static/img/marketplace/marketplace-title.png';
import Desc from './Desc';
import EndPoint from './EndPoint';
import DemoCode from './DemoCode';
import { StyledAppInfoWrap } from './styled';

function ApiInfo() {
  const params = useParams();
  const nav = useNavigate();
  const [info, setInfo] = useState({});

  useEffect(() => {
    const getInfo = async () => {
      try {
        const res = await getMarketInfo({
          id: params.id,
        });
        res.data.triggers = JSON.parse(res.data.triggers);
        setInfo(res.data);
      } catch (error) {
        Toast.error(error.msg);
      }
    };
    getInfo();
  }, [params]);

  return (
    <BaseLayout className="app-info">
      <StyledAppInfoWrap className="app-info-wrap">
        <div className="container">
          <div className="app-info__title flex items-center">
            <IconArrowLeft
              className="cursor-pointer text-2xl hover:text-primary"
              onClick={() => nav(-1)}
            />
            <div className="img-wrap inline-block ml-16px">
              <img src={marketPlaceTitle} alt="marketplace" />
            </div>
          </div>
          <div className="app-info__desc flex md:flex-wrap">
            <Desc info={info} />
            <EndPoint info={info} />
          </div>
          <DemoCode info={info} />
        </div>
      </StyledAppInfoWrap>
    </BaseLayout>
  );
}

export default ApiInfo;
