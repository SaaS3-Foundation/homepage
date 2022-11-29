import img from '@/static/img/homepage/layout-2.png';
import { TextWrap } from './styled';

function SectionNetwork() {
  return (
    <section className="section-network">
      <div className="container">
        <div className="bg-container relative">
          <div className="text-center">
            <img className="inline-block" src={img} alt="bg" />
          </div>
          <h2 className="absolute">
            <span>2-layer Aggregation</span>
          </h2>
          <div className="wrap flex mt-10">
            <TextWrap className="wrap-text md:relative ml-auto">
              SaaS3 applies two-layer aggregation to improve data fidelity.
              The first layer aggregates the multiple miner’s outputs to be one particular API’s
              response, and the second layer aggregates the different API responses to finalize the
              output and return it to on-chain protocols.
            </TextWrap>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionNetwork;
