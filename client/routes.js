import React from 'react';
import { Route, IndexRoute } from 'react-router';
import SearchFlight from 'search-flight';
import Layout from './components/layout.js';
import Work from './components/work.js';
import About from './components/about.js';
import Contact from './components/contact.js';
import NotFound from './components/not_found.js';

const routes = (
  <Route path="/">
    <Route path="flights/" component={SearchFlight} />
    <Route component={Layout}>
      <IndexRoute component={Work} />
      <Route path="about/" component={About} />
      <Route path="contact/" component={Contact} />
      <Route path="*" component={NotFound} />
    </Route>
  </Route>
);

export default routes;
