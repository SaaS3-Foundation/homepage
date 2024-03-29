import styled from 'styled-components';

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  > nav {
    background-color: var(--app-background-dark);
    border-bottom: 1px rgba(255, 255, 255, 0.25) solid;

    > .container {
      .logo {
        height: 50px;
      }

      .navbar-collapse {
        transition: max-height 0.5s ease;
        overflow: hidden;

        &.show {
          max-height: 1000px;
        }
      }
    }
  }

  .navbar-toggler {
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: 0.3s border;

    &:active,
    &:hover {
      border: 1px solid rgba(255, 255, 255, 1);
    }

    > .navbar-toggler-icon {
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
    }
  }

  @media (max-width: 1023px) {
    > nav {
      > .container {
        .logo {
          height: 40px;
        }
      }
    }
  }
`;
