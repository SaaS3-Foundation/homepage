import marketPlaceTitle from '@/static/img/marketplace/marketplace-title.png';
import BaseLayout from '@/components/comm/layout/BaseLayout';
import { useNavigate, useParams } from 'react-router-dom';
import Highlight from 'react-highlight';
import './index.scss';
import 'highlight.js/styles/ocean.css';
import { Tabs, message, Button, notification } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useContext, useEffect, useState } from 'react';
import { getMarketInfo } from '@/api/marketplace';
import { switchNetwork } from '@/utils/web3.js';
import Web3Modal from 'web3modal';
import ReadContract from './ReadContract';
import WriteContract from './WriteContract';
import { web3Context } from 'src/provider/web3';

function ContractConsole() {
  const nav = useNavigate();
  const params = useParams();
  const [info, setInfo] = useState({});
  const [abiContract, setContract] = useState(null);
  const { web3, provider, setProvider } = useContext(web3Context);

  const web3Modal = new Web3Modal({
    network: 'mainnet',
    cacheProvider: true,
    providerOptions: {
      metamask: {
        package: window.ethereum
      }
    }
  });

  const connectWallet = async () => {
    try {
      if (!window.ethereum) {
        notification.open({
          message: 'Please install the MetaMask plugin.',
          description: 'Website: https://metamask.io/'
        });

        window.open('https://metamask.io/', 'install metamsk', '');
        return;
      }
      const _provider = await web3Modal.connect();
      await switchNetwork(_provider);
      setProvider(_provider);
      message.success('Successfully connect wallet!');
    } catch (error) {
      message.error(error?.message || 'Connect wallet failed.');
    }
  };

  useEffect(() => {
    const getInfo = async () => {
      try {
        const res = await getMarketInfo({
          id: params.id
        });
        res.data.triggers = JSON.parse(res.data.triggers);
        setInfo(res.data);
      } catch (error) {
        message.error(error.msg);
      }
    };
    getInfo();
  }, [params]);

  useEffect(() => {
    if (web3Modal.cachedProvider) {
      connectWallet();
    }
  }, []);

  useEffect(() => {
    if (info.id && provider && !abiContract) {
      const contract = new web3.eth.Contract(
        info.requesterAbi,
        '0xa0F09F848345Bf7468366932D9cE2bCA046E28Bd'
      );
      setContract(contract);
    }
  }, [web3, provider, info, abiContract]);

  return (
    <BaseLayout className='contract-console'>
      <div className='container'>
        <div className='title-wrap flex items-center'>
          <ArrowLeftOutlined
            className='cursor-pointer text-2xl hover:text-primary'
            onClick={() => nav(-1)}
          />
          <div className='img-wrap inline-block ml-16px'>
            <img src={marketPlaceTitle} alt='marketplace' />
          </div>
          <div className='right-wrap ml-auto'>
            {provider ? (
              <span>{provider.selectedAddress}</span>
            ) : (
              <Button type='primary' onClick={connectWallet}>
                Connect Wallet
              </Button>
            )}
          </div>
        </div>
        <div className='p-32px rounded-2xl bg-black/40 mt-24px'>
          <Tabs defaultActiveKey='code'>
            <Tabs.TabPane tab='Code' key='code'>
              <Highlight>{info.requester}</Highlight>
            </Tabs.TabPane>
            <Tabs.TabPane tab='Read Contract' key='read'>
              <ReadContract contract={abiContract} info={info}></ReadContract>
            </Tabs.TabPane>
            <Tabs.TabPane tab='Write Contract' key='write'>
              <WriteContract contract={abiContract} info={info} />
            </Tabs.TabPane>
          </Tabs>
        </div>
      </div>
    </BaseLayout>
  );
}

export default ContractConsole;
