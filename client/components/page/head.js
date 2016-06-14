// ==================================================
// PageHead
// ==================================================

import React from 'react';
import Radium from 'radium';
import em from 'to-em';

const style = {
  // padding: '14.2% 0 19.65%',
  padding: em('25 0 76'),
  '@media (min-width: 630px)': {
    padding: em('78 0 108'),
  },
};

const PageHead = ({ children }) => (
  <section id="PageHead" style={style}>
    {children}
  </section>
);

PageHead.propTypes = {
  children: React.PropTypes.node,
};

export default Radium(PageHead);
