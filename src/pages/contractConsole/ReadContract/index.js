import { Collapse } from 'antd';
import ContractFrom from '../ContractFrom';
import './index.scss';

function ReadContract(props) {
  const { info, contract } = props;
  const onSubmit = (item, data) => {
    if (!contract) {
      return -1;
    }
    return contract.methods[item.name](...Object.values(data)).call();
  };

  const getPanelNodes = () => {
    if (!info?.requesterAbi) return;
    return info.requesterAbi
      .filter((item) => ['view', 'pure'].includes(item.stateMutability))
      .map((item, index) => {
        return (
          <Collapse.Panel key={item.name + index} header={item.name}>
            <ContractFrom item={item} text='Read' onSubmit={onSubmit} />
          </Collapse.Panel>
        );
      });
  };

  return (
    <div className='read-contract'>
      <Collapse>{getPanelNodes()}</Collapse>
    </div>
  );
}

export default ReadContract;
