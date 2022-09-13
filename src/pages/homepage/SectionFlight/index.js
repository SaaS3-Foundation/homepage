import { ArrowRightOutlined, SwapOutlined } from '@ant-design/icons';
import './index.less';

function SectionFlight() {
  const flights = [
    {
      title: 'Build',
      children: [
        {
          title: 'Kusama Docs',
          href: ''
        },
        {
          title: 'Learn Substrate',
          href: ''
        }
      ]
    },
    {
      title: 'Validate',
      children: [
        {
          title: 'Start Validating',
          href: ''
        },
        {
          title: 'Technical Updates',
          href: ''
        }
      ]
    },
    {
      title: 'Join',
      children: [
        {
          title: 'Ambassador Program',
          href: ''
        },
        {
          title: 'Nominate a Validator',
          href: ''
        }
      ]
    }
  ];

  function getFlightBoxs() {
    return flights.map((f, i) => {
      return (
        <div className='box-outlines' key={i}>
          <h3>{f.title}</h3>
          {f.children.map((child, i2) => {
            return (
              <a
                key={i2}
                className='with-icon'
                href={child.href}
                target='_blank'
                rel='nofollow noopener noreferrer'
              >
                {child.title}
                <ArrowRightOutlined />
              </a>
            );
          })}
        </div>
      );
    });
  }

  return (
    <section className='section-flight'>
      <div className='container'>
        <h2 className='text-center'>Take Flight</h2>
        <div className='flight-wrap flex pc:justify-between flex-wrap'>{getFlightBoxs()}</div>
      </div>
    </section>
  );
}

export default SectionFlight;
