import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import logger from "redux-logger"
import thunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension"
import {createStore,applyMiddleware} from "redux"
import { Provider} from "react-redux"
import rootReducer from "./reducers/index"
import router from "./router"
import NavBar from "./component/NavBar"

const store=createStore(rootReducer,composeWithDevTools(applyMiddleware(logger,thunk)))
ReactDOM.render(
  <Provider store={store}>
    <Router router={router}>
      <NavBar/>
      {router}
    </Router>
  </Provider>

    ,
  document.getElementById('root')
);

