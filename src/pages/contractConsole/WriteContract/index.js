import { Collapse } from 'antd';
import { useContext } from 'react';
import { web3Context } from 'src/provider/web3';
import ContractFrom from '../ContractFrom';
import './index.scss';

function WriteContract(props) {
  const { info, contract } = props;
  const { account } = useContext(web3Context);
  const onSubmit = async (item, data) => {
    if (!contract) {
      return -1;
    }
    return contract.methods[item.name](...Object.values(data)).send({
      from: account
    });
  };

  const getPanelNodes = () => {
    if (!info?.requesterAbi) return;
    return info.requesterAbi
      .filter(
        (item) => item.stateMutability !== 'view' && item.type === 'function' && item.inputs.length
      )
      .map((item, index) => {
        return (
          <Collapse.Panel key={item.name + index} header={item.name}>
            <ContractFrom item={item} text='Write' onSubmit={onSubmit} />
          </Collapse.Panel>
        );
      });
  };

  return (
    <div className='write-contract'>
      <Collapse>{getPanelNodes()}</Collapse>
    </div>
  );
}

export default WriteContract;
