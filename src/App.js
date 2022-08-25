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
  
  const provider = new ethers.providers.Web3Provider(window.ethereum, "http://150.109.145.144:9101")
  
  // MetaMask requires requesting permission to connect users accounts
  provider.send("eth_requestAccounts", [])
  .then((accounts)=>{
    if(accounts.length>0) setCurrentAccount(accounts[0])
  })
  .catch((e)=>console.log(e))

  setProvider(provider);
}


const  WriteInput = (props) => {
  const fname = props.fname;
  const contract = props.contract;
  const inputs = props.inputs;
  const  args = new Array();
  
  const onFinish = (values) => {
    onClickConnect(props.setCurrentAccount, props.setProvider);
    for (let i = 0; i < inputs.length; i++) {
      args.push(values[inputs[i].name])
    }
    
    contract[fname](...args);
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

const OnRead = (props) => {
  const inputs = props.inputs;
  const contract = props.contract;
  const outputs = props.outputs;
  const fname = props.fname;
  const  args = new Array();
  const onFinish = (values) => {
    for (let i = 0; i < inputs.length; i++) {
      args.push(values[inputs[i].name])
    }
    
    contract[fname](...args);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  if (inputs.length > 0) {
    return (
      <div>
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
      label={input.name ? input.name : input.type}
      name={input.name ? input.name : input.type}
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
    </div>
    )
  } else {
    return (
      <div>
        <p>{contract[fname]()} </p>
          {props.outputs.map((output, index) => {
          return (<p key={index}>{output.type}</p>)
          })}
      </div>
    )   
  }
      
    

}

const onChange = (e) => {
  console.log(e);
  
};


const onShow = (e, contract) => {
  let index = e.pop();
  console.log(index, contract)
  
};


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
  const [value, setValue] = useState()

  useEffect(() => {
    if(!currentAccount || !ethers.utils.isAddress(currentAccount)) return
    //client side code
    if(!window.ethereum) return
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    setProvider(provider)
    provider.getNetwork().then((result)=>{
      setChainId(result.chainId)
      setChainName(result.name)
    })

  },[currentAccount, chainId])

  const contract = new ethers.Contract("0x1e0C35B60Bc1371a0eEc137E57adD679E99BeFbB", abi1);

  useEffect(() => {
    readCode(setCode, setAbi)
    
  }, [])
  
  const readValue = (e) => {
    console.log(e);
    let index = e.at(-1);
    console.log(index);
    
    console.log(abi[index], "?**!")
    setValue()
  };
  
  return (
    <div className="App">
      
      <Tabs defaultActiveKey="1" type="card" size="middle">
        <TabPane tab="Code" key="1">
        <Highlight className='solidity'>
            {code}
        </Highlight>
        </TabPane>
        <TabPane tab="Read Contract" key="2">
          <Collapse onChange={readValue}>
            {abi.map((item, index) =>{
              return (item.stateMutability == "view" ? <Panel header={item.name} key={index} >
                <OnRead outputs={item.outputs} fname = {item.name} inputs={item.inputs} contract={contract} />
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
                <WriteInput inputs = {item.inputs} fname = {item.name} contract = {contract} setCurrentAccount={setCurrentAccount} setProvider={setProvider}/>
              </Panel> : "")
            })}
          </Collapse>
        </TabPane>
      </Tabs>
      

     
    </div>
  );
}

export default App;
