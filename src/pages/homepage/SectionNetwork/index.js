import img from '../../../static/img/homepage/4.png';
import './index.scss';

function SectionNetwork() {
  return (
    <section className='section-network'>
      <div className='container'>
        <div className='bg-container relative'>
          <div className='text-center'>
            <img
              className='inline-block opacity-50'
              src={img}
              alt='bg'
            />
          </div>
          <h2 className='absolute'>
            <span>Develop on the</span>
            <br />
            <span>Canary Network</span>
          </h2>
          <p className='wrap-text md:relative pc:absolute'>
            Many teams will choose Kusama for their dapp or parachain and remain exclusively on
            Kusama. Other teams will join Kusama as a temporary preparation ground for deployment on
            Polkadot.
          </p>
        </div>
      </div>
    </section>
  );
}

export default SectionNetwork;
