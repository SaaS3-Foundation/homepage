import {
  IconTwitter,
} from '@douyinfe/semi-icons';
import { missionAction } from '../../../api/marketplace';
import { toTwitterShare } from '../../../utils/share';
import { AppInfoDescWrap } from '../styled';

function Desc(props) {
  const { info } = props;

  const getTagNodes = () => info.tags?.map?.((tag, i) => <span className="tag bg-primary/40" key={i}>{tag}</span>);
  // const getTagNodes = () => ['tag1', 'tag2'].map?.((tag, i) => <span className="tag bg-primary/40" key={i}>{tag}</span>);

  const handlerTwitter = (event) => {
    event.stopPropagation();
    toTwitterShare();
    if (info.creatorAddress) {
      missionAction({
        mid: 'create_dapi_and_share_tweet',
        address: info.creatorAddress,
        type: 'clicked',
      });
    }
  };

  return (
    <AppInfoDescWrap className="appinfo-desc">
      <div className="flex justify-between">
        <h2>{info.title}</h2>
        <IconTwitter
          className="cursor-pointer text-lg text-white hover:text-primary"
          onClick={handlerTwitter}
        />
      </div>
      <div className="info-item creator mt-2">
        <h3 className="inline-block">{info.creator}</h3>
        <span className="text-xs ml-4">{info.create_at}</span>
      </div>
      <p className="text-xs desc-text mt-2">{info.description}</p>
      <div className="tags-wrap flex flex-wrap">{getTagNodes()}</div>
    </AppInfoDescWrap>
  );
}
export default Desc;
