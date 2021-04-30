import { createElement as $ } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const { register, errors, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      const tempParams = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        tel: data.tel,
        about: data.selectedBtn,
        message: data.message,
      };

      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        tempParams,
        process.env.REACT_APP_USER_ID
      );
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return $(
    Container,
    null,
    $(
      FormContainer,
      null,
      $(ContactInfo),
      $(
        FormUi,
        { onSubmit: handleSubmit(onSubmit), noValidate: true },
        $('h2', null, 'Contact Us'),
        $(
          'div',
          { className: 'col' },
          $(
            'div',
            { className: 'form-group' },
            $('label', null, 'First Name'),
            $('input', {
              type: 'text',
              id: 'firstName',
              ...register('firstName', {
                required: { value: true, message: 'Please enter your name' },
                maxLength: {
                  value: 30,
                  message: 'Please use 30 characters or less',
                },
              }),
            })
            /* errors &&
              $('span', { className: 'errorMessage' }, errors.name.message) */
          ),
          $(
            'div',
            { className: 'form-group' },
            $('label', null, 'Last Name'),
            $('input', {
              type: 'text',
              ...register('lastName', {
                required: { value: true, message: 'Please enter your name' },
                maxLength: {
                  value: 30,
                  message: 'Please use 30 characters or less',
                },
              }),
            })
            /* errors.lastName &&
              $('span', { className: 'errorMessage' }, errors.lastName.message) */
          )
        ),
        $(
          'div',
          { className: 'col' },
          $(
            'div',
            { className: 'form-group' },
            $('label', null, 'E-Mail'),
            $('input', {
              type: 'email',
              ...register('email', {
                required: { value: true, message: 'Please enter your email' },
              }),
            })
            /*    errors.email &&
              $(
                'span',
                { className: 'errorMessage' },
                'Please enter a valid email'
              ) */
          ),
          $(
            'div',
            { className: 'form-group' },
            $('label', null, 'Phone #'),
            $('input', {
              type: 'tel',
              name: 'tel',
              ...register('tel', {
                required: {
                  value: true,
                  message: 'Please enter your phone number',
                },
                maxLength: {
                  value: 13,
                  message: 'Please use 13 characters or less',
                },
              }),
            })
            /* errors.tel &&
              $('span', { className: 'errorMessage' }, errors.tel.message) */
          )
        ),
        $(
          'div',
          { className: 'col' },
          $(
            'div',
            { className: 'form-group' },
            $('label', null, 'Which service do you need ?'),
            $(
              'div',
              { id: 'radio-buttons' },
              $(
                'div',
                { className: 'radio-button' },
                $('input', {
                  type: 'radio',
                  id: 'radiodev',
                  value: 'ITProjectDevelopment',
                  name: 'selectedBtn',
                  ...register('selectedBtn', {
                    required: false,
                  }),
                }),

                $('label', { htmlFor: 'radiodev' }, 'IT Project Development')
              ),
              $(
                'div',
                { className: 'radio-button' },
                $('input', {
                  type: 'radio',
                  id: 'radioart',
                  value: 'DigitalArtDevelopment',
                  name: 'selectedBtn',
                  ...register('selectedBtn', {
                    required: false,
                  }),
                }),
                $(
                  'label',
                  { htmlFor: 'radioart' },
                  'Digital Art Project Development'
                )
              ),
              $(
                'div',
                { className: 'radio-button' },
                $('input', {
                  type: 'radio',
                  id: 'radiopersonal',
                  value: 'Digital Marketing',
                  name: 'selectedBtn',
                  ...register('selectedBtn', {
                    required: false,
                  }),
                }),
                $('label', { htmlFor: 'radiopersonal' }, 'Digital Marketing')
              ),
              $(
                'div',
                { className: 'radio-button' },
                $('input', {
                  type: 'radio',
                  id: 'radioother',
                  value: 'other',
                  name: 'selectedBtn',
                  ...register('selectedBtn', {
                    required: false,
                  }),
                }),
                $('label', { htmlFor: 'radioother' }, 'Other')
              )
            )
          )
        ),
        $(
          'div',
          { className: 'col' },
          $(
            'div',
            { className: 'form-group solo' },
            $('label', null, 'Message'),
            $('textarea', {
              name: 'message',
              ...register('message', {
                required: { value: true, message: 'Please enter your message' },
                maxLength: {
                  value: 100,
                  message: 'Please use 100 characters or less',
                },
              }),
            })
            /* errors.message &&
              $('span', { className: 'errorMessage' }, errors.message.message) */
          )
        ),
        $(
          'div',
          { className: 'col' },
          $(
            'div',
            { className: 'form-group solo' },
            $(
              'button',
              { className: 'primary', type: 'submit' },
              'Send Message'
            )
          )
        )
      )
    )
  );
};

export default ContactForm;

