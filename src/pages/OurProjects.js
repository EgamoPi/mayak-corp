import { createElement as $ } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

//Images
import dev from '../img/development.jpg';
import creativity from '../img/creativity.jpg';
import dmarketing1 from '../img/digital-marketing-1.jpeg';
//Animations
import { motion } from 'framer-motion';
import {
  pageAnimation,
  fade,
  photoAnimation,
  lineAnimation,
  slider,
  sliderContainer,
} from '../animation';
import { useScroll } from '../components/useScroll';
import ScrollTop from '../components/ScrollTop';

const OurProjects = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();

  //Static Data
  const dataServices = [
    {
      serviceName: 'IT-Product Development',
      image: dev,
      url: '/services/it-development',
      reference: null,
      variants: '',
      animate: '',
      initial: '',
    },
    {
      serviceName: 'Artistic Project Develoment',
      image: creativity,
      url: '/services/art-development',
      reference: element,
      variants: fade,
      animate: controls,
      initial: 'hidden',
    },
    {
      serviceName: 'Digital Marketing',
      image: dmarketing1,
      url: '/services/digital-marketing',
      reference: element2,
      variants: fade,
      animate: controls2,
      initial: 'hidden',
    },
  ];

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
      $('title', null, 'Services'),
      $('meta', {
        name: 'description',
        content:
          'We offer different services : Web Development, Digital Marketing & Design',
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
      motion.div,
      { variants: sliderContainer },
      $(Frame1, { variants: slider }),
      $(Frame2, { variants: slider }),
      $(Frame3, { variants: slider }),
      $(Frame4, { variants: slider })
    ),
    dataServices.map((service) =>
      $(ServiceComp, {
        serviceImage: service.image,
        serviceName: service.serviceName,
        serviceUrl: service.url,
        key: service.serviceName,
        reference: service.reference,
        variants: service.variants,
        animate: service.animate,
        initial: service.initial,
      })
    ),
    $(ScrollTop)
  );
};

export default OurProjects;

//Service Component
const ServiceComp = ({
  serviceImage,
  serviceName,
  serviceUrl,
  reference,
  variants,
  animate,
  initial,
}) => {
  return $(
    Service,
    { ref: reference, variants: variants, animate: animate, initial: initial },
    $(motion.h2, { variants: fade }, serviceName),
    $(motion.div, { className: 'line', variants: lineAnimation }),
    $(
      Link,
      { to: serviceUrl },
      $(
        Hide,
        null,
        $(motion.img, { src: serviceImage, variants: photoAnimation })
      )
    )
  );
};

//Styled Component
const Services = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  background: #fff;
  h2 {
    padding: 1rem 0rem;
    color: #0c090d;
  }
  @media (max-width: 1200px) {
    padding: 2rem 1rem;
  }
`;

const Service = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #f15946;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;

//Frame Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fefe;
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background: #f15946;
`;
const Frame3 = styled(Frame1)`
  background: #f9c22e;
`;
const Frame4 = styled(Frame1)`
  background: #53b3cb;
`;
