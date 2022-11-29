import styled from 'styled-components';

export const Box = styled.section`

  .flight-wrap {
    margin-top: 68px;

    >.box-outlines {
      width: 28%;
    }
  }

  a {
    width: 100%;
    padding-right: 48px;
    font-size: 24px;
    margin-top: 32px;
    color: #ddd;
    line-height: 1.5;
    display: block;
    position: relative;

    >.anticon-arrow-right {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
    }

    &:hover {
      color: var(--contact-color);
    }
  }


@media (max-width: 1023px) {

  .flight-wrap {
    >.box-outlines {
      width: 100%;
      margin: 0 14px 56px;
    }
  }

}
`;
