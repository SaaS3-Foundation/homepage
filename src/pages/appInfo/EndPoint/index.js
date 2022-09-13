import './index.less';

function EndPoint(props) {
  const { info } = props;

  return (
    <div className='appinfo-end-point'>
      <h3>Endpoint</h3>
      <div className='info-item '>
        <h3>Title : </h3>
        <span>{info.triggers?.http?.[0]?.oisTitle}</span>
      </div>
      <div className='info-item '>
        <h3>Name : </h3>
        <span>{info.triggers?.http?.[0]?.endpointName}</span>
      </div>
      <div className='info-item '>
        <h3>Id : </h3>
        <span className='break-all'>{info.triggers?.http?.[0]?.endpointId}</span>
      </div>
    </div>
  );
}
export default EndPoint;
