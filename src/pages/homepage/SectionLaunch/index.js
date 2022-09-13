import img from '../../../static/img/homepage/workflow.png';
import './index.less';

function SectionLaunch() {
  const features = [
    {
      title: 'Oracle',
      content:
        'The real world is disconnected from the blockchain. Web2 data is not available to the on-chain smart contracts. Blockchain oracle comes to connect the real world and blockchain with zero trust.'
    },
    {
      title: 'Permissionless',
      content:
        'The developer can directly write the smart contract and deploy it on the blockchain without any permission. '
    },
    {
      title: 'Decentralization',
      content:
        'Current blockchain oracles, such as the famous chainlink and API3, require permission to deploy and are centralized on single-point servers. Whereas in SaaS3, we believe an oracle should be deployed permissionlessly and executed with decentralization, just like a smart contract. '
    },
    {
      title: 'dRuntime & dAPI',
      content:
        'SaaS3 builds a decentralized serverless runtime, namely dRuntime. Any web2 API can be one-click deployed by oracle operators on SaaS3 dRuntime to become decentralized API. Once a non-chain request comes, SaaS3 miners automatically execute the dAPIs.'
    }
  ];

  function getFeatureNodes() {
    return features.map((f, i) => {
      return (
        <div className='feature' key={i}>
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
            <span>SaaS3 Keywords</span>
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
