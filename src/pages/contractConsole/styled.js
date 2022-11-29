import styled from 'styled-components';
import BaseLayout from '@/components/layout/BaseLayout';
import bg from '@/static/img/marketplace/marketplace-bg.png';

export const StyledBaseLayout = styled(BaseLayout)`
  background-color: var(--app-background-dark);
  background-image: url(${bg});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: left top;
  background-attachment: fixed;
  color: white;
  padding: 60px 0 0;

  .img-wrap {
    width: 210px;
  }

  code.hljs {
    background-color: transparent;
  }
`;
