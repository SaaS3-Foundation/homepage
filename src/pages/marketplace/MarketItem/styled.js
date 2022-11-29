import styled from 'styled-components';

export const StyledMarketItem = styled.div`
  border-radius: 6px;
  background-color: var(--app-background-dark);
  border: 1px solid var(--contact-color);
  padding: 12px;

  &:hover {
    box-shadow: rgba(204, 204, 204, 0.4);
  }

  h1 {
    font-size: 32px;
    color: white;
    margin-bottom: 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  h2 {
    color: white;
    font-size: 16px;
    margin: 12px 0 8px;
  }

  .anthor {
    font-size: 14px;
    color: white;
  }

  .targs {
    color: white;
    margin-top: 12px;

    > div {
      flex: 1;
      margin-right: 8px;

      > span {
        padding: 4px;
      }
    }

    > span {
      font-size: 18px;
      flex-shrink: 0;

      &:hover {
        color: var(--contact-color);
      }
    }
  }
`;
