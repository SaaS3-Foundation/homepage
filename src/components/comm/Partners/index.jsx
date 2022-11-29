import { Row, Col } from '@douyinfe/semi-ui';
import { useMemo } from 'react';
import { StyledImg } from './styled.js';

function Partners() {
  const renderImgs = () => useMemo(() => {
    const modules = import.meta.globEager('@/static/img/partners/*.png');
    return Object.keys(modules).map((key, index) => (
      <Col xl={6} lg={8} xs={12} key={index}>
        <StyledImg src={modules[key].default} alt="" />
      </Col>
    ));
  }, []);

  return (
    <section className="partners-wrap">
      <div className="container">
        <h2 className="text-center">Partners</h2>
        <Row className="imgs-wrap !mt-10 md:!mt-5" gutter={[16, 24]}>
          {renderImgs()}
        </Row>
      </div>
    </section>
  );
}

export default Partners;
