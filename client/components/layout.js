// ==================================================
// Layout
// ==================================================

import React from 'react';
import Radium, { StyleRoot, Style } from 'radium';
import Helmet from 'react-helmet';
import color from 'color';
import { DARKGRAYBLUE, YELLOW } from '../styling/colors.js';
import { resetFontSmooth } from '../styling/common_styles.js';
import Wrap from './wrap.js';
import MainNavigation from './main_navigation';

const selectionStyle = {
  color: DARKGRAYBLUE,
  background: YELLOW,
};
const placeholderStyle = {
  color: color(DARKGRAYBLUE).clearer(0.35).rgbString(),
  opacity: 1,
};

/* eslint-disable max-len */
const typekitScript = `
  (function(d) {
    var config = {
      kitId: 'shv6xct',
      scriptTimeout: 3000,
      async: false
    },
    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='//use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
  })(document);
`;
/* eslint-enable max-len */

const Layout = ({ children }) => (
  <StyleRoot id="Layout" radiumConfig={{}}>
    <Helmet
      title="Yannik Schweinzer / Designer–Developer"
      meta={[
        {
          name: 'description',
          content: 'The personal site of Yannik Schweinzer, a Designer who codes.',
        },
      ]}
      link={[
        {
          rel: 'dns-prefetch',
          href: '//use.typekit.net',
        },
        {
          rel: 'dns-prefetch',
          href: '//p.typekit.net',
        },
        {
          rel: 'dns-prefetch',
          href: '//ping.typekit.net',
        },
        {
          rel: 'shortcut icon',
          type: 'image/png',
          href: require('../assets/favicon.png'),
          sizes: '16x16 32x32 64x64',
        },
      ]}
      script={[
        { innerHTML: typekitScript },
      ]}
    />
    <Style
      rules={{
        '.wf-loading': {
          display: 'none',
        },
        '.wf-inactive': {
          display: 'block !important',
        },
        'html, body': {
          width: '100%',
          height: '100%',
        },
        body: {
          ...resetFontSmooth,
          fontFamily: '"soleil", "Soleil", "Helvetica Neue", Helvetica, ' +
            'Arial, sans-serif',
          fontWeight: 400,
          lineHeight: 1.4,
          color: DARKGRAYBLUE,
          background: '#fff',
        },
        '*': {
          WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
        },
        '*, *:before, *:after': {
          boxSizing: 'border-box',
        },
        '::-moz-selection': {
          ...selectionStyle,
        },
        '::selection': {
          ...selectionStyle,
        },
        '::-webkit-input-placeholder': {
          ...placeholderStyle,
        },
        ':-moz-placeholder': {
          ...placeholderStyle,
        },
        '::-moz-placeholder': {
          ...placeholderStyle,
        },
        ':-ms-input-placeholder': {
          ...placeholderStyle,
        },
        'input:-webkit-autofill': {
          WebkitBoxShadow: '0 0 0 1000px #fff inset',
        },
      }}
    />
    <Wrap>
      <MainNavigation />
      {children}
    </Wrap>
  </StyleRoot>
);

Layout.propTypes = {
  children: React.PropTypes.element,
};

export default Radium(Layout);
