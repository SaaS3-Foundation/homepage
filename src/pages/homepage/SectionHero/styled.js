import styled from 'styled-components';

export const Box = styled.section`
  position: sticky;
  top: 0;
  overflow: hidden;
  height: 100vh;

  .container {
    transform: scale(1);
    opacity: 1;
    transition: .5s ease;

    &.zoom {
      transform: scale(5);
      opacity: 0;
      transition: .5s ease-in-out;
      pointer-events: none;
    }

    .img-wrap {
      width: 100%;
      pointer-events: none;
      -webkit-user-drag: none;
      user-select: none;
      /* .PositionCenter(); */

      >img {
        height: 600px;
        object-fit: contain;
      }
    }
    .semi-button{
      border: 1px solid white;
      color: white;
      position: absolute;
      left: 50%;
      bottom: 5rem;
      transform: translateX(-50%);
    }
  }


  .sec-content {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
  }

  h1 {
    text-align: center;
    width: 100%;
    font-size: 60px;
    /* .TitleFont(); */
    line-height: 1.6;
  }

  .custom-button {
    position: absolute;
    bottom: 4rem;
    left: 50%;
    transform: translateX(-50%);
  }

@media (max-width: 1023px) {

    .container {

      .img-wrap {

        >img {
          width: 80%;
          height: initial;
        }
      }

      h1 {
        font-size: 22px;
      }
    }

    .custom-button {
      bottom: 6rem;
    }

    h1 {
      font-size: 16px;
    }
  }

`;
