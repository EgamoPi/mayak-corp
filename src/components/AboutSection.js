import { createElement as $ } from 'react';
import { Link } from 'react-router-dom';
import homeImg from '../img/amandine.jpeg';
//Reusable Styled Components
import { Container, SubContainer, Image, Hide } from '../styles';
//Animations
import Wave from './Wave';
import { titleAnimation, fade, photoAnimation } from '../animation';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return $(
    Container,
    null,
    $(
      SubContainer,
      { className: 'short-description' },
      $(
        'div',
        null,
        $(
          Hide,
          null,
          $(
            motion.h2,
            { variants: titleAnimation },
            $('span', null, 'We '),
            'work to make'
          )
        ),
        $(
          Hide,
          null,
          $(
            motion.h2,
            { variants: titleAnimation },
            'Your ',
            $('span', null, 'dreams '),
            'come'
          )
        ),
        $(
          Hide,
          null,
          $(motion.h2, { variants: titleAnimation }, $('span', null, 'True.'))
        )
      ),
      $(
        motion.p,
        { variants: fade },
        'Contact us for any project development!'
      ),
      $(
        Link,
        { to: '/contact' },
        $(motion.button, { variants: fade }, `Let's Work !`)
      )
    ),
    $(Image, null, $(motion.img, { src: homeImg, variants: photoAnimation })),
    $(Wave)
  );
};

export default AboutSection;
