// 모듈 속 액션을 수행하기 위한 메소드와 state를 지정해놓고 메소드를 사용할 컴포넌트와 연결합니다.

import React, { Component } from "react";
import { connect } from "react-redux";
import { handleActions } from "redux-actions";
import PersonalityTest from "../component/personalityTest";
import { TestActions } from "../store/actionCreators";

class TestContainer extends Component {
    // 액션을 수행할 메소드를 지정합니다.
    handleUpdate = (i, v) => {
        // 이 메소드는 input component까지 들어가 클릭된 radiobutton의 문제 번호와 value값을 받아와 그 값들로 액션을 수행합니다.
        TestActions.update(i, v);
    }

    handleResult = () => {
        TestActions.result();
    }

    render() {
        // 메소드는 this, 오브젝트는 this.props로 특성 부여
        const { handleUpdate, handleResult } = this;
        const { result_score } = this.props;

        return(
            <PersonalityTest
                result = {result_score}
                onUpdate = {handleUpdate}
                onResult = {handleResult}
            />
        );
    }
}

// 모듈을 바인딩시켰던 TestContainer과 연동합니다.
export default connect(
    (state) => ({
        result_score: state.test.result_score,
        inputs: state.test.inputs
    })
)(TestContainer);

