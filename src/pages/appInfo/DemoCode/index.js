import Highlight from 'react-highlight';
import './index.less';
import 'highlight.js/styles/ocean.css';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
function DemoCode(props) {
  const { info } = props;
  const navigate = useNavigate();
  function tryIt() {
    navigate('/contractConsole/' + info.id);
  }

  return (
    <div className='demo-code'>
      <div className='code-title flex items-center'>
        <h2 className='mr-10'>DEMO Code</h2>
        <Button type='primary' onClick={() => tryIt()} ghost>
          Try it
        </Button>
      </div>
      <div className='code-wrap'>
        <Highlight>{info.demo}</Highlight>
      </div>
    </div>
  );
}
export default DemoCode;
