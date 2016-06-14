// ==================================================
// ContactFormContainer
// ==================================================

import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
// polyfill promises support for IE.
require('es6-promise').polyfill();
import 'whatwg-fetch';

import ContactForm from '../components/contact_form.js';

class ContactFormContainer extends Component {
  state = {
    emailValue: '',
    messageValue: '',
    isSuccess: false,
  }
  onSubmit = e => {
    e.preventDefault();

    const { toEmail, subject } = this.props;
    const { emailValue, messageValue } = this.state;

    if (!this.isFormComplete()) return;

    this.sendMail({
      toEmail,
      subject,
      fromEmail: emailValue,
      message: messageValue,
    });
  }
  setEmailValue = emailValue => this.setState({ emailValue })

  setMessageValue = messageValue => this.setState({ messageValue })

  isFormComplete = () => {
    const { emailValue, messageValue } = this.state;
    return this.isValidEmail(emailValue) && this.isValidMessage(messageValue);
  }

  /* eslint-disable max-len */
  isValidEmail = email =>
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(email)
  /* eslint-enable max-len */

  isValidMessage = message => !!message && message.length >= 1;

  handleSuccess = () => {
    this.setState({ isSuccess: true, emailValue: '', messageValue: '' });
    findDOMNode(this.$form).reset();

    setTimeout(() => {
      this.setState({ isSuccess: false });
    }, 3000);
  }
  checkStatus(response) {
    const { status, statusText } = response;
    if (status >= 200 && status < 300) return response;

    const error = new Error(statusText);
    error.response = response;
    throw error;
  }
  sendMail({ toEmail, subject, fromEmail, message }) {
    fetch(`https://formspree.io/${toEmail}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: fromEmail,
        message,
        _subject: subject,
      }),
    })
      .then(this.checkStatus)
      .then(response => response.json())
      .then(({ success }) => { if (success) this.handleSuccess(); })
      .catch(error => {
        open(`mailto:${toEmail}?subject=${subject} (mailto)&body=${escape(message)}`);
        throw error;
      });
  }
  render() {
    const { emailValue, messageValue, isSuccess } = this.state;

    return (
      <ContactForm
        ref={c => { this.$form = c; }}
        isEmailInvalid={!!emailValue && !this.isValidEmail(emailValue)}
        isMessageInvalid={!!messageValue && !this.isValidMessage(messageValue)}
        emailValue={emailValue}
        messageValue={messageValue}
        setEmail={this.setEmailValue}
        setMessage={this.setMessageValue}
        disabled={!this.isFormComplete()}
        onSubmit={this.onSubmit}
        isSuccess={isSuccess}
      />
    );
  }
}

ContactFormContainer.propTypes = {
  toEmail: React.PropTypes.string.isRequired,
  subject: React.PropTypes.string.isRequired,
};

export default ContactFormContainer;
