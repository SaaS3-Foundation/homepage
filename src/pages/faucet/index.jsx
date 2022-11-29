import { Input, Toast } from '@douyinfe/semi-ui';
import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { BgColorsOutlined } from '@ant-design/icons';
import { isValidETHAddress } from '@/utils/check';
import { StyledBaseLayout } from './styled';
import CustomButton from '@/components/comm/Button/CustomButton';

function Faucet() {
  const inputRef = useRef();
  const search = decodeURI(new URLSearchParams(useLocation().search).get('code') || '');
  const [loginStatus, setLoginStatus] = useState(false);
  const [validAddressText, setValidaAddress] = useState('Please input your address');

  const GithubLogin = () => {
    const authorize_uri = 'https://github.com/login/oauth/authorize';
    const client_id = '72a17290c572de6117e4';
    const redirect_url = 'https://rpc.saas3.io:3000/faucet';
    window.location.href = `${authorize_uri}?client_id=${client_id}&redirect_url=${redirect_url}`;
  };

  const Submit = () => {
    const { value: address } = inputRef.current;
    if (!address.length) {
      Toast.error('please input your address');
      return;
    }
    return fetch(`https://rpc.saas3.io:3101/saas3/airdrop/faucet?address=${address}`, {
      method: 'GET',
    }).then((response) => {
      if (response.status === 200) {
        Toast.success('100 test tokens will be sent to your address');
        return response.json();
      }
      Toast.error('pending, please wait.');
    });
  };

  const checkAddress = (_address) => {
    if (!_address) {
      return setValidaAddress('Please input your address');
    }
    const valid = isValidETHAddress(_address);
    setValidaAddress(!valid ? 'Address verification failed' : '');
  };

  useEffect(() => {
    if (search.length) {
      setLoginStatus(true);
    }
  }, [search]);

  return (
    <StyledBaseLayout className="faucet">
      <div className="text-center text-white faucet-main container">
        <BgColorsOutlined style={{ fontSize: '180px' }} />
        <div className="mt-32px">
          <Input
            ref={inputRef}
            className="!border !border-white"
            placeholder={
              loginStatus ? 'Paste Your ERC20 Address' : 'Please Click GitHub Login Button'
            }
            onBlur={(event) => checkAddress(event.target.value)}
            disabled={!loginStatus}
            size="large"
          />
          {loginStatus && <p className="error-text">{validAddressText}</p>}
          <CustomButton
            theme="solid"
            className="submit-button"
            disabled={loginStatus ? !!validAddressText : false}
            onClick={() => {
              if (loginStatus === false) return GithubLogin();
              return Submit();
            }}
          >
            {loginStatus ? 'Submit' : 'Login Github'}
          </CustomButton>
        </div>
      </div>
    </StyledBaseLayout>
  );
}

export default Faucet;
