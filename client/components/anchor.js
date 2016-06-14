// ==================================================
// Anchor
// ==================================================

import React from 'react';
import Radium from 'radium';
import { resetAnchor } from '../styling/common_styles.js';
import { DARKGRAYBLUE, YELLOW } from '../styling/colors.js';

const style = {
  ...resetAnchor,
  color: DARKGRAYBLUE,
  transition: 'color .2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  ':hover': {
    color: YELLOW,
  },
};

const Anchor = ({ children, href, newTab }) => (
  <a
    id="Anchor"
    style={style}
    target={newTab ? '_blank' : '_self'}
    href={href}
  >
    {children}
  </a>
);

Anchor.propTypes = {
  children: React.PropTypes.node,
  href: React.PropTypes.string,
  newTab: React.PropTypes.bool,
};

export default Radium(Anchor);
