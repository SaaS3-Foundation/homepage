import './index.less';
import { Row, Col } from 'antd';
const requireContext = require.context('../../../static/img/partners', true, /^\.\/.*\.png$/);
const images = requireContext.keys().map(requireContext);

function Partners() {
  function getImgsNode() {
    return images.map((img, index) => {
      return (
        <Col key={index} xl={6} lg={8} xs={12}>
          <img src={img} alt='' />
        </Col>
      );
    });
  }
  return (
    <section className='partners-wrap'>
      <div className='container'>
        <h2 className='text-center'>Partners</h2>
        <Row className='imgs-wrap mt-10' gutter={[16, 24]}>
          {getImgsNode()}
        </Row>
      </div>
    </section>
  );
}

export default Partners;
