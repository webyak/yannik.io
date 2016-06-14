// ==================================================
// About
// ==================================================

import React from 'react';
import Radium from 'radium';
import Helmet from 'react-helmet';
import Page from './page/';
import PageHead from './page/head.js';
import PageBody from './page/body.js';
import TaglineHeading from './tagline_heading.js';
import Paragraph from './paragraph.js';
import OrderedList from './ordered_list.js';
import Anchor from './anchor.js';
import ProfilePhoto from './profile_photo.js';

const gryffinRemix = 'https://soundcloud.com/gryffinofficial/years-years-king-gryffin-remix-1#t=32s';
const joys = [
  'work they even dream about doing while sleeping.',
  'a bit too much jackfruit.',
  [
    <span key={1}>wildly chasing after charming </span>,
    <Anchor key={2} href={gryffinRemix} newTab>melodies</Anchor>,
    <span key={3}> that make their heart leap.</span>,
  ],
  'their slight weirdness in getting past daily obstacles.',
  'being true to their feelings.',
  'love making.',
  'seeking and making friends with other joyful individuals.',
];

const About = () => (
  <div id="About">
    <Helmet
      title="About — Yannik Schweinzer"
      meta={[
        {
          name: 'description',
          content: 'Who\'s Yannik Schweinzer? Get to know him a bit. Maybe see a photo too...',
        },
      ]}
    />
    <Page>
      <PageHead>
        <TaglineHeading text="Yan·niks" tagline="pl. /janˈniks/" />
      </PageHead>
      <PageBody>
        <Paragraph>
          {'A joyful bunch of individuals who fulfill themselves through:'}
        </Paragraph>
        <OrderedList items={joys} />
        <Paragraph>
          {'One Yannik has recently been caught on camera while he couldn\'t ' +
          'keep his hands of ...'}
        </Paragraph>
        <ProfilePhoto />
      </PageBody>
    </Page>
  </div>
);

export default Radium(About);
