import logo from './logo.svg';
import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import { ethers } from "ethers";
import { DownloadOutlined, CreditCardOutlined, WalletOutlined, HomeOutlined, GithubOutlined } from '@ant-design/icons';
import { Collapse, Button, Form, Input, Checkbox, Radio, Tabs, notification } from 'antd';
import Highlight from 'react-highlight';
import "highlight.js/styles/zenburn.css"
import { codeBlock } from 'common-tags';
const { TabPane } = Tabs;
const { Panel } = Collapse;


const onClickConnect = (setCurrentAccount, setProvider) => {
  //client side code
  if(!window.ethereum) {
    notification.open({
      message: 'Please install the MetaMask plugin.',
      description:
        'Website: https://metamask.io/',
      onClick: () => {
        console.log('Notification Clicked!');
      },
    });
    window.open("https://metamask.io/","install metamsk","");
    return
  }
  
  const provider = new ethers.providers.Web3Provider(window.ethereum, "rinkeby")
  
  // MetaMask requires requesting permission to connect users accounts
  provider.send("eth_requestAccounts", [])
  .then((accounts)=>{
    if(accounts.length>0) setCurrentAccount(accounts[0])
  })
  .catch((e)=>console.log(e))

  setProvider(provider);
}

const Write = () => {
  const data = new FormData();
  data.append('transaction', "www");
  var headers = data.getHeaders();
  const resp = fetch("", {
    method: 'POST',
    headers: headers,
    // @ts-ignore
    body: data,
  });
}



const  WriteInput = (props) => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  
  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      
      {props.inputs.map((input, index) => (
        <Form.Item
        label={input.name}
        name={input.name}
        key= {index}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input placeholder={input.type} />
      </Form.Item>
      ))}

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Write
        </Button>
      </Form.Item>
    </Form>
  );
};

const onChange = (e) => {
  // console.log(e);
};

const onShow = (e, contract) => {
  let index = e.pop();
  console.log(index, contract)
  // let name = abi[index].name
  
  // let s = contract.name
  // console.log(s,"????")
};

const onRead = (item) => {
  console.log(item, "???");
}

async function readCode(setCode, setAbi) {
  const resp = await fetch("http://150.109.145.144:3000/saas3/dapi/detail?id=qz1BUkH3yK", {
    method: 'GET',
  
    // @ts-ignore
    // body: data,
  })
  if (!resp.ok) {
    console.log(resp.status)
    return
  }
  const res = await resp.json();
  console.log(res, "???????")
  setCode(res.data.requester)
  setAbi(res.data.requesterAbi)

}

function App() {

  const [currentAccount, setCurrentAccount] = useState()
  const [chainId, setChainId] = useState()
  const [chainname, setChainName] = useState()
  const [provider, setProvider] = useState()
  const [code, setCode] = useState()
  const [abi, setAbi] = useState([])

  useEffect(() => {
    if(!currentAccount || !ethers.utils.isAddress(currentAccount)) return
    //client side code
    if(!window.ethereum) return
    const provider = new ethers.providers.Web3Provider(window.ethereum)
   
    provider.getNetwork().then((result)=>{
      setChainId(result.chainId)
      setChainName(result.name)
    })

  },[currentAccount, chainId])

  const contract = new ethers.Contract("0x83aE10CF14ECd2e02b11Fe12Ef1e1809da5f9D1d", abi);

  // const data = new FormData();
  // data.append('transaction', "www");
  // var headers = data.getHeaders();
  useEffect(() => {
    readCode(setCode, setAbi)
  }, [])
  
  
  return (
    <div className="App">
      
      <Tabs defaultActiveKey="1" type="card" size="middle">
        <TabPane tab="Code" key="1">
        <Highlight className='solidity'>
            {code}
        </Highlight>
        </TabPane>
        <TabPane tab="Read Contract" key="2">
          <Collapse onChange={onChange}>
            {abi.map((item, index) =>{
              return (item.stateMutability == "view" ? <Panel header={item.name} key={index} >
                <p>{item.name}</p>
              </Panel> : "")
              
            })}
          </Collapse>
        </TabPane>
        <TabPane tab="Write Contract" key="3">
          <Button type="primary" shape="round" icon={<WalletOutlined />} onClick={()=>onClickConnect(setCurrentAccount, setProvider)} size="large">
                {currentAccount? 
                  <span> 
                    {currentAccount.substr(0, 5) + new Array(4).join('.') + currentAccount.substr(-3)}
                  </span>
                : "Connect Wallet"}
          </Button>
          <Collapse defaultActiveKey={['1']} onChange={onChange}>
            {abi.map((item, index) =>{
              return (item.stateMutability != "view" && item.type == "function" && item.inputs.length != 0 ? <Panel header={item.name} key={index}>
                <WriteInput inputs = {item.inputs} />
              </Panel> : "")
            })}
          </Collapse>
        </TabPane>
      </Tabs>
      

     
    </div>
  );
}

export default App;
