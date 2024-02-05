import React from "react";
import "./App.css";
import Footer from "./layout/footer/Footer";
import Header from "./layout/header/Header";
import Body from "./layout/body/Body";
import PageRouter from "./router/PageRouter";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Body>
        <PageRouter />
      </Body>
      <Footer />
    </React.Fragment>
  );
}

export default App;
