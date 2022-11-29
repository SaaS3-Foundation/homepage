import styled from 'styled-components';

export const StyledBaseLayout = styled.div`
  > .main-wrap {
    padding-top: 83px;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    /* flex:1; */

    > .main-container {
      height: 100%;
      width: 100%;
      flex: 1;
      padding-bottom: 48px;
    }
  }

  .footer-wrap {
    /* margin-top: 48px; */
    flex-shrink: 0;
  }

  @media (max-width: 1023px) {
    > .main-wrap {
      padding-top: 73px;
    }
  }
`;
