// ==================================================
// PageBody
// ==================================================

import React from 'react';
import Radium from 'radium';
import em from 'to-em';

const style = {
  paddingBottom: em(180),
  '@media (max-width: 630px)': {
    paddingBottom: em(60),
  },
};

const PageBody = ({ children }) => (
  <section id="PageBody" style={style}>
    {children}
  </section>
);

PageBody.propTypes = {
  children: React.PropTypes.node,
};

export default Radium(PageBody);