//Styled Component
const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 75vh;
  background-color: #ff7700;
  border-radius: 1rem;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cpolygon fill='%23cc0000' points='957 450 539 900 1396 900'/%3E%3Cpolygon fill='%23aa0000' points='957 450 872.9 900 1396 900'/%3E%3Cpolygon fill='%23d6002b' points='-60 900 398 662 816 900'/%3E%3Cpolygon fill='%23b10022' points='337 900 398 662 816 900'/%3E%3Cpolygon fill='%23d9004b' points='1203 546 1552 900 876 900'/%3E%3Cpolygon fill='%23b2003d' points='1203 546 1552 900 1162 900'/%3E%3Cpolygon fill='%23d3006c' points='641 695 886 900 367 900'/%3E%3Cpolygon fill='%23ac0057' points='587 900 641 695 886 900'/%3E%3Cpolygon fill='%23c4008c' points='1710 900 1401 632 1096 900'/%3E%3Cpolygon fill='%239e0071' points='1710 900 1401 632 1365 900'/%3E%3Cpolygon fill='%23aa00aa' points='1210 900 971 687 725 900'/%3E%3Cpolygon fill='%23880088' points='943 900 1210 900 971 687'/%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: contain;
`;
const FormContainer = styled.div`
  display: flex;
  width: 90%;
  height: 90%;
  border-radius: 1rem;
  overflow: hidden;
  backdrop-filter: blur(25px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  -webkit-box-shadow: 0px 15px 35px 0px rgba(0, 0, 0, 0.69);
  -moz-box-shadow: 0px 15px 35px 0px rgba(0, 0, 0, 0.69);
  box-shadow: 0px 15px 35px 0px rgba(0, 0, 0, 0.69);
`;
const ContactInfo = styled.div`
  width: 30%; //30
  height: 100%;
  background-color: #ff9d00;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg stroke='%23000' stroke-width='71.2' stroke-opacity='0.53' %3E%3Ccircle fill='%23ff9d00' cx='0' cy='0' r='1800'/%3E%3Ccircle fill='%23f27d00' cx='0' cy='0' r='1700'/%3E%3Ccircle fill='%23e55f00' cx='0' cy='0' r='1600'/%3E%3Ccircle fill='%23d84400' cx='0' cy='0' r='1500'/%3E%3Ccircle fill='%23cb2c00' cx='0' cy='0' r='1400'/%3E%3Ccircle fill='%23bf1600' cx='0' cy='0' r='1300'/%3E%3Ccircle fill='%23b20300' cx='0' cy='0' r='1200'/%3E%3Ccircle fill='%23a5000e' cx='0' cy='0' r='1100'/%3E%3Ccircle fill='%2398001c' cx='0' cy='0' r='1000'/%3E%3Ccircle fill='%238b0027' cx='0' cy='0' r='900'/%3E%3Ccircle fill='%237e0030' cx='0' cy='0' r='800'/%3E%3Ccircle fill='%23710037' cx='0' cy='0' r='700'/%3E%3Ccircle fill='%2364003b' cx='0' cy='0' r='600'/%3E%3Ccircle fill='%2358003c' cx='0' cy='0' r='500'/%3E%3Ccircle fill='%234b003a' cx='0' cy='0' r='400'/%3E%3Ccircle fill='%233e0037' cx='0' cy='0' r='300'/%3E%3Ccircle fill='%23310030' cx='0' cy='0' r='200'/%3E%3Ccircle fill='%23210024' cx='0' cy='0' r='100'/%3E%3C/g%3E%3C/svg%3E");
  //background-attachment: fixed;
  background-size: cover;
`;
const FormUi = styled.form`
  display: flex;
  align-items: center;
  width: 70%;
  height: 100%;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  h2 {
    color: #fff;
    margin-bottom: 2rem;
  }
  .col {
    display: flex;
    width: 100%;
    justify-content: center;
  }
  .form-group {
    display: flex;
    width: 100%;
    justify-content: flex-start;
    flex-direction: column;
    padding: 0 1rem;
    label {
      font-size: 0.7rem; //1.1
      color: rgba(255, 255, 255, 0.8);
      margin-bottom: 1rem;
      font-family: 'DotGothic16', sans-serif;
    }
    input[type='text'],
    input[type='tel'],
    input[type='email'],
    textarea {
      border: none;
      background: transparent;
      cursor: pointer;
      padding: 10px;
      font-size: 0.7; //1.3rem;
      border-bottom: 2px solid rgba(255, 255, 255, 0.4);
      transition: all 0.3s ease-in-out;
      margin-bottom: 2rem;
      &:focus {
        border: none;
        outline: none;
        border-bottom: 2px solid #05f7ff;
      }
    }
    #radio-buttons {
      display: flex;
      justify-content: flex-start;
      margin-bottom: 2rem;
      .radio-button {
        margin-right: 1rem;
      }
      label {
        display: block;
      }
    }
    &.solo {
      padding: 0;
    }
    .primary {
      font-size: 1.4rem;
      border: 3px solid #f15946;
      &:hover {
        background-color: #f15946;
        color: white;
      }
    }
  }
  @media (max-width: 1024px) {
    .form-group {
      width: 50%;
      #radio-buttons {
        display: block;
      }
    }
  }
`;
