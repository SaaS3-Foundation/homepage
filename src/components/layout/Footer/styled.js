import styled from 'styled-components';

export const FootWrap = styled.footer`
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  color: white;
  padding: 48px 0 48px;
  width: 100%;
  background-color: var(--app-background-dark);

  .address-wrap {
    margin-top: 32px;

    > a {
      font-size: 16px;
    }
  }
`;
