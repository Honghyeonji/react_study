import React, { Component, Fragment } from 'react';
// import PersonalityTest from './personalityTest'
import TestName from './testName'

export default function App() {

  const questions = [
    {   
        question_number : 1,
        question : "1. 당신은 언제 가장 기분이 좋습니까?",
        answer: ["아침", "오후부터 이른 저녁까지", "야심한 밤"],
        answer_value: [2, 4, 6]
    },
    {
        question_number : 2,
        question : "2.당신의 평소 걸음걸이는 어떠합니까?",
        answer: ["보폭이 크고,빠른 걸음", "빠른걸음이나 보폭이 작은 걸음", "빠르지 않고,고개를 들고 주위를 둘러보는 걸음", "매우 느린 걸음"],
        answer_value: [6, 4, 7, 2]
    }
  ];

  const answerList = ({props}) => {
    const result = [];
    const len = props.answer.length;
    const testNumber = 'testNumber'.concat(props.question_number)
    for (let i = 0; i < len; i++){
      result.push(
        <input key={i} name = {testNumber} type = "radio">
          {props.answer[i]}
        </input>
      );
    };
  return result
  }

  return (
    <div>
      <TestName name="심리테스트"/>
      <div>
        {questions.map(ques => (
          <h1>{ques.question}</h1>
          {answerList(ques)}
        ))}
      </div>
    </div>
  )
}



// class App extends Component {
//   render() {
//     return (
//       <Fragment>
//         <TestName name="심리테스트"/>
//         <PersonalityTest />
//       </Fragment>
//     );
//   }
// }

// export default App;