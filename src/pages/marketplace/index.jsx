import React, { useState } from 'react';
import { Toast, Row, Col } from '@douyinfe/semi-ui';
import { getMarketplaceList } from '../../api/marketplace';
import MarketItem from './MarketItem';
import BaseLayout from '@/components/layout/BaseLayout';

function Marketplace() {
  const [marketplaceList, setMarketplaceList] = useState([]);

  React.useEffect(() => {
    getMarketplaceList({
      page: 1,
      size: 20,
    })
      .then((res) => {
        setMarketplaceList(res.data.list);
      })
      .catch((err) => {
        Toast.error(err.message || err.msg);
      });
  }, []);

  return (
    <BaseLayout className="marketplace" mainClassName="bg-bg-dark">
      <div className="py-10">
        <div className="container market-container">
          <Row gutter={[16, 24]}>
            {marketplaceList.map((item) => (
              <Col key={item.id} xl={6} lg={8} md={12} sm={12} xs={24}>
                <MarketItem item={item} />
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </BaseLayout>
  );
}

export default Marketplace;
