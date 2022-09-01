import React from 'react';
import { useState } from 'react';
import { getMarketplaceList } from '../../api/marketplace';
import { message, Row, Col } from 'antd';
import MarketItem from './MarketItem';
import './index.scss';
import NavHeader from '../../components/NavHeader';
import Footer from '../../components/comm/layout/Footer';

function Marketplace(props) {
  const [marketplaceList, setMarketplaceList] = useState([]);
  React.useEffect(() => {
    getMarketplaceList({
      page: 1,
      size: 20
    })
      .then((res) => {
        setMarketplaceList(res.data.list);
      })
      .catch((err) => {
        message.error(err.message || err.msg);
      });
  }, []);

  return (
    <div className='market-place'>
      <NavHeader></NavHeader>
      <div className='container'>
        <Row gutter={[16, 24]}>
          {marketplaceList.map((item, index) => {
            return <Col key={item.id} xl={6} lg={8} md={12} sm={12} xs={24}>
              <MarketItem item={item}></MarketItem></Col>
          })}
        </Row>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Marketplace;
