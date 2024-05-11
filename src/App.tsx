import React from "react";
import "./App.css";
import ContextApi from "./utils/ContextApi";
import AppContainer from "./AppContainer";

function App() {
  return (
    <React.Fragment>
      <ContextApi>
        <AppContainer />
      </ContextApi>
    </React.Fragment>
  );
}

export default App;
