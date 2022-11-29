import styled from 'styled-components';

export const StyledCookieModal = styled.div`
  > .modal-content {
    box-shadow: 0 4px 6px 0 rgb(0 0 0 / 20%), 5px 5px 10px 0 rgb(0 0 0 / 19%);
    max-width: 440px;
    background-color: #333;
  }

  @media (max-width: 1023px) {
    > .modal-content {
      max-width: initial;
    }
  }
`;
