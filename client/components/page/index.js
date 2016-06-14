// ==================================================
// Page
// ==================================================

import React from 'react';
import Radium from 'radium';
import em from 'to-em';

const style = {
  position: 'relative',
  width: '100%',
  maxWidth: em(550),
  '@media (max-width: 630px)': {
    maxWidth: em(440),
  },
};

const Page = ({ children }) => (
  <main id="Page" style={style}>
    {children}
  </main>
);

Page.propTypes = {
  children: React.PropTypes.node,
};

export default Radium(Page);
