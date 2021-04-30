import { createElement as $ } from 'react';
import styled from 'styled-components';

const Location = () =>
  $(
    Container,
    null,

    $('iframe', {
      src:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.493514660357!2d-0.26219128480406256!3d5.6414934343512595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf992a36b15ae3%3A0x25174c9491189192!2sAneeja%20Hospital!5e0!3m2!1sen!2sgh!4v1588345990588!5m2!1sen!2sgh',
      width: '100%',
      height: '500px',
      frameBorder: '',
      allowFullScreen: '',
    })
  );

export default Location;

const Container = styled.div`
  width: 100%;
`;
