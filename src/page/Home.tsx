import { CSSProperties } from "react";
import MainHero from "../component/hero/mainHero/MainHero";
import Subscription from "../component/subscription/Subscription";

// Set the page title
const pageTitle = () => (document.title = "Welcome to Elev8trix");
pageTitle();

const Home = () => {
  return (
    <div>
      <section style={heroSection}>
        <MainHero />
      </section>
      <section>
        <Subscription />
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
