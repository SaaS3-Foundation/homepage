import styled from 'styled-components';

export const Box = styled.section`
  .wrap {
    margin-bottom: 40px;

    h2 {
      width: 50%;
      margin-bottom: 3rem;
    }

    p {
      width: 50%;
      margin-bottom: 1.4rem;
    }
  }

  @media (max-width: 1023px) {
    .wrap {
      margin-bottom: 40px;


      h2 {
        width: 100%;
      }

      p {
        width: 100%;
      }
    }
  }
`;
