import React, { Component } from 'react';

class PersonalityTest extends Component {
  state = {
    Count: 0
  }

//   handleCount = () => {
//     if (this.className === "score_2") {
//         this.setState({
//             Count : this.state.Count + 2
//         })
//     }else if (this.className === "score_4") {
//         this.setState({
//             Count : this.state.Count + 4
//         })
//     }else if (this.className === "score_6") {
//         this.setState({
//             Count : this.state.Count + 6
//         })
//     }
//   }

  handleCount_2 = () => {
    this.setState({
        Count : this.state.Count + 2
    })
  }
  handleCount_4 = () => {
    this.setState({
        Count : this.state.Count + 4
    })
  }
  handleCount_6 = () => {
    this.setState({
        Count : this.state.Count + 6
    })
  }
  handleCount_7 = () => {
    this.setState({
        Count : this.state.Count + 7
    })
  }

  render() {
    return (
      <div>
        <div>
            <div>
                <h1>1.당신은 언제 가장 기분이 좋습니까?</h1>
                <input
                    value="morning"
                    name="testNumber1"
                    type="radio"
                    onChange={this.handleCount_2}
                />아침
                <br/>
                <input
                    value="evening"
                    name="testNumber1"
                    type="radio"
                    onChange={this.handleCount_4}
                />오후부터 이른 저녁까지
                <br/>
                <input
                    value="night"
                    name="testNumber1"
                    type="radio"
                    onChange={this.handleCount_6}
                />야심한 밤
                <br/>
            </div>
            <div>
                <h1>
                    2.당신의 평소 걸음걸이는 어떠합니까?
                </h1>
                <input
                    name="testNumber2"
                    type="radio"
                    onChange={this.handleCount_6}
                />보폭이 크고,빠른 걸음
                <br/>
                <input
                    name="testNumber2"
                    type="radio"
                    onChange={this.handleCount_4}
                />빠른걸음이나 보폭이 작은 걸음
                <br/>
                <input
                    name="testNumber2"
                    type="radio"
                    onChange={this.handleCount_7}
                />빠르지 않고,고개를 들고 주위를 둘러보는 걸음
                <br/>
                <input
                    name="testNumber2"
                    type="radio"
                    onChange={this.handleCount_2}
                />매우 느린 걸음
                <br/>
            </div>
        </div>
        <div>
            값 : {this.state.Count}
        </div>
        {/* <div>값: {this.state.number}</div>
        <button onClick={this.handleIncrease}>+</button>
        <button onClick={this.handleDecrease}>-</button> */}
      </div>
    );
  }
}

export default PersonalityTest;