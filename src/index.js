import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter } from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GlobalStyles } from "./styles";
import "./styles/app.scss";



render(
  <BrowserRouter>
   <Provider store={store}>
                 <GlobalStyles />
                  <App />
                  </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
