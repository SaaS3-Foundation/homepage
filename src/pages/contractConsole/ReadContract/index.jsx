import { Collapse } from '@douyinfe/semi-ui';
import ContractFrom from '../ContractFrom';

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
      .map((item, index) => (
        <Collapse.Panel key={index} itemKey={item.name + index} header={item.name}>
          <ContractFrom item={item} text="Read" onSubmit={onSubmit} />
        </Collapse.Panel>
      ));
  };

  return (
    <div className="read-contract">
      <Collapse accordion>{getPanelNodes()}</Collapse>
    </div>
  );
}

export default ReadContract;
