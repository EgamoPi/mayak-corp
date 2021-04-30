import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: #fefeff;
  font-size: 80%;
  @media (max-width: 1024px) {
    padding: 1rem;
    display: block;
    text-align: center;
  }
`;
export const SubContainer = styled.div`
  flex: 1;
  padding-right: 2rem;
  z-index: 2;
  h2 {
    font-weight: lighter;
  }
  @media (max-width: 800px) {
    padding: 0;
  }
`;
export const Image = styled.div`
  flex: 1;
  overflow: hidden;
  z-index: 2;
  img {
    width: 100%;
    height: 60vh;
    object-fit: cover;
    border-radius: 10px;
  }
  @media (max-width: 800px) {
    img {
      height: 40vh;
    }
  }
`;
//Hide the overflow from animation on animated components
export const Hide = styled.div`
  overflow: hidden;
`;
