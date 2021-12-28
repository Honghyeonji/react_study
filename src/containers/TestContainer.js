import React, { Component } from "react";
import { connect } from "react-redux";
import { handleActions } from "redux-actions";
import PersonalityTest from "../component/personalityTest";
import { TestActions } from "../store/actionCreators";

class TestContainer extends Component {
    handleUpdate = (i, v) => {
        TestActions.update(i, v);
    }

    handleResult = () => {
        TestActions.result();
    }

    render() {
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

export default connect(
    (state) => ({
        result_score: state.test.result_score,
        inputs: state.test.inputs
    })
)(TestContainer);

