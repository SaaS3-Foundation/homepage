import classnames from 'classnames';
import Footer from '../Footer';
import NavHeader from '../NavHeader';
import './index.scss';

function BaseLayout(props) {
  const { children, className } = props;
  const classes = classnames(
    {
      'base-layout': true
    },
    className
  );

  return (
    <div className={classes}>
      <NavHeader></NavHeader>
      <main className='main-wrap'>
        <div className='main-container'>{children}</div>
        <Footer></Footer>
      </main>
    </div>
  );
}
export default BaseLayout;
