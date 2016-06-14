// ==================================================
// Contact
// ==================================================

import React from 'react';
import Radium from 'radium';
import Helmet from 'react-helmet';
import Page from './page/';
import PageHead from './page/head.js';
import PageBody from './page/body.js';
import Heading from './heading.js';
import Paragraph from './paragraph.js';
import Anchor from './anchor.js';
import ContactFormContainer from '../containers/contact_form.js';

const Contact = () => (
  <div id="Contact">
    <Helmet
      title="Contact — Yannik Schweinzer"
      meta={[
        {
          name: 'description',
          content: 'Interested in working with Yannik Schweinzer? More details here.',
        },
      ]}
    />
    <Page>
      <PageHead>
        <Heading>
          Ping me, once.<br />
          Or twice
        </Heading>
      </PageHead>
      <PageBody>
        <Paragraph>
          Curious in working together? Or just want to find out more?<br />
          Drop me a message at
          <Anchor href="mailto:hi@yannik.io" newTab> hi@yannik.io</Anchor>
          <br /><br />
          Or use the form down below
        </Paragraph>
        <ContactFormContainer
          toEmail="hi@yannik.io"
          subject="Yannik. Hey"
        />
      </PageBody>
    </Page>
  </div>
);

export default Radium(Contact);
