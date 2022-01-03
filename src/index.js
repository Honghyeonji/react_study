import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainPage from './pages/mainPage2';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import KakaoShareButton from './component/KakaoShareButton';

window.Kakao.init('d56ee84445bc9916bb1446899f2cfb45')

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      {console.log(window.Kakao.isInitialized())}
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
