import './index.scss';

function SectionLaunch() {
  return (
    <section className='section-launch'>
      <div className='container relative'>
        <div className='launch-banner relative sticky-box pc:sticky'>
          <div className='text-center'>
            <img
              className='inline-block opacity-50'
              src='https://kusama.network/assets/img/mesh_graph_1.png'
              alt='bg'
            />
          </div>
          <h2 className='absolute'>
            Launch your
            <br />
            custom blockchain
          </h2>
        </div>

        <div className='features wrap flex relative'>
          <div className='wrap-content ml-auto'>
            <div className='feature'>
              <h3>Fast Iteration</h3>
              <p>
                Move fast and ship your product. Kusama’s risk-taking and nimble mentality allows
                developers to move swiftly through the governance and upgrade process, enabling
                rapid progress and growth.
              </p>
            </div>
            <div className='feature'>
              <h3>Fast Iteration</h3>
              <p>
                Move fast and ship your product. Kusama’s risk-taking and nimble mentality allows
                developers to move swiftly through the governance and upgrade process, enabling
                rapid progress and growth.
              </p>
            </div>
            <div className='feature'>
              <h3>Fast Iteration</h3>
              <p>
                Move fast and ship your product. Kusama’s risk-taking and nimble mentality allows
                developers to move swiftly through the governance and upgrade process, enabling
                rapid progress and growth.
              </p>
            </div>
            <div className='feature'>
              <h3>Fast Iteration</h3>
              <p>
                Move fast and ship your product. Kusama’s risk-taking and nimble mentality allows
                developers to move swiftly through the governance and upgrade process, enabling
                rapid progress and growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionLaunch;
