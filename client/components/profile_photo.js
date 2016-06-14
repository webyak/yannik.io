// ==================================================
// ProfilePhoto
// ==================================================

import React from 'react';
import Radium from 'radium';
import color from 'color';
import em from 'to-em';
import { DARKGRAYBLUE } from '../styling/colors.js';

const photoStyle = {
  width: em(260),
  marginTop: em(120),
};
const placeholderStyle = {
  padding: em('120 0'),
  background: 'rgba(0, 0, 0, 0.03)',
  textAlign: 'center',
};
const placeholderTextStyle = {
  fontSize: em(18),
  lineHeight: 1.6,
  letterSpacing: '0.1px',
  color: color(DARKGRAYBLUE).clearer(0.4).rgbString(),
};

const ProfilePhoto = () => (
  <div id="ProfilePhoto" style={photoStyle}>
    <div style={placeholderStyle}>
      <span style={placeholderTextStyle}>photo</span><br />
      <span style={placeholderTextStyle}>coming soon</span>
    </div>
  </div>
);

export default Radium(ProfilePhoto);
