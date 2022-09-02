import img from '../../../static/img/homepage/4.png';
import './index.scss';

function SectionNetwork() {
  return (
    <section className='section-network'>
      <div className='container'>
        <div className='bg-container relative'>
          <div className='text-center'>
            <img className='inline-block opacity-50' src={img} alt='bg' />
          </div>
          <h2 className='absolute'>
            <span>2-layer Aggregation</span>
          </h2>
          <p className='wrap-text md:relative pc:absolute'>
            Different from traditional oracles such as Chainlink and API3, which only have one-layer
            aggregation, SaaS3 applies two-layer aggregation to improve data fidelity. The first
            layer aggregates the multiple miner’s outputs to be one particular API’s response, and
            the second layer aggregates the different API responses to finalize the output and
            return it to on-chain protocols.
          </p>
        </div>
      </div>
    </section>
  );
}

export default SectionNetwork;
