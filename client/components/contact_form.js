// ==================================================
// ContactForm
// ==================================================

import React from 'react';
import Radium from 'radium';
import em from 'to-em';
import Input from './input.js';

import SubmitButton from './submit_button.js';

const style = {
  padding: em('18 0'),
  '@media (min-width: 630px)': {
    padding: em('58 0'),
  },
};

const ContactForm = ({
  isEmailInvalid,
  isMessageInvalid,
  emailValue,
  messageValue,
  setEmail,
  setMessage,
  disabled,
  onSubmit,
  isSuccess,
}) => (
  <form id="ContactForm" style={style} onSubmit={onSubmit}>
    <Input
      type="email"
      placeholder="Email"
      name="email"
      isInvalid={isEmailInvalid}
      value={emailValue}
      setValue={setEmail}
    />
    <Input
      type="textarea"
      placeholder="Message"
      name="message"
      isInvalid={isMessageInvalid}
      value={messageValue}
      setValue={setMessage}
    />
    <SubmitButton
      disabled={disabled && !isSuccess}
      title={disabled ? 'Please fill out the contact form first' : ''}
    >{isSuccess ? 'Thank you!' : 'Send'}</SubmitButton>
  </form>
);

ContactForm.propTypes = {
  emailValue: React.PropTypes.string,
  messageValue: React.PropTypes.string,
  isEmailInvalid: React.PropTypes.bool,
  isMessageInvalid: React.PropTypes.bool,
  setEmail: React.PropTypes.func.isRequired,
  setMessage: React.PropTypes.func.isRequired,
  disabled: React.PropTypes.bool.isRequired,
  onSubmit: React.PropTypes.func.isRequired,
  isSuccess: React.PropTypes.bool.isRequired,
};

export default Radium(ContactForm);
