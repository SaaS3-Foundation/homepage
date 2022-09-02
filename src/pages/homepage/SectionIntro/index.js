import img from '../../../static/img/homepage/detail.png';
import './index.scss';

function SectionIntro() {
  return (
    <section className='section-intro'>
      <div className='container'>
        <div className='wrap'>
          <h2>Next-Gen SaaS for Those Who Develop Fully Decentralized Apps</h2>
        </div>

        <div className='wrap flex md:pt-4'>
          <p className='ml-auto'>
            Farewell to the era in which DApps need permission to be deployed on centralized
            servers. SaaS3 makes a decentralized, permissionless oracle network available on
            multiple public chains. Develop a real decentralized app using our permissionless
            oracles, or be a SaaS3 miner by one-click launching your own oracle.
          </p>
        </div>
        <div className='box py-36 md:py-20 w-4/5 mx-auto'>
          <img className='mx-auto' src={img} alt='box vortexs' />
        </div>

        <div className='wrap'>
          <h2>Mechanism of SaaS3</h2>
          <p>
            Based on a decentralized, permissionless oracle network, SaaS3 can upload off-chain data
            feeds of any data category to the on-chain, and offers trustful off-chain computation
            services.
          </p>
          <p>
            Centralized servers are no longer needed with SaaS3 miners providing computation
            resources. Developers can easily set their customized oracles, and deploy any web2 API.
          </p>
        </div>
        <div className='wrap flex pt-20 md:pt-10'>
          <div className='box-outlines ml-auto w-1/2 md:w-full'>
            <h2>What is SaaS3</h2>
            <p>
              SaaS3 is the next generation software-as-a-Service after SaaS 1.0 and 2.0. The first
              generation SaaS is web-based software on the browser (chrome, safari, Firefox) click
              to use with no interactions among different software. SaaS2 solves the problem by
              integrating isolated software into an all-in-one SaaS platform (google docs, etc.),
              but it's still controlled and authorized by centralized institutions.
            </p>
            <p>
              SaaS3 = SaaS2+Decentralization+Permissionless. It provides services to web3
              developers, empowering them with highly customizable oracles by integrating the
              computation resources of the miners.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionIntro;
