import React, { Component } from 'react';
import { questions } from "./questions";
// import { Inputs } from "./inputs"
import answerList from './answerList';
import { render } from '@testing-library/react';

export default function personalityTest(props) {
    const questionList = questions.map((ques) => (
    <div>
        <h1>{ques.question}</h1>
        {answerList(ques)}
    </div>));
    return (
        <div>
            {questionList}
        </div>
    );
}

// function Test(e) {
//   return(
//     <div>
//       {questions && questions.map((ques, index) => (
//         <div key = {index}>
//           <Inputs ques = {ques} e = {e} q_n = {index}/>
//         </div>
//       ))}
//       <br/>
//     </div>
//   )
// }

// class PersonalityTest extends Component {
//   state = {
//     test : [0, 0, 0, 0, 0, 0, 0, 0, 0],
//     resultScore : 0,
//     resultType : 0
//   }
//   //input의 name은 문제의 번호, value는 선택버튼의 값으로 클릭하면 state test list에 저장됨
//   updateEvent = (e) => {
//     this.state.test[e.target.name] = parseInt(e.target.value);
//   }

//   resultEvent = () => {
//     for(let i = 0; i<this.state.test.length; i++){
//       this.state.resultScore += this.state.test[i];
//     }

//     if(this.state.resultScore >= 60){
//       this.state.resultType = 1
//     }else if(51 <= this.state.resultScore && this.state.resultScore <= 59){
//       this.state.resultType = 2
//     }else if(41 <= this.state.resultScore && this.state.resultScore <= 49){
//       this.state.resultType = 3
//     }else if(31 <= this.state.resultScore && this.state.resultScore <= 39){
//       this.state.resultType = 4
//     }else if(21 <= this.state.resultScore && this.state.resultScore <= 29){
//       this.state.resultType = 5
//     }else{
//       this.state.resultType = 6
//     }
//   }


  

//   render() {
//     return (
//       <div>
//         <Test e= {this.updateEvent}/>
//         <button onClick = {this.resultEvent}>결과 확인</button>

//         {/* <div>
//             <div>
//                 <h1>1.당신은 언제 가장 기분이 좋습니까?</h1>
//                 <input
//                     value="morning"
//                     name="testNumber1"
//                     type="radio"
//                     onChange={this.handleCount_2}
//                 />아침
//                 <br/>
//                 <input
//                     value="evening"
//                     name="testNumber1"
//                     type="radio"
//                     onChange={this.handleCount_4}
//                 />오후부터 이른 저녁까지
//                 <br/>
//                 <input
//                     value="night"
//                     name="testNumber1"
//                     type="radio"
//                     onChange={this.handleCount_6}
//                 />야심한 밤
//                 <br/>
//             </div>
//             <div>
//                 <h1>
//                     2.당신의 평소 걸음걸이는 어떠합니까?
//                 </h1>
//                 <input
//                     name="testNumber2"
//                     type="radio"
//                     onChange={this.handleCount_6}
//                 />보폭이 크고,빠른 걸음
//                 <br/>
//                 <input
//                     name="testNumber2"
//                     type="radio"
//                     onChange={this.handleCount_4}
//                 />빠른걸음이나 보폭이 작은 걸음
//                 <br/>
//                 <input
//                     name="testNumber2"
//                     type="radio"
//                     onChange={this.handleCount_7}
//                 />빠르지 않고,고개를 들고 주위를 둘러보는 걸음
//                 <br/>
//                 <input
//                     name="testNumber2"
//                     type="radio"
//                     onChange={this.handleCount_2}
//                 />매우 느린 걸음
//                 <br/>
//             </div>
//         </div>
//         <div>
//             값 : {this.state.Count}
//         </div> */}
//         {/* <div>값: {this.state.number}</div>
//         <button onClick={this.handleIncrease}>+</button>
//         <button onClick={this.handleDecrease}>-</button> */}
//       </div>
//     );
//   }
// }

// export default PersonalityTest;