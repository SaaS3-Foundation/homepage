import { IconArrowRight } from '@douyinfe/semi-icons';
import { Box } from './styled';

function SectionFlight() {
  const flights = [
    {
      title: 'Build',
      children: [
        {
          title: 'Kusama Docs',
          href: '',
        },
        {
          title: 'Learn Substrate',
          href: '',
        },
      ],
    },
    {
      title: 'Validate',
      children: [
        {
          title: 'Start Validating',
          href: '',
        },
        {
          title: 'Technical Updates',
          href: '',
        },
      ],
    },
    {
      title: 'Join',
      children: [
        {
          title: 'Ambassador Program',
          href: '',
        },
        {
          title: 'Nominate a Validator',
          href: '',
        },
      ],
    },
  ];

  function getFlightBoxs() {
    return flights.map((flight, i) => (
      <div className="box-outlines" key={i}>
        <h3>{flight.title}</h3>
        {flight.children.map((child, i2) => (
          <a
            key={i2}
            className="with-icon"
            href={child.href}
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            {child.title}
            <IconArrowRight />
          </a>
        ))}
      </div>
    ));
  }

  return (
    <Box className="section-flight">
      <div className="container">
        <h2 className="text-center">Take Flight</h2>
        <div className="flight-wrap flex pc:justify-between flex-wrap">{getFlightBoxs()}</div>
      </div>
    </Box>
  );
}

export default SectionFlight;
