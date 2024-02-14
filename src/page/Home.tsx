import { CSSProperties } from "react";
import MainHero from "../component/hero/mainHero/MainHero";

// Set the page title
const pageTitle = () => (document.title = "Home");
pageTitle();

const Home = () => {
  return (
    <div>
      <section style={heroSection}>
        <MainHero />
      </section>
    </div>
  );
};

export default Home;

const heroSection: CSSProperties = {
  padding: "50px 5%",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};
