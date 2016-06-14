// ==================================================
// Wrap
// ==================================================

import React from 'react';
import Radium from 'radium';
import em from 'to-em';

const style = {
  position: 'relative',
  width: '100%',
  maxWidth: em(1280),
  padding: '0 6%',
  margin: '0 auto',
  '@media (min-width: 630px)': {
    padding: '0 7%',
  },
  '@media (min-width: 1600px)': {
    maxWidth: em(1440),
  },
  '@media (min-width: 1800px)': {
    maxWidth: em(1600),
  },
};

const Wrap = ({ children }) => (
  <div id="Wrap" style={style}>
    {children}
  </div>
);

Wrap.propTypes = {
  children: React.PropTypes.node,
};

export default Radium(Wrap);
