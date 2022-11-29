import styled from 'styled-components';

export const Box = styled.div`
  .contact-unfold {
    max-width: 24px;
    transition: max-width 0.5s ease;

    &:not(:last-of-type) {
      margin-right: 24px;
    }

    > span {
      font-size: 24px;
      vertical-align: middle;
    }

    > svg {
      fill: inherit;
    }

    &.discord {
      max-width: initial;

      > svg {
        height: 24px;
        width: auto;
      }
    }
  }

  .contact-unfold-text {
    margin-left: 12px;
    font-size: 16px;
  }

  @media (min-width: 1024px) {
    .contact-unfold {
      &:hover {
        max-width: 15rem;
        color: var(--contact-color);
        fill: var(--contact-color);
      }
    }
  }
`;
