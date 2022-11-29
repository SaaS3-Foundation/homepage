import { Button } from '@douyinfe/semi-ui';
import { useState } from 'react';
import { useNavigate } from 'react-router';

function CustomButton(props) {
  const nav = useNavigate();
  const {
    href, onClick, blank, navOptions,
  } = props;
  const [loading, setLoading] = useState(false);

  const handerClick = async () => {
    if (href) {
      if (blank) {
        window.open(href);
      } else {
        nav(href, navOptions);
      }
    }
    if (onClick) {
      setLoading(true);
      try {
        await onClick();
      } catch (error) {

      }
      setLoading(false);
    }
  };
  return (
    <Button loading={loading} {...props} blank="" onClick={handerClick}>
      {props.children}
    </Button>
  );
}

export default CustomButton;
