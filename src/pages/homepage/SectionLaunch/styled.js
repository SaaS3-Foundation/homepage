import styled from 'styled-components';

export const Box = styled.section`
  padding-top: 20rem;

  .bg-container {
    top: 200px;
  }

  .features.wrap {
    padding-top: 40vh;
    padding-bottom: 60vh;
    z-index: 3;

    >.wrap-content {
      max-width: 560px;

      h3 {
        width: 100%;
        color: white;
      }

      p {
        width: 100%;
        margin-bottom: 0;
      }


    }

    .feature {
      margin-bottom: 92px;
    }
  }



@media (max-width: 1023px) {

    padding-top: 10rem;

    .bg-container {
      top: initial;
    }

    .features.wrap {
      padding-top: 0;
      padding-bottom: 0;

      >.wrap-content {

        h3 {
          width: 100%;
        }

      }

      .feature {
        margin-bottom: 80px;
      }
    }

}
`;
