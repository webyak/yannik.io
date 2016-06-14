// ==================================================
// WorkItem
// ==================================================

import React, { PropTypes } from 'react';
import Radium from 'radium';
import color from 'color';
import em from 'to-em';
import { resetAnchor } from '../styling/common_styles.js';
import { DARKGRAYBLUE } from '../styling/colors.js';

const wrapStyle = {
  ...resetAnchor,
  display: 'inline-block',
  padding: em('0 34 15 0'),
  width: em(249),
};
const titleStyle = {
  fontSize: em(23),
};
const descStyle = {
  paddingLeft: em(0.5),
  color: color(DARKGRAYBLUE).clearer(0.2).rgbString(),
};
const descTextStyle = {
  fontSize: em(15),
};

const WorkItem = ({ title, description, link }) => (
  <a id="WorkItem" style={wrapStyle} href={link} target="_blank">
    <div style={titleStyle}>{title}</div>
    <div style={descStyle}>
      <span style={descTextStyle}>{description}</span>
    </div>
  </a>
);

WorkItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Radium(WorkItem);
