import React, { Component, Fragment } from 'react';
import TestContainer from '../containers/TestContainer';
import AppTemplate from './AppTemplate';

class App extends Component {
  render() {
    return (
      <AppTemplate
        test = {<TestContainer/>}
      />
    );
  }
}

export default App;