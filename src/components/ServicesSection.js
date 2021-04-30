import { createElement as $ } from 'react';
//Styles
import styled from 'styled-components';
import { Container, SubContainer, Image } from '../styles';
import { useScroll } from './useScroll';
import { fade } from '../animation';
//Import Icons
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import serviceImg from '../img/plants.jpeg';

const ServicesSection = () => {
  const [element, controls] = useScroll();
  return $(
    Services,
    { variants: fade, animate: controls, initial: 'hidden', ref: element },
    $(
      SubContainer,
      null,
      $('h2', null, 'High ', $('span', null, 'quality '), 'services'),
      $(
        Cards,
        null,
        dataServices.map((service) =>
          $(CardComponent, {
            image: service.image,
            cardParagraph: service.cardParagraph,
            cardTitle: service.cardTitle,
            key: service.cardTitle,
          })
        )
      )
    ),
    $(Image, { className: 'image' }, $('img', { src: serviceImg }))
  );
};

export default ServicesSection;

//Card Component
const CardComponent = ({ image, cardParagraph, cardTitle }) => {
  return $(
    Card,
    { className: 'card' },
    $(
      'div',
      { className: 'icon' },
      $('img', { src: image }),
      $('h3', null, cardTitle)
    ),
    $('p', null, cardParagraph)
  );
};

//Styled Component
const Services = styled(Container)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1200px) {
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: 20rem;
  //justify-content: center;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: none;
      text-transform: uppercase;
      color: white;
      border-top: 1px solid #f15946;
      border-bottom: 1px solid #f15946;

      padding: 1rem;
    }
  }
`;

const dataServices = [
  {
    image: clock,
    cardTitle: 'Efficient',
    cardParagraph: 'Your time is valuable, and we respect it.',
  },
  {
    image: teamwork,
    cardTitle: 'Teamwork',
    cardParagraph: 'International collabaration for a well-thought project.',
  },
  {
    image: diaphragm,
    cardTitle: 'Creativity',
    cardParagraph: 'Your project is unique, and we know it.',
  },
  {
    image: money,
    cardTitle: 'Affordable',
    cardParagraph: 'We want to help you no matter your budget.',
  },
];
