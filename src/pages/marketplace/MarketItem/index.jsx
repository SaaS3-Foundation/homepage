import {
  IconTwitter,
} from '@douyinfe/semi-icons';
import { useNavigate } from 'react-router';
import { missionAction } from '@/api/marketplace';
import { toTwitterShare } from '@/utils/share';
import Logo from '@/static/img/logo/SaaS3Logo.png';
import { StyledMarketItem } from './styled';

function MarketItem(props) {
  const nav = useNavigate();
  const { item } = props;

  const handlerTwitter = (event) => {
    event.stopPropagation();
    toTwitterShare();
    if (item.creatorAddress) {
      missionAction({
        mid: 'create_dapi_and_share_tweet',
        address: item.creatorAddress,
        type: 'clicked',
      });
    }
  };

  function getTags() {
    return item.tags?.map?.((tag, tag_index) => (
      <span className="tag-item" key={tag_index}>
        {tag}
      </span>
    ));
  }

  return (
    <StyledMarketItem
      className="market-item cursor-pointer"
      onClick={() => nav(`/api_info/${item.id}`)}
    >
      <div className="context">
        <h1 className="font-mono">{item.title}</h1>
        <div>
          <img src={Logo} alt="Logo" />
        </div>
        <h2 className="font-mono">{item.description}</h2>
        <h3 className="anthor"> Created By {item.creator}</h3>
        <div className="targs flex items-end">
          <div className="tag-wrap flex-1 flex flex-wrap">{getTags()}</div>
          <IconTwitter className="tw-icon" onClick={(event) => handlerTwitter(event)} />
        </div>
      </div>
    </StyledMarketItem>
  );
}

export default MarketItem;
