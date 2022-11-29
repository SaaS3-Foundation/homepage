import Highlight from 'react-highlight';
import 'highlight.js/styles/ocean.css';
import { useNavigate } from 'react-router-dom';
import { Button } from '@douyinfe/semi-ui';
import { AppInfoDemoCodeWrap } from '../styled';

function DemoCode(props) {
  const { info } = props;
  const navigate = useNavigate();

  const tryIt = () => {
    navigate(`/contractConsole/${info.id}`);
  };

  return (
    <AppInfoDemoCodeWrap className="demo-code">
      <div className="code-title flex items-center">
        <h2 className="mr-10">DEMO Code</h2>
        <Button theme="solid" type="primary" onClick={tryIt}>
          Try it
        </Button>
      </div>
      <div className="code-wrap">
        <Highlight>{info.demo}</Highlight>
      </div>
    </AppInfoDemoCodeWrap>
  );
}
export default DemoCode;
