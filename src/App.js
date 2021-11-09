import React, { Component, Fragment } from 'react';
import PersonalityTest from './component/personalityTest'
import TestName from './testName'

class App extends Component {
  render() {
    return (
      <Fragment>
        <TestName name="심리테스트"/>
        <PersonalityTest />
      </Fragment>
    );
  }
}

export default App;