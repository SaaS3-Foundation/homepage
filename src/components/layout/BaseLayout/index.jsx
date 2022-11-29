import classnames from 'classnames';
import Footer from '../Footer';
import NavHeader from '../NavHeader';

import { StyledBaseLayout } from './styled';

function BaseLayout(props) {
  const { children, className, mainClassName } = props;

  return (
    <StyledBaseLayout className={classnames('base-layout', className)}>
      <NavHeader />
      <main className="main-wrap">
        <div className={classnames('main-container', mainClassName)}>{children}</div>
        <Footer />
      </main>
    </StyledBaseLayout>
  );
}
export default BaseLayout;
