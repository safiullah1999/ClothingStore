import React from 'react';
import ReactDOM from 'react-dom';
//linking our react app with redux. Provider is used which will provide reduc store to our react.
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>  
  </React.StrictMode>,
  document.getElementById('root')
);

