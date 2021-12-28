import React, { Component } from "react";
import { connect } from "react-redux";
import { handleActions } from "redux-actions";
import PersonalityTest from "../component/personalityTest";

class TestContainer extends Component {
    handleUpdate = (i, v) => {
        const { TestActions } = this.props;
        TestActions.update(i, v);
    }

    handleResult = () => {
        this.props.result();
    }

    render() {
        const { handleUpdate, handleResult } = this;

        return(
            <PersonalityTest
                onUpdate = {handleUpdate}
                onResult = {handleResult}
            />
        );
    }
}

export default connect(
    (state) => ({
        result: state.test.result,
        inputs: state.test.inputs
    })
)(TestContainer);

