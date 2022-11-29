import { Box } from './styled';

function SectionParachains() {
  return (
    <Box className="section-parachains">
      <div className="container">
        <div className="wrap flex md:flex-wrap">
          <div className="wrap-left">
            <h3 className="inline-block">Diversified Data Categories</h3>
          </div>
          <div className="wrap-right">
            <p>Stock price</p>
            <p>Sports</p>
            <p>Housing price</p>
            <p>Election</p>
            <p>Land price</p>
            <p>Competation</p>
            <p>...</p>
          </div>
        </div>
      </div>
    </Box>
  );
}

export default SectionParachains;
