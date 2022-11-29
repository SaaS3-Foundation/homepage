import styled from 'styled-components';

export const StyledAppInfoWrap = styled.div`
  background-color: var(--app-background-dark);
  background-image: url('../../static/img/marketplace/marketplace-bg.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: left top;
  background-attachment: fixed;
  color: white;
  padding: 60px 0 48px;

  // padding-bottom: 48px;
  .app-info__title {
    > .img-wrap {
      > img {
        width: 210px;
      }
    }
  }

  h2 {
    font-size: 20px;
    color: white;
    font-weight: bold;
    font-style: italic;
  }

  h3 {
    font-style: italic;
    font-size: 15px;
    color: white;
    font-weight: bold;
    display: inline-block;

    & + span {
      margin-left: 12px;
    }
  }

  .info-item {
    > span {
      font-style: italic;
      color: #828282;
    }
  }

  .app-info__desc {
    margin-top: 50px;

    .appinfo-desc {
      flex-shrink: 0;
      width: 60%;
      margin-right: 24px;
    }

    .appinfo-end-point {
      flex: 1;
    }
  }

  .demo-code {
    margin-top: 24px;
  }

  @media (max-width: 1023px) {
    .app-info__desc {
      > .appinfo-desc {
        width: 100% !important;
      }

      > .appinfo-end-point {
        margin-top: 24px;
      }
    }
  }
`;

export const AppInfoDemoCodeWrap = styled.div`
  background-color: #00000099;
  border-radius: 16px;
  padding: 32px;

  .code-wrap {
    margin-top: 24px;

    .hljs {
      background-color: transparent;
    }
  }
`;

export const AppInfoDescWrap = styled.div`
  background-color: #00000099;
  border-radius: 16px;
  padding: 32px;

  .desc-text {
    font-style: italic;
    color: #828282;
    min-height: 80px;
  }

  .tags-wrap {
    margin-top: 12px;

    > .tag {
      border-radius: 60px;
      /* background-color: fade(@primary-color, 40%); */
      padding: 6px 14px;
      font-size: 12px;

      & + .tag {
        margin-left: 12px;
      }
    }
  }
`;

export const AppInfoEndPointWrap = styled.div`
  background-color: #00000099;
  border-radius: 16px;
  padding: 32px;
  .info-item {
    margin-top: 12px;
  }
`;
