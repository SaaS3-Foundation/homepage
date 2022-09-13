import './index.less';

function SectionUtilization() {
  return (
    <section className='section-utilization'>
      <div className='container'>
        <div className='wrap flex md:flex-wrap'>
          <div className='wrap-left'>
            <h3 className='inline-block'>KSM Token Utilization</h3>
          </div>
          <div className='wrap-right'>
            <p><strong>Validate</strong>the network</p>
            <p><strong>Nominate</strong>the validators</p>
            <p><strong>Bond</strong>parachains or parathreads</p>
            <p><strong>Vote</strong>on governance referenda</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionUtilization;
