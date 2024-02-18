import { CSSProperties } from "react";
import styles from "../style/home.module.scss";
import MainHero from "../component/hero/mainHero/MainHero";
import Subscription from "../component/subscription/Subscription";
import PartnersBanner from "../component/partnersBanner/PartnersBanner";
import Tab from "../component/tab/Tab.tsx";
import { courseData } from "../component/tab/TabData.tsx";
import CoreValue from "../component/coreValue/CoreValue.tsx";
import Mentor from "../component/mentor/Mentor.tsx";
import CloudmasteryCommunity from "../component/community/CloudmasteryCommunity.tsx";

// Set the page title
const pageTitle = () => (document.title = "Welcome to Elev8trix");
pageTitle();

const Home = () => {
  return (
    <div>
      <section className={styles.container} style={heroSection}>
        <MainHero />
      </section>
      <section>
        <PartnersBanner />
      </section>
      <section style={{ padding: "10px 5%" }}>
        <Tab tabs={courseData} />
      </section>
      <section style={corevalueSection}>
        <CoreValue />
      </section>
      <section style={mentorSection}>
        <Mentor />
      </section>
      <section style={communitySection}>
        <CloudmasteryCommunity />
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

const corevalueSection: CSSProperties = {
  width: "100%",
  height: "fit-content",
  minHeight: "584px",
  backgroundColor: "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  padding: "40px 5%"
};

const mentorSection: CSSProperties = {
  width: "100%",
  height: "fit-content",
  minHeight: "520px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "50px 5%"
};

const communitySection: CSSProperties = {
  padding: "50px 5%"
};
