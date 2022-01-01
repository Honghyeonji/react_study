import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Counter from '../components/Counter';
import { setScore } from '../modules/counter';

function CounterContainer() {

  const { number, diff } = useSelector(state => ({
    test: state.counter.test,
    questionNum: state.counter.questionNum,
    questionScore = 0,
  }));

  const dispatch = useDispatch();

  const onSetDiff = diff => dispatch(setScore(diff));

  return (
    <Counter
      number={number}
      diff={diff}
      onSetDiff={onSetDiff}
    />
  );
}

export default CounterContainer;