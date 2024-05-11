import React from "react";
import "./App.css";
import ContextApi from "./utils/ContextApi";
import Wrapper from "./Wrapper";

function App() {
  return (
    <React.Fragment>
      <ContextApi>
        <Wrapper />
      </ContextApi>
    </React.Fragment>
  );
}

export default App;
