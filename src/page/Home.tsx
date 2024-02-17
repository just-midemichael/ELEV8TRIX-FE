import { CSSProperties } from "react";
import MainHero from "../component/hero/mainHero/MainHero";
import Subscription from "../component/subscription/Subscription";
import PartnersBanner from "../component/partnersBanner/PartnersBanner";
import Tab from "../component/tab/Tab.tsx";
import { courseData } from "../component/tab/TabData.tsx";

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
        <PartnersBanner />
      </section>
      <section style={{ padding: "10px 5%" }}>
        <Tab tabs={courseData} />
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
