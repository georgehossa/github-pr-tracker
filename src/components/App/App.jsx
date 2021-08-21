import React from 'react';
import PropTypes from 'prop-types';
import { Test } from './App.styles';

const App = (props) => (
  <div className="AppWrapper">
    <Test>Test content</Test>
  </div>
);

App.propTypes = {
  // bla: PropTypes.string,
};

App.defaultProps = {
  // bla: 'test',
};

export default App;
