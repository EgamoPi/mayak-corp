import { motion } from 'framer-motion';
import { createElement as $, useState } from 'react';
import styled from 'styled-components';
import { fade } from '../animation';

const Toggle = ({ children, title, contact }) => {
  const [toggle, setToggle] = useState(false);
  if (!contact) {
    return $(
      motion.div,
      {
        onClick: () => setToggle(!toggle),
        className: 'question',
        layout: true,
      },
      $(motion.h4, { layout: true }, title),
      toggle ? children : '',
      $('div', { className: 'faq-line' })
    );
  } else {
    return $(
      motion.div,
      { layout: true },
      $(
        Hide,
        {
          onClick: () => setToggle(!toggle),
          className: 'question',
          layout: true,
        },
        $(
          Social,
          { layout: true },
          $(Circle),
          $(motion.h2, { variants: fade }, title)
        )
      ),
      toggle ? children : '',
      $('div', { className: 'faq-line' })
    );
  }
};

export default Toggle;

const Hide = styled(motion.div)`
  overflow: hidden;
`;
const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #353535;
`;
const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
  }
  @media (max-width: 1500px) {
    h2 {
      font-size: 2.2rem;
    }
  }
`;
