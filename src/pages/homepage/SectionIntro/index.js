import './index.scss';

function SectionIntro() {
  return (
    <section className='section-intro'>
      <div className='container'>
        <div className='wrap'>
          <h2>The Scalable, Multichain Network for Radical Innovation.</h2>
        </div>

        <div className='wrap flex md:pt-4'>
          <p className='ml-auto'>
            Unprecedented interoperability and scalability for blockchain developers who want to
            quickly push the limits of what’s possible. Built using Substrate with nearly the same
            codebase and industry-leading multichain infrastructure as Kusama’s cousin, Polkadot.
          </p>
        </div>
        <div className='box py-36 md:py-20'>
          <img
            className='mx-auto'
            src='https://kusama.network/assets/img/home-vortexs.svg'
            alt='box vortexs'
          />
        </div>

        <div className='wrap'>
          <h2>Origin of Kusama</h2>
          <p>
            The relationship between society and technology has deteriorated to the point where
            large entities routinely stretch and overstep their authority.
          </p>
          <p>
            Kusama is a network built as a risk-taking, fast-moving ‘canary in the coal mine’ for
            its cousin Polkadot. It's a living platform built for change agents to take back
            control, spark innovation and disrupt the status quo.
          </p>
        </div>
        <div className='wrap flex pt-20 md:pt-10'>
          <div className='box-outlines ml-auto w-1/2 md:w-full'>
            <h2>What is Kusama?</h2>
            <p>
              Kusama is a scalable network of specialized blockchains built using Substrate and
              nearly the same codebase as Polkadot. The network is an experimental development
              environment for teams who want to move fast and innovate on Kusama, or prepare for
              deployment on Polkadot.
            </p>
            <p>
              Kusama was founded in 2019 by Gavin Wood, founder of Polkadot and co-founder and
              former CTO of Ethereum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionIntro;
