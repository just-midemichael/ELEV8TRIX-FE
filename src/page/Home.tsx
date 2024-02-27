import { CSSProperties } from "react";
import styles from "../style/home.module.scss";
import MainHero from "../component/hero/mainHero/MainHero.tsx";
import Subscription from "../component/subscription/Subscription.tsx";
import PartnersBanner from "../component/partnersBanner/PartnersBanner.tsx";
import Tab from "../component/tab/Tab.tsx";
import { courseData } from "../data/TabData.tsx";
import CoreValue from "../component/coreValue/CoreValue.tsx";
import Mentor from "../component/mentor/Mentor.tsx";
import CloudmasteryCommunity from "../component/community/CloudmasteryCommunity.tsx";
import Testimony from "../component/testimony/Testimony.tsx";

// Set the page title
const pageTitle = () => (document.title = "Welcome to Elev8trix");
pageTitle();

const Home = () => {
  return (
    <div>
      <section className={styles.heroSection} style={heroSection}>
        <MainHero />
      </section>
      <section>
        <PartnersBanner />
      </section>
      <section className={styles.courseSection} style={courseSection}>
        <Tab
          tabs={courseData}
          tabTitle={"Elev8te your carrer with one of these courses"}
        />
      </section>
      <section className={styles.corevalueSection} style={corevalueSection}>
        <CoreValue />
      </section>
      <section className={styles.mentorSection} style={mentorSection}>
        <Mentor />
      </section>
      <section className={styles.communitySection} style={communitySection}>
        <CloudmasteryCommunity />
      </section>
      <section className={styles.testimonySection} style={testimonySection}>
        <Testimony />
      </section>
      <section>
        <Subscription />
      </section>
    </div>
  );
};

export default Home;

const heroSection: CSSProperties = {
  padding: "50px 7%",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

const courseSection: CSSProperties = {
  padding: "10px 7%"
};

const corevalueSection: CSSProperties = {
  width: "100%",
  height: "fit-content",
  minHeight: "584px",
  backgroundColor: "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  padding: "40px 7%"
};

const mentorSection: CSSProperties = {
  width: "100%",
  height: "fit-content",
  minHeight: "520px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "50px 7%"
};

const communitySection: CSSProperties = {
  padding: "50px 7%",
  backgroundColor: "#3149A1"
};

const testimonySection: CSSProperties = {
  height: "fit-content",
  minHeight: "690px",
  backgroundColor: "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "50px 7%"
};
