// ==================================================
// Work
// ----
// Showcase of my work.
// ==================================================

import React from 'react';
import Radium from 'radium';
import Page from './page/';
import PageHead from './page/head.js';
import PageBody from './page/body.js';
import Heading from './heading.js';
import WorkItem from './work_item.js';

const Work = () => (
  <div id="Work">
    <Page>
      <PageHead>
        <Heading small>
          Web design<br />
          & front-end development,<br />
          like it's 2016.
        </Heading>
      </PageHead>
      <PageBody>
        <WorkItem
          title="React Static Plate"
          description="Build fast static sites with React"
          link="https://github.com/webyak/react-static-plate"
        />
        <WorkItem
          title="Flight Search"
          description="An animation experiment"
          link="/flights/"
        />
        <WorkItem
          title="Yannik on Dribbble"
          description="Branding work in 400x300px"
          link="https://dribbble.com/yannikschweinzer"
        />
        <WorkItem
          title="Yannik on GitHub"
          description="Open source projects"
          link="https://github.com/webyak/"
        />
      </PageBody>
    </Page>
  </div>
);

export default Radium(Work);
