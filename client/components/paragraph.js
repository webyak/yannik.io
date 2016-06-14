// ==================================================
// Paragraph
// ==================================================

import React from 'react';
import Radium from 'radium';
import color from 'color';
import em from 'to-em';
import { DARKGRAYBLUE } from '../styling/colors.js';

const style = {
  fontSize: em(18),
  lineHeight: 1.6,
  letterSpacing: '0.1px',
  color: color(DARKGRAYBLUE).clearer(0.2).rgbString(),
};

const Paragraph = ({ children }) => (
  <p id="Paragraph" style={style}>{children}</p>
);

Paragraph.propTypes = {
  children: React.PropTypes.node,
};

export default Radium(Paragraph);
