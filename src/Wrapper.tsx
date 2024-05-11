import Footer from "./layout/footer/Footer";
import Header from "./layout/header/Header";
import Body from "./layout/body/Body";
import PageRouter from "./routes/PageRouter";
import { useContexApi } from "./utils/ContextApi";

const Wrapper = () => {
  const authAdmin = useContexApi();

  return (
    <>
      {authAdmin?.admin ? null : <Header />}
      <Body>
        <PageRouter />
      </Body>
      {authAdmin?.admin ? null : <Footer />}
    </>
  );
};

export default Wrapper;
