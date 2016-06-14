import React from 'react';
import ReactDOM from 'react-dom';
import 'react-fastclick';

const rootEl = document.getElementById('react-root');

let render = () => {
  const Root = require('./components/root.js').default;

  ReactDOM.render(
    <Root />,
    rootEl
  );
};

// manually hot reload and show errors in development.
if (module.hot) {
  const renderApp = render;

  const renderError = (error) => {
    const RedBox = require('redbox-react');
    ReactDOM.render(
      <RedBox error={error} />,
      rootEl
    );
  };

  render = () => {
    try {
      renderApp();
    } catch (error) {
      renderError(error);
    }
  };


  // rerender entire app on hot reloads.
  module.hot.accept('./components/root.js', () => {
    render();
  });
}

render();
