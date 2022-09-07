import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore, applyMiddleware, Store } from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import reportWebVitals from './reportWebVitals';

import reducer from './store/reducer';
import { DispatchType, QuizAction, QuizState } from './configs/types';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const store: Store<QuizState, QuizAction> & {
  dispatch: DispatchType
} = createStore(reducer, applyMiddleware(thunk))

root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
