import { CSSProperties } from "react";
import MainHero from "../component/hero/mainHero/MainHero";

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
