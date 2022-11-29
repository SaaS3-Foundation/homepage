import { useNavigate, useParams } from 'react-router-dom';
import Highlight from 'react-highlight';
import 'highlight.js/styles/ocean.css';
import { IconArrowLeft } from '@douyinfe/semi-icons';
import { useContext, useEffect, useState } from 'react';
import { Toast, Button, Tabs } from '@douyinfe/semi-ui';
import { web3Context } from '@/provider/web3';
import WriteContract from './WriteContract';
import ReadContract from './ReadContract';
import { getMarketInfo } from '@/api/marketplace';
import marketPlaceTitle from '@/static/img/marketplace/marketplace-title.png';
import { StyledBaseLayout } from './styled';

function ContractConsole() {
  const nav = useNavigate();
  const params = useParams();
  const [info, setInfo] = useState({});
  const [abiContract, setContract] = useState(null);
  const { web3, provider, connect } = useContext(web3Context);

  const connectWallet = async () => {
    await connect();
  };

  useEffect(() => {
    const getInfo = async () => {
      try {
        const res = await getMarketInfo({
          id: params.id,
        });
        res.data.triggers = JSON.parse(res.data.triggers);
        setInfo(res.data);
      } catch (error) {
        Toast.error(error.msg);
      }
    };
    getInfo();
  }, [params]);

  useEffect(() => {
    if (info.id && provider && !abiContract) {
      const contract = new web3.eth.Contract(info.requesterAbi, info.requesterAddress);
      setContract(contract);
    }
  }, [web3, provider, info, abiContract]);

  return (
    <StyledBaseLayout className="contract-console">
      <div className="container">
        <div className="title-wrap flex items-center">
          <IconArrowLeft
            className="cursor-pointer text-2xl hover:text-primary"
            onClick={() => nav(-1)}
          />
          <div className="img-wrap inline-block ml-16px">
            <img src={marketPlaceTitle} alt="marketplace" />
          </div>
          <div className="right-wrap ml-auto">
            {provider ? (
              <span>{provider.selectedAddress}</span>
            ) : (
              <Button type="primary" onClick={connectWallet}>
                Connect Wallet
              </Button>
            )}
          </div>
        </div>
        <div className="p-32px rounded-2xl bg-black/40 mt-24px">
          <Tabs>
            <Tabs.TabPane tab="Code" itemKey="code">
              <Highlight>{info.requester}</Highlight>
            </Tabs.TabPane>
            <Tabs.TabPane tab="Read Contract" itemKey="read">
              <ReadContract contract={abiContract} info={info} />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Write Contract" itemKey="write">
              <WriteContract contract={abiContract} info={info} />
            </Tabs.TabPane>
          </Tabs>
        </div>
      </div>
    </StyledBaseLayout>
  );
}

export default ContractConsole;
