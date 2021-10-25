import { createElement as $ } from 'react';
import styled from 'styled-components';

const Location = () =>
  $(
    Container,
    null,

    $('iframe', {
      src: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15882.830056701789!2d-0.2106785!3d5.6101449!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc20f760e852690b3!2sMayak%20Technologies%20%26%20Consulting!5e0!3m2!1sen!2sgh!4v1635177222835!5m2!1sen!2sgh',
      width: '100%',
      height: '500px',
      frameBorder: '',
      allowFullScreen: '',
      title: 'location',
    })
  );

export default Location;

const Container = styled.div`
  width: 100%;
`;

// <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15882.830056701789!2d-0.2106785!3d5.6101449!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc20f760e852690b3!2sMayak%20Technologies%20%26%20Consulting!5e0!3m2!1sen!2sgh!4v1635177222835!5m2!1sen!2sgh" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
