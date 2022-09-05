import Highlight from 'react-highlight';
import './index.scss';
import 'highlight.js/styles/ocean.css';

function DemoCode(props) {
  const { info } = props;

  return (
    <div className='demo-code'>
      <div className='code-title'>
        <h2>DEMO Code</h2>
      </div>
      <div className='code-wrap'>
        <Highlight>{info.demo}</Highlight>
      </div>
    </div>
  );
}
export default DemoCode;
