import {
  Toast, Button, Form, Row, Col,
} from '@douyinfe/semi-ui';
import { useContext, useState } from 'react';
import { web3Context } from '@/provider/web3';
import { isType } from '@/utils/check';

const explor = 'https://moonbase.moonscan.io/tx/';

function ContractFrom(props) {
  const { item, onSubmit, text } = props;
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState();
  const { provider } = useContext(web3Context);
  const submit = async (values) => {
    console.log(values);
    if (onSubmit) {
      try {
        const submitRet = onSubmit(item, values);
        if (submitRet === -1 || !provider) {
          Toast.error('Place Connect wallet.');
          return;
        }
        setLoading(true);
        const ret = await submitRet;
        if (isType(ret) === 'object' && ret.transactionHash) {
          setResult(
            <Button type="link" href={explor + ret.transactionHash} target="_blank">
              {ret.transactionHash}
            </Button>,
          );
        } else {
          setResult(String(ret));
        }
      } catch (error) {
        Toast.error(error.message || 'error');
      }
      setLoading(false);
    }
  };

  const getLabel = (input) => `${input.name} (${input.type})`;

  const getFormItemNodes = () => item.inputs.map((input, index) => (
    <Col key={index}>
      <Form.Input
        className="!py-0"
        field={input.name}
        labelPosition="left"
        labelAlign="right"
        label={{
          text: getLabel(input),
          required: true,

        }}
        rules={[
          { required: true, message: 'required error' },
        ]}
        placeholder={input.type}
      />
    </Col>
  ));

  return (
    <Form
      className="contract-from"
      name="validate_other"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 12 }}
      onSubmit={submit}
    >
      <Row>
        <Col span={24}>
          {getFormItemNodes()}
        </Col>
        <Col span={12} offset={8} className="mt-4">
          <Button type="primary" htmlType="submit" loading={loading}>
            {text}
          </Button>
        </Col>

        <Col span={12} offset={4} className="mt-4">
          <span>Result : </span>
          <span className="break-all">{result}</span>
        </Col>
      </Row>
    </Form>
  );
}

export default ContractFrom;
