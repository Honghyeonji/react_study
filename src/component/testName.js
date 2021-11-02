import React, { Component } from 'react';

class TestName extends Component {
  render() {
    return (
      <div>
        이 테스트는 <b>{this.props.name}</b> 입니다.
      </div>
    );
  }
}

TestName.defaultProps = {
  name: '기본이름'
};

export default TestName;
