import { createElement as $ } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const Nav = () => {
  const { pathname } = useLocation();
  return $(
    StyledNav,
    null,
    $('h1', null, $(Link, { to: '/', id: 'Logo' }, 'Mayak Corp.')),
    $(
      'ul',
      null,
      $(
        'li',
        null,
        $(Link, { to: '/' }, 'About'),
        $(Line, {
          transition: { duration: 1 },
          initial: { width: '0%' },
          animate: { width: pathname === '/' ? '50%' : '0%' },
        })
      ),
      $(
        'li',
        null,
        $(Link, { to: '/services' }, 'Services'),
        $(Line, {
          transition: { duration: 1 },
          initial: { width: '0%' },
          animate: { width: pathname === '/services' ? '50%' : '0%' },
        })
      ),
      $(
        'li',
        null,
        $(Link, { to: '/contact' }, 'Contact Us'),
        $(Line, {
          transition: { duration: 1 },
          initial: { width: '0%' },
          animate: { width: pathname === '/contact' ? '50%' : '0%' },
        })
      )
    )
  );
};

export default Nav;

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #0c090d;
  position: sticky;
  top: 0;
  z-index: 10;
  a {
    color: #fff;
    text-decoration: none;
    font-family: 'DotGothic16', sans-serif;
    font-size: 1.3rem;
  }
  ul {
    display: flex;
    list-style: none;
  }
  li {
    padding-left: 10rem;
    position: relative;
  }
  #Logo {
    font-size: 1.8rem;
    font-family: 'Krona One', sans-serif;
    color: #fff;
    //font-weight: lighter;
  }
  @media (max-width: 1200px) {
    flex-direction: column;
    padding: 1rem;
    #Logo {
      display: inline-block;
      margin: 1rem;
    }
    ul {
      padding: 2rem;
      justify-content: space-around;
      width: 100%;
      li {
        padding: 0;
      }
    }
  }
`;

const Line = styled(motion.div)`
  height: 0.3rem;
  background: #f15946;
  width: 0;
  position: absolute;
  bottom: -80%;
  //left: 20%;
`;
