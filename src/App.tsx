import React, { useState } from "react";
import "./App.css";
import Footer from "./layout/footer/Footer";
import Header from "./layout/header/Header";
import Body from "./layout/body/Body";
import PageRouter from "./router/PageRouter";
import { ContextApi } from "./utils/ContextApi";

function App() {
  const [isAdmin] = useState(false);

  return (
    <React.Fragment>
      <ContextApi>
        {isAdmin ? null : <Header />}
        <Body>
          <PageRouter />
        </Body>
        {isAdmin ? null : <Footer />}
      </ContextApi>
    </React.Fragment>
  );
}

export default App;
