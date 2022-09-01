import './index.scss';

function Button(props) {
  const _class = 'custom-button';
  const { type, href, onClick, blank } = props;
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
    <button
      className={`${_class} ${_class}-${type || 'info'}`}
      onClick={(event) => handerClick(event)}
    >
      {props.children}
    </button>
  );
}

export default Button;
