import img from '../../../static/img/homepage/3.png';
import './index.scss';

function SectionProject() {
  const features = [
    {
      title: 'Innovation',
      content:
        'Kusama is built by the same teams as Polkadot, using nearly the same code and tools. The network places the latest tech from Parity Technologies and Web3 Foundation in the hands of developers, even before those features make it to Polkadot.'
    },
    {
      title: 'Scalability',
      content:
        'Kusama’s sharded blockchains and open governance provide a scalable and future-proof infrastructure for businesses, marketplaces and applications to deploy and mature.'
    },
    {
      title: 'Interoperability',
      content:
        'Kusama brings multiple blockchains together into one sharded network, freeing developers from the siloes created by legacy blockchain networks.'
    },
    {
      title: 'Customization',
      content:
        'With Substrate, developers can build their own app-specific blockchain and connect it to Kusama.'
    }
  ];

  function getFeatureNodes() {
    return features.map((f) => {
      return (
        <div className='feature'>
          <h3>{f.title}</h3>
          <p>{f.content}</p>
        </div>
      );
    });
  }
  return (
    <section className='section-project'>
      <div className='container relative'>
        <div className='bg-container pc:sticky'>
          <div className='text-center opacity-0'>
            <img className='inline-block opacity-50' src={img} alt='bg' />
          </div>
          <h2 className='absolute'>
            <span>Bring</span>
            <br />
            <span>to your project</span>
          </h2>
        </div>

        <div className='features wrap flex relative'>
          <div className='wrap-content ml-auto'>{getFeatureNodes()}</div>
        </div>
      </div>
    </section>
  );
}

export default SectionProject;
