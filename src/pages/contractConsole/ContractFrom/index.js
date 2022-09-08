import { Button, Form, Input, message } from 'antd';
import { useContext, useState } from 'react';
import { web3Context } from 'src/provider/web3';
import { isType } from 'src/utils/check';

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
        if (isType(ret) === 'object') {
          setResult(JSON.stringify(ret));
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
    <Form name='validate_other' labelCol={{ span: 5 }} wrapperCol={{ span: 18 }} onFinish={submit}>
      {getFormItemNodes()}
      <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
        <Button type='primary' htmlType='submit' loading={loading}>
          {text}
        </Button>
      </Form.Item>

      <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
        <span>Result : </span>
        <span className='break-all'>{result}</span>
      </Form.Item>
    </Form>
  );
}

export default ContractFrom;
