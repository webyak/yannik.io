// ==================================================
// Heading
// ==================================================

import React from 'react';
import Radium from 'radium';
import em from 'to-em';
import { resetHeading } from '../styling/common_styles.js';

const styles = {
  base: {
    ...resetHeading,
    margin: `-${1.05 / 4}em 0 0`,
    fontSize: em(56),
    lineHeight: 1.05,
    '@media (min-width: 972px)': {
      margin: 0,
      fontSize: em(48),
      lineHeight: 1.3,
    },
  },
  small: {
    margin: `-${1.15 / 4}em 0 0`,
    fontSize: em(40),
    lineHeight: 1.15,
    '@media (min-width: 972px)': {
      margin: 0,
      fontSize: em(44),
      lineHeight: 1.3,
    },
  },
};

const Heading = ({ children, small }) => (
  <h2
    id="Heading"
    style={[
      styles.base,
      small && styles.small,
    ]}
  >
    {children}
  </h2>
);

Heading.propTypes = {
  children: React.PropTypes.node,
  small: React.PropTypes.bool,
};

export default Radium(Heading);
