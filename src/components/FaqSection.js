import { createElement as $ } from 'react';
import styled from 'styled-components';
import { Container } from '../styles';
import Toggle from './Toggle';
import { AnimateSharedLayout } from 'framer-motion';

const FaqSection = () => {
  return $(
    Faq,
    { className: 'faq' },
    $('h2', null, 'Any Questions', $('span', null, ' Faq')),
    dataQA.map((qAnswer) =>
      $(QAComponent, {
        question: qAnswer.question,
        paragraph1: qAnswer.paragraph1,
        paragraph2: qAnswer.paragraph2,
        key: qAnswer.question,
      })
    )
  );
};

export default FaqSection;

//Styled Component
const Faq = styled(Container)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #ccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    cursor: pointer;
    padding: 3rem 0rem;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

//Q/A Component
const QAComponent = ({ question, paragraph1, paragraph2 }) => {
  return $(
    AnimateSharedLayout,
    null,
    $(
      Toggle,
      { title: question },
      $(
        'div',
        { className: 'answer' },
        $('p', null, paragraph1),
        $('p', null, paragraph2)
      )
    )
  );
};

const dataQA = [
  {
    question: 'How do I start ?',
    paragraph1: 'First you need to have some kind of developed idea',
    paragraph2: 'Something that we could start working from.',
  },
  {
    question: 'How long will it take ?',
    paragraph1: 'It all depends on the project type and services were offering',
    paragraph2:
      'Simple project will take 2 weeks to a month while bigger project could take up to 6 months.',
  },
  {
    question: 'Payment Methods',
    paragraph1: 'Depending on your location on earth, payment method may vary.',
    paragraph2:
      'Available payment methods: Credit Card, Mobile Money, Bank Transfer. Soon we will be accepting Crypto Currencies.',
  },
];
