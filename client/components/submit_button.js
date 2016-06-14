// ==================================================
// SubmitButton
// ==================================================

import React from 'react';
import Radium from 'radium';
import em from 'to-em';
import { resetInput } from '../styling/common_styles.js';
import { YELLOW, DARKGRAYBLUE } from '../styling/colors.js';

const buttonStyle = {
  ...resetInput,
  position: 'relative',
  display: 'inline-block',
  float: 'right',
  width: 'auto',
  overflow: 'hidden',
  color: YELLOW,
  background: 'none',
  cursor: 'pointer',
  userSelect: 'none',
};
const lineThroughStyles = {
  base: {
    position: 'absolute',
    top: em(10),
    left: 0,
    width: '100%',
    height: em(2),
    background: DARKGRAYBLUE,
    transform: 'translate3d(-103%, 0, 0)',
    transition: 'transform 150ms cubic-bezier(0.22, 0.61, 0.36, 1)',
  },
  disabled: {
    transform: 'translate3d(0, 0, 0)',
  },
};

const SubmitButton = ({ children, disabled, title }) => (
  <button
    id="SubmitButton"
    style={buttonStyle}
    type="submit"
    disabled={disabled}
    title={title}
  >
    <div
      style={[
        lineThroughStyles.base,
        disabled && lineThroughStyles.disabled,
      ]}
    />
    {children}
  </button>
);

SubmitButton.propTypes = {
  children: React.PropTypes.string,
  disabled: React.PropTypes.bool,
  title: React.PropTypes.string,
};

export default Radium(SubmitButton);
