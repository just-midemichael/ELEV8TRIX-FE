import Footer from "./layout/footer/Footer";
import Header from "./layout/header/Header";
import Body from "./layout/body/Body";
import PageRouter from "./routes/PageRouter";
import { useContexApi } from "./utils/ContextApi";
import React from "react";

const AppContainer = () => {
  const authAdmin = useContexApi();

  return (
    <React.Fragment>
      {authAdmin?.admin ? null : <Header />}
      <Body>
        <PageRouter />
      </Body>
      {authAdmin?.admin ? null : <Footer />}
    </React.Fragment>
  );
};

export default AppContainer;
