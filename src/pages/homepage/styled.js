import styled from 'styled-components';
import BaseLayout from '@/components/layout/BaseLayout';

export const StyledBaseLayout = styled(BaseLayout)`
  width: 100%;
  background-color: var(--app-background-dark);
  min-height: 100vh;
  > .main-wrap {
    padding-top: 0 !important;
  }

  ::selection {
    background-color: #00ffe1;
    color: var(--contact-color);
  }

  .homepage-container {
    > section {
      padding: 64px 0;

      &.pt-0 {
        padding-top: 0;
      }
    }

    .text-light {
      > .container {
        > * {
          margin-top: 24px;
        }

        .text-xs {
          font-size: 12px;
        }
      }
    }
  }

  h2 {
    font-size: 40px;
    line-height: 1.2;
    color: #eee;
    font-weight: bold;
    font-family: 'Space Mono', -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Helvetica Neue',
      STHeiti, 'Microsoft Yahei', Tahoma, Simsun, sans-serif;

    > span {
      white-space: nowrap;
      font-family: inherit;
    }
  }

  p {
    font-size: 18px;
    color: #ddd;
    line-height: 1.8;
  }

  h3 {
    font-size: 28px;
    color: #eee;
    font-weight: bold;
    font-family: 'Space Mono', -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Helvetica Neue',
      STHeiti, 'Microsoft Yahei', Tahoma, Simsun, sans-serif;
  }

  .box-outlines {
    padding: 64px 48px;
    position: relative;

    p,
    h2 {
      width: 100%;
    }

    &::after,
    &::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      border: solid 2px var(--contact-color);
      pointer-events: none;
    }

    &::after {
      transform: translate(-4px, -8px);
    }

    &::before {
      transform: translate(4px, 8px);
    }
  }

  .bg-container {
    z-index: 1;

    > h2 {
      position: absolute;
      top: 48px;
      z-index: 2;

      > span {
        white-space: initial;
      }
    }

    img {
      max-width: 80%;
      pointer-events: none;
      -webkit-user-drag: none;
      user-select: none;
    }
  }

  @media (max-width: 1023px) {
    h2 {
      font-size: 34px;
    }

    h3 {
      font-size: 24px;
    }

    .box-outlines {
      padding: 56px 42px;
    }

    > .homepage-container {
      > section {
        padding: 48px 0;
      }
    }

    .bg-container {
      position: relative;
      top: initial;
      z-index: 1;

      h2 {
        top: 0;
        left: 0;
      }
    }
  }
`;
