import { createElement as $ } from 'react';
import { Helmet } from 'react-helmet';
//Components
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import FaqSection from '../components/FaqSection';
//Animations
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';
import ScrollTop from '../components/ScrollTop';

const AboutUs = () => {
  return $(
    motion.div,
    {
      variants: pageAnimation,
      initial: 'hidden',
      animate: 'show',
      exit: 'exit',
    },
    $(
      Helmet,
      null,
      $('title', null, 'About Us'),
      $('meta', {
        name: 'description',
        content: 'Internation Web Development & Design Company',
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
    $(AboutSection),
    $(ServicesSection),
    $(FaqSection),
    $(ScrollTop)
  );
};

export default AboutUs;
