import { Button, Form, Input, message } from 'antd';
import { useState } from 'react';

function ContractFrom(props) {
  const { item, onSubmit, text } = props;
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState();

  const submit = async (values) => {
    if (onSubmit) {
      try {
        setLoading(true);
        const ret = await onSubmit(item, values);
        if (ret === -1) {
          message.error('Place Connect wallet.');
          return;
        }
        setResult(ret.toString());
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
        <span>{result}</span>
      </Form.Item>
    </Form>
  );
}

export default ContractFrom;
