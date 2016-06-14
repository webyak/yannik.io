// ==================================================
// MainNavigation
// ==================================================

import React, { Component } from 'react';
import { Link } from 'react-router';
import Radium from 'radium';
import color from 'color';
import em from 'to-em';
import { resetHeading, resetAnchor } from '../styling/common_styles.js';
import { DARKGRAYBLUE, YELLOW } from '../styling/colors.js';

const RadiumLink = Radium(Link);

const navigationStyle = {
  padding: em('46 0'),
  '@media (min-width: 630px)': {
    padding: em('68 0'),
  },
};
const inlineBlockStyle = {
  display: 'inline-block',
};
const linkStyle = {
  ...resetAnchor,
  ...inlineBlockStyle,
};
const headingStyle = {
  ...resetHeading,
  padding: '0 0 .75em 0',
  fontSize: em(19),
  '@media (min-width: 630px)': {
    fontSize: em(16),
  },
};
const linkGroupStyle = {
  '@media (min-width: 630px)': {
    ...inlineBlockStyle,
    float: 'right',
  },
};
const linkItemColor = color(DARKGRAYBLUE).clearer(0.36).rgbString();
const linkItemStyles = {
  base: {
    ...linkStyle,
    padding: em('0 18 0 0'),
    color: linkItemColor,
    // transition: 'color .2s cubic-bezier(.25, .46, .45, .94)',
    // ':hover': {
    //   color: yellow,
    // },
    ':hover': {
      color: linkItemColor,
    },
    '@media (min-width: 630px)': {
      padding: em('0 14'),
    },
  },
  active: {
    color: YELLOW,
    ':hover': {
      color: YELLOW,
    },
  },
};
const linkItemTextStyle = {
  fontSize: em(17),
  '@media (min-width: 630px)': {
    fontSize: em(16),
  },
};

// Using a ES6 class here because we need to make use of the context
// to simulate the Link's `activeStyle` prop with the `style` prop &
// this.context.router.isActive for making styling work with Radium.
/* eslint-disable react/prefer-stateless-function */
class MainNavigation extends Component {
  render() {
    const { isActive } = this.context.router;

    return (
      <header id="MainNavigation" style={navigationStyle}>
        <nav>
          <RadiumLink to="/" style={linkStyle}>
            <h1 style={headingStyle}>Yannik Schweinzer / Design–Dev</h1>
          </RadiumLink>
          <div style={linkGroupStyle}>
            <RadiumLink
              to="/"
              style={[
                linkItemStyles.base,
                isActive('/', true) && linkItemStyles.active,
              ]}
            >
              <span style={linkItemTextStyle}>Work</span>
            </RadiumLink>
            <RadiumLink
              to="/about/"
              style={[
                linkItemStyles.base,
                isActive('/about/') && linkItemStyles.active,
              ]}
            >
              <span style={linkItemTextStyle}>About</span>
            </RadiumLink>
            <RadiumLink
              to="/contact/"
              style={[
                linkItemStyles.base,
                isActive('/contact/') && linkItemStyles.active,
              ]}
            >
              <span style={linkItemTextStyle}>Contact</span>
            </RadiumLink>
          </div>
        </nav>
      </header>
    );
  }
}

MainNavigation.contextTypes = {
  router: React.PropTypes.object.isRequired,
};

export default Radium(MainNavigation);
