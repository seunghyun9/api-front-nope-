import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Hello from './hello/Hello';
import reportWebVitals from './reportWebVitals';
import Login from './hello/Login';
import Grade from './hello/Grade';
import Calc from './hello/Calc';
import Bmi from './hello/Bmi';

ReactDOM.render(
  <React.StrictMode>
    <Calc/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
  