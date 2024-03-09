import { CSSProperties } from "react";
import CourseHero from "../component/hero/courseHero/CourseHero";
import Subscription from "../component/subscription/Subscription";
import styles from "../style/Courses.module.scss";
import Tab from "../component/tab/Tab";
import {
  categoryDevOpsData,
  categorySoftwareEngineeringData,
  categoryCyberSecurityData,
  categoryDataScienceData,
  categoryAllData
} from "../data/TabData";

// Set the page title
const pageTitle = () => (document.title = "Courses");
pageTitle();

const Courses = () => {
  return (
    <div>
      <section className={styles.heroSection} style={heroSection}>
        <CourseHero />
      </section>
      <section style={courseSection}>
        <Tab
          tabs={categoryAllData}
          tabTitle={"Elev8te your carrer with one of these courses"}
        />
        <Tab
          tabs={categoryDevOpsData}
          tabTitle={"Dev Ops"}
          labelClassName={styles.tabLabel}
        />
        <Tab
          tabs={categorySoftwareEngineeringData}
          tabTitle={"Software Engineer"}
          labelClassName={styles.tabLabel}
        />
        <Tab
          tabs={categoryCyberSecurityData}
          tabTitle={"Cyber Security"}
          labelClassName={styles.tabLabel}
        />
        <Tab
          tabs={categoryDataScienceData}
          tabTitle={"Data Science & Analytics"}
          labelClassName={styles.tabLabel}
        />
      </section>
      <section>
        <Subscription />
      </section>
    </div>
  );
};

export default Courses;

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
