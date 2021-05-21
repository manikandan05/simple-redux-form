import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './Store'
import './index.css';
import LoginForm from './App';
import reportWebVitals from './reportWebVitals';

const handleSubmit = (values) =>{
  console.log(JSON.stringify(values));
  return '';
}

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <LoginForm onSubmit={handleSubmit} />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
