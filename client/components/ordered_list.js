// ==================================================
// OrderedList
// ==================================================

import React from 'react';
import Radium from 'radium';
import em from 'to-em';
import { YELLOW } from '../styling/colors.js';

const listStyle = {
  padding: em('0 0 20 20'),
  listStyleType: 'none',
  counterReset: 'modern-counter',
  '@media (min-width: 630px)': {
    padding: em('24 0 56 26'),
  },
};
const itemStyle = {
  position: 'relative',
  padding: em('6 0'),
  fontSize: em(17),
  lineHeight: 1.6,
};
const itemCountStyle = {
  position: 'absolute',
  top: em(6),
  left: em(-26),
  width: em(18),
  color: YELLOW,
  textAlign: 'left',
  '@media (min-width: 630px)': {
    left: em(-34),
  },
};

const OrderedList = ({ items }) => (
  <ol id="OrderedList" style={listStyle}>
    {items.map((item, i) =>
      <li key={i} style={itemStyle}>
        <div style={itemCountStyle}>{`0${i + 1}.`}</div>
        {item}
      </li>
    )}
  </ol>
);

OrderedList.propTypes = {
  items: React.PropTypes.array,
};

export default Radium(OrderedList);
