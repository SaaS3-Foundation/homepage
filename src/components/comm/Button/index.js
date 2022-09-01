import './index.scss';

function Button(props) {
  const _class = 'custom-button';
  const { type } = props;

  return <button className={`${_class} ${_class}-${type || 'info'}`}>{props.children}</button>;
}

export default Button;
