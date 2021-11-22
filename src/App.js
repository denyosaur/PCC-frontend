import React from "react";
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import MainBody from "./components/MainBody";

import './App.css';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <MainBody />
      </BrowserRouter>
    </div>
  );
}

export default App;
