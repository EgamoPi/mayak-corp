import { createElement as $ } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import Toggle from '../components/Toggle';
import IframeMap from '../components/IframeMap';
import ContactForm from '../components/ContactForm';
//Animations
import { motion, AnimateSharedLayout } from 'framer-motion';
import { pageAnimation, titleAnimation } from '../animation';
import ScrollTop from '../components/ScrollTop';

const ContactUS = () => {
  return $(
    ContactStyle,
    {
      style: {
        background: '#fff',
      },
      variants: pageAnimation,
      initial: 'hidden',
      animate: 'show',
      exit: 'exit',
    },
    $(
      Helmet,
      null,
      $('title', null, 'Contact Us'),
      $('meta', {
        name: 'description',
        content: 'Contact Us',
      }),
      $('meta', {
        name: 'keywords',
        content: 'Contact, Location, Partnership',
      })
    ),
    $(
      Title,
      null,
      $(Hide, null, $(motion.h2, { variants: titleAnimation }, 'Get In Touch'))
    ),
    dataContact.map((contactType) =>
      $(ContactComponent, {
        title: contactType.title,
        paragraph1: contactType.paragraph1,
        paragraph2: contactType.paragraph2,
        contact: contactType.contact,
        component: contactType.component,
        classname: contactType.className,
        key: contactType.title,
      })
    ),
    $(ScrollTop)
  );
};

export default ContactUS;

//Contact Component
const ContactComponent = ({
  title,
  paragraph1,
  paragraph2,
  contact,
  component,
  classname,
}) => {
  return $(
    AnimateSharedLayout,
    null,
    $(
      Toggle,
      { title: title, contact: contact },
      $(
        'div',
        { className: classname },
        $('p', null, paragraph1),
        $('p', null, paragraph2),
        component === '' ? null : $(component)
      )
    )
  );
};

//Styled Components
const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
  .faq-line {
    background: #ccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    &:hover {
      cursor: pointer;
    }
  }
  .contact {
  }
  @media (max-width: 1500px) {
    padding: 2rem;
  }
`;
const Title = styled.div`
  margin-bottom: 4rem;
  color: black;
  @media (max-width: 1500px) {
    margin-top: 5rem;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;

const dataContact = [
  {
    title: 'Collaborators & Sponsors',
    paragraph1: 'The people behind the scene of your dreams.',
    paragraph2: '',
    contact: true,
    component: '',
    className: 'callaborators',
  },
  {
    title: 'Contact',
    paragraph1: 'Business, Suggestions or even jokes, let us know !',
    paragraph2: '',
    contact: true,
    component: ContactForm,
    className: 'contact',
  },
  {
    title: 'Locate Us',
    paragraph1: "You are not afraid of COVID-19 ? We neither, let's meet !",
    paragraph2: '',
    contact: true,
    component: IframeMap,
    className: 'locate-us',
  },
  {
    title: 'Be part of the team',
    paragraph1:
      'Become a collaborator, a sponsor or just a simple fan, there is always place at the Mayak Family.',
    paragraph2: '',
    contact: true,
    component: '',
    className: 'be-part',
  },
];
