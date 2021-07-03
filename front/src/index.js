import React from 'react';
import store from './redux/store.js';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {BrowserRouter as Router} from "react-router-dom";

let rerender = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
          <Router>
          <App state={state} dispatch={store.dispatch.bind(store)} store={store}/>
          </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
store.subscribe(() => {
  rerender(store.getState())
});
rerender(store.getState());
reportWebVitals();
