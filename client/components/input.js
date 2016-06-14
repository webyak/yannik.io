// ==================================================
// Input
// ==================================================

import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import Radium from 'radium';
import color from 'color';
import autosize from 'autosize';
import em from 'to-em';
import { DARKGRAYBLUE, RED, YELLOW } from '../styling/colors.js';
import { resetInput } from '../styling/common_styles.js';

const inputStyle = {
  ...resetInput,
  fontSize: em(20),
};
const textareaStyle = {
  ...inputStyle,
  fontSize: em(18),
  lineHeight: 1.6,
};
const underlineStyles = {
  base: {
    width: '100%',
    height: em(2),
    background: color(DARKGRAYBLUE).clearer(0.9).rgbString(),
  },
  red: {
    background: RED,
  },
  yellow: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    background: YELLOW,
    opacity: 1,
    transform: 'scale3d(1, 1, 1)',
    transition: 'transform 150ms cubic-bezier(.22, .61, .36, 1), ' +
      'opacity 150ms cubic-bezier(.46, .03, .52, .96)',
  },
  yellowHidden: {
    opacity: 0.01,
    transform: 'scale3d(0, 1, 1)',
  },
};

class Input extends Component {
  componentDidMount() {
    // dynamically resize the textarea as the user is typing away.
    if (this.$textarea) autosize(findDOMNode(this.$textarea));
  }
  onFocus = () => this.setState({ isFocused: true, isBlur: false })

  onBlur = () => this.setState({ isFocused: false, isBlur: true })

  onChange = e => this.props.setValue(e.currentTarget.value)

  render() {
    const { type, placeholder, value, isInvalid } = this.props;
    const { isFocused, isBlur } = this.state;

    return (
      <div id="Input" style={{ position: 'relative', marginBottom: em(28) }}>
        <div style={{ padding: em('12 1') }}>
          {type === 'email' && (
            <input
              style={inputStyle}
              type="email"
              placeholder={placeholder}
              onFocus={this.onFocus}
              onBlur={this.onBlur}
              onChange={this.onChange}
              value={value}
            />
          )}
          {type === 'textarea' && (
            <textarea
              style={textareaStyle}
              ref={c => { this.$textarea = c; }}
              rows="1"
              placeholder={placeholder}
              onFocus={this.onFocus}
              onBlur={this.onBlur}
              onChange={this.onChange}
              value={value}
            />
          )}
        </div>
        <div
          style={[
            underlineStyles.base,
            isBlur && isInvalid && underlineStyles.red,
          ]}
        />
        <div
          style={[
            underlineStyles.base,
            underlineStyles.yellow,
            !isFocused && underlineStyles.yellowHidden,
          ]}
        />
      </div>
    );
  }
}

Input.propTypes = {
  type: React.PropTypes.oneOf(['email', 'textarea']),
  placeholder: React.PropTypes.string,
  isInvalid: React.PropTypes.bool,
  value: React.PropTypes.string,
  setValue: React.PropTypes.func.isRequired,
  onBlur: React.PropTypes.func,
};

export default Radium(Input);
