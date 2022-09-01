import img from '../../../static/img/homepage/3.png';
import './index.scss';

function SectionLaunch() {
  const features = [
    {
      title: 'Fast Iteration',
      content:
        'Move fast and ship your product. Kusama’s risk-taking and nimble mentality allows developers to move swiftly through the governance and upgrade process, enabling rapid progress and growth.'
    },
    {
      title: 'Low Economic Barriers',
      content:
        'Launch your custom blockchain (parachain) project with low barriers to entry. Ideal for lean startups looking to move fast and iterate.'
    },
    {
      title: 'Advanced Technology',
      content:
        'Build on a next-generation, sharded, multichain network, while employing the newest features before they are deployed on Polkadot.'
    },
    {
      title: 'Open Governance',
      content:
        'Kusama is owned and governed by a community of network participants who vote on and control the evolution of the network. Have a voice and make your mark in the evolution of the network.'
    },
    {
      title: 'Engaged Community',
      content:
        'Leverage Polkadot’s global brand and developer community for your parachain, parathread or dApp.'
    },
    {
      title: 'Valuable Experience',
      content:
        'For teams looking to move to Polkadot after fine-tuning on Kusama, begin building your community and brand on Kusama before deployment.'
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
    <section className='section-launch'>
      <div className='container relative'>
        <div className='bg-container pc:sticky'>
          <div className='text-center'>
            <img className='inline-block opacity-50' src={img} alt='bg' />
          </div>
          <h2 className='absolute'>
            <span>Launch your</span>
            <br />
            <span>custom blockchain</span>
          </h2>
        </div>

        <div className='features wrap flex relative'>
          <div className='wrap-content ml-auto'>{getFeatureNodes()}</div>
        </div>
      </div>
    </section>
  );
}

export default SectionLaunch;
