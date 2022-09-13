import { Button, Form, Input, message } from 'antd';
import { useContext, useState } from 'react';
import { web3Context } from 'src/provider/web3';
import { isType } from 'src/utils/check';
import './index.less';

const explor = `https://moonbase.moonscan.io/tx/`;

function ContractFrom(props) {
  const { item, onSubmit, text } = props;
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState();
  const { provider } = useContext(web3Context);
  const submit = async (values) => {
    if (onSubmit) {
      try {
        const submitRet = onSubmit(item, values);
        if (submitRet === -1 || !provider) {
          message.error('Place Connect wallet.');
          return;
        }
        setLoading(true);
        const ret = await submitRet;
        console.log(ret, 'ret');
        if (isType(ret) === 'object' && ret.transactionHash) {
          setResult(
            <Button type='link' href={explor + ret.transactionHash} target='_blank'>
              {ret.transactionHash}
            </Button>
          );
        } else {
          setResult(String(ret));
        }
      } catch (error) {
        console.log(error);
        message.error(error.message || 'error');
      }
      setLoading(false);
    }
  };

  const getLabel = (input) => {
    return input.name + ` (${input.type})`;
  };

  const getFormItemNodes = () => {
    return item.inputs.map((input, index) => {
      return (
        <Form.Item
          key={index}
          label={getLabel(input)}
          name={input.name}
          rules={[{ required: true, message: 'Please input !' }]}
        >
          <Input placeholder={input.type} />
        </Form.Item>
      );
    });
  };

  return (
    <Form
      className='contract-from'
      name='validate_other'
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 12 }}
      onFinish={submit}
    >
      {getFormItemNodes()}
      <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
        <Button type='primary' htmlType='submit' loading={loading} ghost>
          {text}
        </Button>
      </Form.Item>

      <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
        <span>Result : </span>
        <span className='break-all'>{result}</span>
      </Form.Item>
    </Form>
  );
}

export default ContractFrom;
