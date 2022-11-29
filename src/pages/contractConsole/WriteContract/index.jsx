import { Collapse } from '@douyinfe/semi-ui';
import { useContext } from 'react';
import { web3Context } from '@/provider/web3';
import ContractFrom from '../ContractFrom';

function WriteContract(props) {
  const { info, contract } = props;
  const { account } = useContext(web3Context);
  const onSubmit = async (item, data) => {
    if (!contract) {
      return -1;
    }
    return contract.methods[item.name](...Object.values(data)).send({
      from: account,
      gas: 1000000,
    });
  };

  const getPanelNodes = () => {
    if (!info?.requesterAbi) return;
    return info.requesterAbi
      .filter(
        (item) => item.stateMutability !== 'view' && item.type === 'function' && item.inputs.length,
      )
      .map((item, index) => (
        <Collapse.Panel key={index} itemKey={item.name + index} header={item.name}>
          <ContractFrom item={item} text="Write" onSubmit={onSubmit} />
        </Collapse.Panel>
      ));
  };

  return (
    <div className="write-contract">
      <Collapse accordion>{getPanelNodes()}</Collapse>
    </div>
  );
}

export default WriteContract;
