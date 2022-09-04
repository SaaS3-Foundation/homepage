import img from '../../../static/img/homepage/dapi.png';
import './index.scss';

function SectionProject() {
  const features = [
    {
      title: 'Creator Stake',
      content: 'To create a dAPI, creator should stake $SAAS tokens.'
    },
    {
      title: 'Miner Stake',
      content: 'To become miners in the network, they have to stake $SAAS tokens.'
    },
    {
      title: 'Retailer Stake',
      content:
        'Retailer holders stake $SAAS token to dAPIs and Miners as the collateral to get incentive rewards.'
    },
    {
      title: 'API Usage Fee',
      content: 'Users request SaaS3 oracle and pay with the $SAAS token.'
    },
    {
      title: 'GAS Fee',
      content: '$SAAS token is paid by the API requesters to the miners to execute the dAPI.'
    },
    {
      title: 'Community Governance',
      content: '$SAAS token is used for Governance behaviour in the SaaS3 DAO and community.'
    }
  ];

  function getFeatureNodes() {
    return features.map((f, index) => {
      return (
        <div className='feature' key={index}>
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
          <div className='text-center'>
            <img className='inline-block opacity-50' src={img} alt='bg' />
          </div>
          <h2 className='absolute'>
            <span>Utilities of $SAAS token</span>
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
