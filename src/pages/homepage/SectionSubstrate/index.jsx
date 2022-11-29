import Button from '@/components/comm/Button/CustomButton/index';
import { Box } from './styled';

function SectionSubstrate() {
  return (
    <Box className="section-substrage">
      <div className="container">
        <div className="wrap flex md:flex-wrap">
          <div className="wrap-left">
            <h3 className="inline-block">KSM Token Utilization</h3>
          </div>
          <div className="wrap-right">
            <img
              src="https://kusama.network/assets/img/substrate-playground.png"
              alt="Substrate Playground"
            />
            <p>
              Your Substrate Blockchain is natively compatible with Kusama, making it simple to
              secure your blockchain and communicate with Kusama&apos;s network.
            </p>
            <div className="button-wrap">
              <Button>Learn More</Button>
              <Button type="primary">
                Substrate Playground
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
}

export default SectionSubstrate;
