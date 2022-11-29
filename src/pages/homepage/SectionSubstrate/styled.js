import styled from 'styled-components';

export const Box = styled.section`
  .wrap-left {
    max-width: 560px;
    width: 40%;
  }

  .wrap-right {
    width: 60%;
    padding-left: 80px;

    p {
      margin-top: 36px;
      margin-bottom: 22px;
      width: 100%;
    }
  }

  .button-wrap {
    > button {
      &:first-child {
        margin-right: 36px;
      }
    }
  }

  @media (max-width: 1023px) {
    .wrap-left {
      width: 100%;
    }

    .wrap-right {
      width: 100%;
      padding-left: 0;
      padding-right: 0;
      margin-top: 80px;

      p {
        padding-left: 0;
        font-size: 18px;
      }
    }

    .button-wrap {
      > button {
        width: 100%;

        &:first-child {
          margin-right: 0;
          margin-bottom: 24px;
        }
      }
    }
  }
`;
