import { Input, Toast } from '@douyinfe/semi-ui';
import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
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
    }).catch(() => Toast.error('pending, please wait.'));
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
        <svg
          className="text-[180px] mx-auto"
          viewBox="64 64 896 896"
          focusable="false"
          data-icon="bg-colors"
          width="1em"
          height="1em"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            d="M766.4 744.3c43.7 0 79.4-36.2 79.4-80.5 0-53.5-79.4-140.8-79.4-140.8S687 610.3 687
            663.8c0 44.3 35.7 80.5 79.4 80.5zm-377.1-44.1c7.1 7.1 18.6 7.1 25.6 0l256.1-256c7.1-7.1
            7.1-18.6 0-25.6l-256-256c-.6-.6-1.3-1.2-2-1.7l-78.2-78.2a9.11 9.11 0 00-12.8 0l-48 48a9.11
            9.11 0 000 12.8l67.2 67.2-207.8 207.9c-7.1 7.1-7.1 18.6 0 25.6l255.9 256zm12.9-448.6l178.9
            178.9H223.4l178.8-178.9zM904 816H120c-4.4 0-8 3.6-8 8v80c0 4.4 3.6 8 8 8h784c4.4
            0 8-3.6 8-8v-80c0-4.4-3.6-8-8-8z"
          />
        </svg>
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
