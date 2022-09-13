import classnames from 'classnames';
import './index.less';

function Button(props) {
  const _class = 'custom-button';
  const { type, href, onClick, blank, className } = props;
  const classes = classnames(
    {
      [_class]: true,
      [`${_class}-${type || 'info'}`]: true
    },
    className
  );

  function handerClick() {
    if (href) {
      if (blank) {
        window.open(href);
      } else {
        window.location.href = href;
      }
    }
    onClick && onClick();
  }
  return (
    <button className={classes} onClick={(event) => handerClick(event)}>
      {props.children}
    </button>
  );
}

export default Button;
