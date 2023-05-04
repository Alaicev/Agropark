import React from 'react';
import './App.css';
import AppContainer from './AppContainer';
import store from "./redux/store";
import {Provider} from "react-redux";

function App() {
  return (
    <div className="App">
        <Provider store={store}>
      <AppContainer/>
        </Provider>
    </div>
  );
}

export default App;
