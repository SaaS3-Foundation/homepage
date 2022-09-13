import { TwitterOutlined } from '@ant-design/icons';
import { missionAction } from '../../../api/marketplace';
import { toTwitterShare } from '../../../utils/share';
import './index.less';

function Desc(props) {
  const { info } = props;

  const getTagNodes = () => {
    return info.tags?.map?.((tag, i) => {
      return <span className='tag' key={i}>{tag}</span>;
    });
  };

  function handlerTwitter(event) {
    event.stopPropagation();
    toTwitterShare();
    if (info.creatorAddress) {
      missionAction({
        mid: 'create_dapi_and_share_tweet',
        address: info.creatorAddress,
        type: 'clicked'
      }).then((res) => {});
    }
  }

  return (
    <div className='appinfo-desc'>
      <div className='flex justify-between'>
        <h2>{info.title}</h2>
        <TwitterOutlined
          className='cursor-pointer text-lg text-white hover:text-primary'
          onClick={handlerTwitter}
        ></TwitterOutlined>
      </div>
      <div className='info-item creator mt-2'>
        <h3 className='inline-block'>{info.creator}</h3>
        <span className='text-xs ml-4'>{info.create_at}</span>
      </div>
      <p className='text-xs desc-text mt-2'>{info.description}</p>
      <div className='tags-wrap flex flex-wrap'>{getTagNodes()}</div>
    </div>
  );
}
export default Desc;
