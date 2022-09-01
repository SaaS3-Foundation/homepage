import { TwitterOutlined } from '@ant-design/icons';
import { missionAction } from '../../../api/marketplace';
import { toTwitterShare } from '../../../utils/share';
import Logo from '../../../static/img/logo/SaaS3Logo.png';
import './index.scss';

function MarketItem(props) {
  const { item } = props;

  function handlerTwitter(event, item) {
    event.stopPropagation();
    toTwitterShare();
    if (item.creatorAddress) {
      missionAction({
        mid: 'create_dapi_and_share_tweet',
        address: item.creatorAddress,
        type: 'clicked'
      }).then((res) => {});
    }
  }

  function getTags() {
    return item.tags?.map?.((tag, tag_index) => {
      return (
        <span className='tag-item' key={tag_index}>
          {tag}
        </span>
      );
    });
  }

  return (
    <div
      className='market-item cursor-pointer'
      onClick={() => {
        window.location.href = '/api_info/' + item.id;
      }}
    >
      <div className='context'>
        <h1>{item.title}</h1>
        <div>
          <img src={Logo} alt='Logo' />
        </div>
        <h2>{item.description}</h2>
        <h3 className='anthor'> Created By {item.creator}</h3>
        <div className='targs flex items-end'>
          <div className='tag-wrap flex-1 flex flex-wrap'>{getTags()}</div>
          <TwitterOutlined className='tw-icon' onClick={(event) => handlerTwitter(event, item)} />
        </div>
      </div>
    </div>
  );
}

export default MarketItem;
