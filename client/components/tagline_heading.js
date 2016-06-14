// ==================================================
// TaglineHeading
// ==================================================

import React from 'react';
import Radium from 'radium';
import em from 'to-em';
import { resetHeading } from '../styling/common_styles.js';

const headingStyle = {
  ...resetHeading,
  margin: `-${1.4 / 4}em 0 0`,
  lineHeight: 1.4,
  fontSize: em(64),
  '@media (min-width: 972px)': {
    margin: 0,
    lineHeight: 1.3,
    fontSize: em(48),
  },
};
const taglineStyle = {
  paddingLeft: em(13),
};

const TaglineHeading = ({ text, tagline }) => (
  <div id="TaglineHeading">
    <h2 style={headingStyle}>{text}</h2>
    <div style={taglineStyle}>{tagline}</div>
  </div>
);

TaglineHeading.propTypes = {
  text: React.PropTypes.string.isRequired,
  tagline: React.PropTypes.string.isRequired,
};

export default Radium(TaglineHeading);
