import { createElement as $, useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { DataServices } from '../servicesState';
import { Helmet } from 'react-helmet';

//Animations
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

const ServiceDetail = () => {
  //States
  const history = useHistory();
  const [services] = useState(DataServices);
  const [service, setService] = useState(null);

  const url = history.location.pathname;
  const serviceTitle = url.split('/')[2].toUpperCase().split('-').join(' ');
  //useEffect
  useEffect(() => {
    const currentService = services.filter(
      (stateService) => stateService.url === url
    );
    setService(currentService);
  }, [services, url]);

  if (!service) {
    return null;
  } else {
    const item = service[0];
    return $(
      Services,
      {
        variants: pageAnimation,
        initial: 'hidden',
        animate: 'show',
        exit: 'exit',
      },
      $(
        Helmet,
        null,
        $('title', null, `Services | ${serviceTitle} `),
        $('meta', {
          name: 'description',
          content: `${serviceTitle}`,
        }),
        $('meta', {
          name: 'robots',
          content: 'index, follow',
        }),
        $('meta', {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1.0',
        })
      ),
      $(
        Headline,
        null,
        $('h2', null, item.title),
        $('img', { src: item.mainImg })
      ),
      $(
        Descriptions,
        null,
        item.descriptions.map((desc) =>
          $(ServiceComponent, {
            title: desc.title,
            description: desc.description,
            key: desc.title,
          })
        )
      ),
      $(
        ImageDisplay,
        null,
        $('img', { src: item.secondaryImg, alt: 'service' })
      )
    );
  }
};
export default ServiceDetail;

//Styled Component
const Services = styled(motion.div)`
  color: white;
`;
const Headline = styled.div`
  min-height: 70vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 50vh;
    object-fit: cover;
  }
`;
const Descriptions = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 1500px) {
    margin: 2rem;
    display: block;
  }
`;
const DescriptionStyle = styled.div`
  padding: 5rem;
  h3 {
    font-size: 2rem;
  }
  .line {
    width: 50%;
    background: #f15946;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
`;
const ImageDisplay = styled.div`
  img {
    width: 100%;
    height: 60vh;
    object-fit: cover;
  }
`;

//Service Component
const ServiceComponent = ({ title, description }) => {
  return $(
    DescriptionStyle,
    null,
    $('h3', null, title),
    $('div', { className: 'line' }),
    $('p', null, description)
  );
};
