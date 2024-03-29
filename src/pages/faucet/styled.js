import styled from 'styled-components';
import BaseLayout from '@/components/layout/BaseLayout';

export const StyledBaseLayout = styled(BaseLayout)`
  .error-text {
    color: #ff4d4f;
    margin-top: 8px;
    text-align: left;
    margin-bottom: 0;
  }

  .submit-button {
    width: 100%;
    margin-top: 12px;
  }

  .footer-wrap {
    margin-top: 0;
  }

  .main-wrap {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    height: 100vh;

    > .main-container {
      background-color: var(--app-background-dark);
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .faucet-main {
    max-width: 500px;
    display: inline-block;
    width: 500px;
  }
`;
