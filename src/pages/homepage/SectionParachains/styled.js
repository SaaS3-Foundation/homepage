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
      margin-bottom: 16px;
      line-height: 2;
      font-size: 23px;
      width: 100%;
      padding-left: 80px;
    }
  }

  @media (max-width: 1023px) {
    .wrap {
      margin-bottom: 0;
    }

    .wrap-left {
      width: 100%;
    }

    .wrap-right {
      width: 100%;
      padding-right: 42px;
      padding-left: 120px;
      margin-top: 80px;

      p {
        padding-left: 0;
        font-size: 18px;
      }
    }
  }
`;
